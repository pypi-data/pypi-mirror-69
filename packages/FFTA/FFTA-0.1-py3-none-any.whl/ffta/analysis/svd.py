# -*- coding: utf-8 -*-
"""
Created on Wed Mar  7 22:04:39 2018

@author: Raj
"""

import pycroscopy as px
import pyUSID as usid
import numpy as np

from pycroscopy.processing.svd_utils import SVD

from matplotlib import pyplot as plt

from ffta.hdf_utils import hdf_utils, get_utils

"""
Wrapper to SVD functions, specific to ffta Class.

Typical usage:
    >> h5_svd = svd.FF_SVD(h5_avg)
    >> clean = [0,1,2,3] # to filter to only first 4 components
    >> h5_rb = svd.FF_SVD_Filter(h5_avg, clean_components=clean)

"""

def FF_SVD(h5_main, num_components=128, show_plots=True, override=True):
    """
    h5_main : h5Py Dataset
        Main dataset to filter
        
    num_components : int, optional
        Number of SVD components. Increasing this lenghtens computation
        
    show_plots : bool, optional
        If True displays skree, abundance_maps, and data loops
        
    override : bool, optional
        Force SVD.Compute to reprocess data no matter what
        
    Returns
    -------
    h5_rb_gp : h5Py Group
        Group containing the h5_svd data
    
    """
    
    if not(isinstance(h5_main, usid.USIDataset)):
        h5_main = usid.USIDataset(h5_main)
    
    h5_svd = SVD(h5_main, num_components=num_components)
    
    # try: # use property from USIDataset 
    [num_rows, num_cols] = h5_main.pos_dim_sizes
    
    # except:
    #     parm_dict = get_utils.get_params(h5_main)
    #     num_rows = parm_dict['num_rows']
    #     num_cols = parm_dict['num_cols']
    
    # performs SVD
    h5_svd_group = h5_svd.compute(override=override)
    
    h5_U = h5_svd_group['U']
    h5_V = h5_svd_group['V']
    h5_S = h5_svd_group['S']
    
    skree_sum = np.zeros(h5_S.shape)

    # abundance maps (eigenvalues) and eigenvectors    
    abun_maps = np.reshape(h5_U[:,:25], (num_rows, num_cols,-1))
    eigen_vecs = h5_V[:16, :]
    h5_spec_vals = h5_main.get_spec_values('Time')
    
    if show_plots:
        for i in range(h5_S.shape[0]):
            skree_sum[i] = np.sum(h5_S[:i])/np.sum(h5_S)
    
        plt.figure()
        plt.plot(skree_sum, 'o')
        print('Need', skree_sum[skree_sum<0.8].shape[0],'components for 80%')
        print('Need', skree_sum[skree_sum<0.9].shape[0],'components for 90%')
        print('Need', skree_sum[skree_sum<0.95].shape[0],'components for 95%')
        print('Need', skree_sum[skree_sum<0.99].shape[0],'components for 99%')
        
        fig_skree, axes = usid.viz.plot_utils.plot_scree(h5_S, title='Skree plot')
        
        fig_abun, axes = usid.viz.plot_utils.plot_map_stack(abun_maps, num_comps=16, title='SVD Abundance Maps',
                                                      color_bar_mode='single', cmap='inferno', reverse_dims=True, fig_mult=(3.5,3.5))

        fig_eigvec, axes = usid.viz.plot_utils.plot_curves(h5_spec_vals*1e3, eigen_vecs, use_rainbow_plots=False, 
                                                     x_label='Time (ms)', y_label='Displacement (a.u.)', 
                                                     num_plots=16, subtitle_prefix='Component', 
                                                     title='SVD Eigenvectors', evenly_spaced=False)
        
        fig_eigvec.tight_layout()
    
    return h5_svd_group

def FF_SVD_filter(h5_main, clean_components=None):
    """
    Filters data given the array clean_components
    
    Clean_components has 2 components will filter from start to finish
    Clean_components has 3+ components will use those individual components
    
    h5_main : h5Py
        Dataset to be filtered and reconstructed.
        This must be the same as where SVD was performed
    
    """
    if not(isinstance(h5_main, usid.USIDataset)):
        h5_main = usid.USIDataset(h5_main)
        
    h5_rb = px.processing.svd_utils.rebuild_svd(h5_main, components=clean_components)
    
    parameters = get_utils.get_params(h5_main)
    
    for key in parameters:
        if key not in h5_rb.attrs:
            h5_rb.attrs[key] = parameters[key]
    
    return h5_rb