#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jan 24 14:40:14 2020

@author: gc4217
"""

import numpy as np
import os, sys
from decomp import plot, read


## =============================================================================
## Parameters
input_file = sys.argv[1]
plot_types = read.read_post_proc(input_file)[0]
n_atom_unit_cell = read.read_post_proc(input_file)[1]
Masses = read.read_post_proc(input_file)[2]
file_eigenvectors = read.read_post_proc(input_file)[3]
file_SPOSCAR = read.read_post_proc(input_file)[4]
max_Z = read.read_post_proc(input_file)[5]
freq_res = read.read_post_proc(input_file)[6]
kinput = read.read_post_proc(input_file)[7::][0]
labels = read.read_post_proc(input_file)[8]
modes = read.read_post_proc(input_file)[9]
temperatures_folders = read.read_post_proc(input_file)[10]



tot_atoms_uc = int(np.sum(n_atom_unit_cell)) 
Nqpoints, qpoints_scaled, ks, freqs_disp, eigvecs, distances, Hk = read.read_phonopy(file_eigenvectors, tot_atoms_uc)
Ruc, R0, masses, masses_for_animation = read.read_SPOSCAR_and_masses(file_SPOSCAR, n_atom_unit_cell, n_atom_unit_cell, Masses)  
#### =============================================================================

for mode in plot_types:
    if(mode==0):
        namedir = plot.create_folder('')
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        for i in range(Nqpoints):
            to_skip = (1+meta)*i
            ZZ = np.genfromtxt('Zqs',skip_header=to_skip+1, max_rows=meta)
            Z_q = ZZ[:,0]
            Z = ZZ[:,1:]
            to_skip2 = 4*i
            Params = np.genfromtxt('quasiparticles',skip_header=to_skip2+1, max_rows=3)
    
            k_scaled = qpoints_scaled[i]
            eigvec = eigvecs[i]
            freq_disp = freqs_disp[i]
            print(' Creating plots for k point = ', k_scaled)
            for n in range(tot_atoms_uc*3):
                params = Params[:,n]
                plot.save_proj(freq,Z[:,n],Z_q, qpoints_scaled[i], Ruc, eigvec[:,n],freq_disp[n],n,namedir,masses_for_animation, params,max_Z)
    
    
    if(mode==1):
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        ZQS = [np.zeros(meta)]
        count = 1
        accepted_qpoints = []
        accepted_labels = []
        for i in range(Nqpoints):
            to_skip = (1+meta)*i
            qpoint = np.genfromtxt('Zqs',skip_header=to_skip+0, max_rows=1)
            for j in range(len(kinput)):
                if(np.allclose(qpoint, kinput[j]) and (qpoint.tolist() not in accepted_qpoints)):
                    accepted_qpoints.append(qpoint.tolist())
                    accepted_labels.append(labels[j])
                    Zq = np.genfromtxt('Zqs',skip_header=to_skip+1, max_rows=meta)
                    ZQS.append(Zq[:,0])
                    count = count + 1
                
                    #    Ztot = np.genfromtxt('ZS',usecols=0)
        ZQS = np.array(ZQS).T
        ZQS[:,0] = np.sum(ZQS[:,1::],axis=1)
        plot.plot1(freq,ZQS, accepted_labels)
        
        
    if(mode==2): 
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        ZQS = np.zeros((meta, tot_atoms_uc*3+1, len(kinput)))
        count = 0
        accepted_qpoints = []
        accepted_labels = []
        freqs_from_disp = np.zeros((tot_atoms_uc*3,len(kinput)))
        for i in range(Nqpoints):
            to_skip = (1+meta)*i
            qpoint = np.genfromtxt('Zqs',skip_header=to_skip+0, max_rows=1)
    
            for j in range(len(kinput)):
                if(np.allclose(qpoint, kinput[j]) and (qpoint.tolist() not in accepted_qpoints)):
                    accepted_qpoints.append(qpoint.tolist())
                    accepted_labels.append(labels[j])
    
                    for m in range(Nqpoints):
                        if(np.allclose(qpoint,qpoints_scaled[m])):
                            freqs_from_disp[:,count] = freqs_disp[m]
                            break
                    
                    
                    Zq = np.genfromtxt('Zqs',skip_header=to_skip+1, max_rows=meta)
                    ZQS[:,:,count] = Zq[:,:]
                    count = count + 1
                    
        
        plot.plot2(freq,ZQS, modes, accepted_labels, freqs_from_disp)
        
        
    if(mode==3):
        subdirectories = [x[1] for x in os.walk(temperatures_folders)][0]
        subdirectories.sort(key= lambda x: float(x.strip('K')))
        Ts = [int(x.strip('K')) for x in subdirectories]
        frequencies = np.zeros((2,tot_atoms_uc*3,len(kinput),len(Ts)))
        count_T = 0
        for subdir in subdirectories:
            count_q = 0
            accepted_qpoints = []
            accepted_labels = []
    
            for i in range(Nqpoints):
                to_skip = (4)*i
                qpoint = np.genfromtxt(temperatures_folders+subdir+'/quasiparticles',skip_header=to_skip+0, max_rows=1)
                for j in range(len(kinput)):
                    if(np.allclose(qpoint, kinput[j]) and (qpoint.tolist() not in accepted_qpoints)):
                        accepted_qpoints.append(qpoint.tolist())
                        accepted_labels.append(labels[j])
                        omegas_gammas = np.genfromtxt(temperatures_folders+subdir+'/quasiparticles',skip_header=to_skip+1, max_rows=3)
                        frequencies[:,:,count_q, count_T] = omegas_gammas[0::2,:]
                        count_q = count_q + 1
            count_T = count_T + 1
        
        diff =len(frequencies[0,0,:,0]) -  len(accepted_labels) 
        if(diff != 0): #this is to eliminate repetitive kpoints if present
            for h in range(diff):
                frequencies = np.delete(frequencies, -1, axis=2)
        plot.plot3(Ts, frequencies, modes, accepted_labels)
    
       
    if(mode==4):
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        # take the path the user inputs and find all the k points you can plot
        ks_path, x_labels, distances = read.read_path(kinput, Nqpoints, labels, Hk)
        frequencies = np.zeros((2,tot_atoms_uc*3,len(ks_path)))
        frequencies_disp = np.zeros((1,tot_atoms_uc*3,len(ks_path)))
        ZQS = np.zeros((meta, 1+len(ks_path))) #for the DOS
        
        count_DOS, count = 0, 0
        accepted_qpoints = []
        for i in range(Nqpoints):
            to_skip = (4)*i
            qpoint = np.genfromtxt('quasiparticles',skip_header=to_skip+0, max_rows=1)
            index_disp = np.min((np.argwhere(np.all(np.equal(qpoint, qpoints_scaled), axis=1))))
            if(np.any(np.all(np.equal(qpoint,ks_path), axis=1))): # e' un delirio questo ahaha, verifica che il qpoint trovato sia nel kpath
                params = np.genfromtxt('quasiparticles',skip_header=to_skip+1, max_rows=3)
                omegas_gammas = params[0::2,:]
                frequencies[:,:,count] = omegas_gammas
                frequencies_disp[:,:,count] = freqs_disp[index_disp,:]
                count = count + 1
            
            to_skip_DOS = (1+meta)*i
            for j in range(len(ks_path)):
                if(np.allclose(qpoint, ks_path[j]) and (qpoint.tolist() not in accepted_qpoints)):
                    accepted_qpoints.append(qpoint.tolist())
                    Zq = np.genfromtxt('Zqs',skip_header=to_skip_DOS+1, max_rows=meta)
                    ZQS[:,count_DOS+1] = Zq[:,0]
                    count_DOS = count_DOS + 1
                
        ZQS[:,0] = np.loadtxt('ZS', usecols=0)    
        plot.plot4(distances, frequencies, frequencies_disp, ks_path, x_labels, ZQS)
    
    if(mode==5):
        # take the path the user inputs and find all the k points you can plot
        ks_path, x_labels, distances = read.read_path(kinput, Nqpoints, labels, Hk) #you use this only to get x_labels, you should include this into read_phonopy
        num_modes = len(modes)
    
        
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        ZQS = np.zeros((meta, len(qpoints_scaled)))
        ZQS_proj = np.zeros((meta, num_modes, len(qpoints_scaled)))
        count = 0
        accepted_qpoints = []
        freqs_from_disp = np.zeros((len(qpoints_scaled),tot_atoms_uc*3))
        for i in range(Nqpoints):
            to_skip = (1+meta)*i
            qpoint = np.genfromtxt('Zqs',skip_header=to_skip+0, max_rows=1)
            for j in range(len(qpoints_scaled)):
                if(np.allclose(qpoint, qpoints_scaled[j]) and ((qpoint.tolist() not in accepted_qpoints) or i==j)): #è un completo delirio
                    accepted_qpoints.append(qpoint.tolist())
                    for m in range(Nqpoints):
                        if(np.allclose(qpoint,qpoints_scaled[m])):
                            freqs_from_disp[count, :] = freqs_disp[m,:]
                            break
                    Zq = np.genfromtxt('Zqs',skip_header=to_skip+1, max_rows=meta)
                    if(num_modes == tot_atoms_uc*3):
                        ZQS[:,count] = Zq[:,0]
                    else:
                        for b in range(len(modes)):
                            mm = modes[b]
                            ZQS_proj[:,b,i] = Zq[:,mm+1]
                    count = count + 1
    
        plot.plot_k2(freq,ZQS,ZQS_proj, x_labels,[freqs_from_disp],max_Z,modes, freq_res, title=['0K dispersion'])

    if(mode==6):
        # take the path the user inputs and find all the k points you can plot
        ks_path, x_labels, distances = read.read_path(kinput, Nqpoints, labels, Hk) #you use this only to get x_labels, you should include this into read_phonopy
        num_modes = len(modes)
        N_kpath = len(ks_path)
        
        freq = np.loadtxt('ZS', usecols=0)
        meta = len(freq)
        accepted_qpoints = []
        for i in range(Nqpoints):
            to_skip = (1+meta)*i
            qpoint = np.genfromtxt('Zqs',skip_header=to_skip+0, max_rows=1)
            for j in range(len(ks_path)):
                if(np.allclose(qpoint, ks_path[j]) and ((qpoint.tolist() not in accepted_qpoints) or i==j)): #è un completo delirio
                    accepted_qpoints.append(qpoint.tolist())
                    eigvec = eigvecs[i]
                    freq_disp = freqs_disp[i]
                    Zq = np.genfromtxt('Zqs',skip_header=to_skip+1, max_rows=meta)
                    for b in range(len(modes)):
                        mm = modes[b]
                        ani = plot.plot6(freq,Zq[:,mm+1],Zq[:,0], np.dot(Hk,qpoint),eigvec[:,mm],freq_disp[mm],mm,Ruc,file_eigenvectors,masses_for_animation, max_Z)
        
        
        
        

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

