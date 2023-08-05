#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov  7 10:40:07 2017
Copyright (C) 2017
@author: Derek Pisner (dPys)
"""
import warnings
import numpy as np
import tkinter
import matplotlib
warnings.filterwarnings("ignore")
matplotlib.use('agg')


def plot_conn_mat(conn_matrix, labels, out_path_fig):
    """
    Plot a connectivity matrix.

    Parameters
    ----------
    conn_matrix : array
        NxN matrix.
    labels : list
        List of string labels corresponding to ROI nodes.
    out_path_fig : str
        File path to save the connectivity matrix image as a .png figure.
    """
    import matplotlib
    matplotlib.use('agg')
    from matplotlib import pyplot as plt
    from nilearn.plotting import plot_matrix
    from pynets.core import thresholding

    conn_matrix = thresholding.standardize(conn_matrix)

    dpi_resolution = 300
    [z_min, z_max] = -np.abs(conn_matrix).max()*0.5, np.abs(conn_matrix).max()*0.5
    try:
        plot_matrix(conn_matrix, figure=(10, 10), labels=labels, vmax=z_max, vmin=z_min,
                    reorder='average', auto_fit=True, grid=False, colorbar=False)
    except RuntimeWarning:
        print('Connectivity matrix too sparse for plotting...')
    plt.savefig(out_path_fig, dpi=dpi_resolution)
    plt.close()
    return


def plot_community_conn_mat(conn_matrix, labels, out_path_fig_comm, community_aff):
    """
    Plot a community-parcellated connectivity matrix.

    Parameters
    ----------
    conn_matrix : array
        NxN matrix.
    labels : list
        List of string labels corresponding to ROI nodes.
    out_path_fig_comm : str
        File path to save the community-parcellated connectivity matrix image as a .png figure.
    community_aff : array
        Community-affiliation vector.
    """
    import matplotlib
    import matplotlib.pyplot as plt
    import matplotlib.patches as patches
    matplotlib.use('agg')
    #from pynets import thresholding
    from nilearn.plotting import plot_matrix
    from pynets.core import thresholding

    conn_matrix = thresholding.standardize(conn_matrix)

    dpi_resolution = 300

    #conn_matrix = np.array(np.array(thresholding.autofix(conn_matrix)))
    sorting_array = sorted(range(len(community_aff)), key=lambda k: community_aff[k])
    sorted_conn_matrix = conn_matrix[sorting_array, :]
    sorted_conn_matrix = sorted_conn_matrix[:, sorting_array]
    [z_min, z_max] = -np.abs(sorted_conn_matrix).max()*0.5, np.abs(sorted_conn_matrix).max()*0.5
    rois_num = sorted_conn_matrix.shape[0]
    if rois_num < 100:
        try:
            plot_matrix(conn_matrix, figure=(10, 10), labels=labels, vmax=z_max, vmin=z_min,
                        reorder=False, auto_fit=True, grid=False, colorbar=False)
        except RuntimeWarning:
            print('Connectivity matrix too sparse for plotting...')
    else:
        try:
            plot_matrix(conn_matrix, figure=(10, 10), vmax=z_max, vmin=z_min, auto_fit=True,
                        grid=False, colorbar=False)
        except RuntimeWarning:
            print('Connectivity matrix too sparse for plotting...')

    ax = plt.gca()
    total_size = 0
    for community in np.unique(community_aff):
        size = sum(sorted(community_aff) == community)
        ax.add_patch(patches.Rectangle(
                (total_size, total_size),
                size,
                size,
                fill=False,
                edgecolor='black',
                alpha=None,
                linewidth=1
            )
        )
        total_size += size

    plt.savefig(out_path_fig_comm, dpi=dpi_resolution)
    plt.close()
    return


def plot_conn_mat_func(conn_matrix, conn_model, atlas, dir_path, ID, network, labels, roi, thr, node_size, smooth,
                       hpass):
    """
    API for selecting among various functional connectivity matrix plotting approaches.

    Parameters
    ----------
    conn_matrix : array
        NxN matrix.
    conn_model : str
       Connectivity estimation model (e.g. corr for correlation, cov for covariance, sps for precision covariance,
       partcorr for partial correlation). sps type is used by default.
    atlas : str
        Name of atlas parcellation used.
    dir_path : str
        Path to directory containing subject derivative data for given run.
    ID : str
        A subject id or other unique identifier.
    network : str
        Resting-state network based on Yeo-7 and Yeo-17 naming (e.g. 'Default') used to filter nodes in the study of
        brain subgraphs.
    labels : list
        List of string labels corresponding to ROI nodes.
    roi : str
        File path to binarized/boolean region-of-interest Nifti1Image file.
    thr : float
        A value, between 0 and 1, to threshold the graph using any variety of methods
        triggered through other options.
    node_size : int
        Spherical centroid node size in the case that coordinate-based centroids
        are used as ROI's.
    smooth : int
        Smoothing width (mm fwhm) to apply to time-series when extracting signal from ROI's.
    hpass : bool
        High-pass filter values (Hz) to apply to node-extracted time-series.
    """
    import networkx as nx
    import os.path as op
    from pynets.plotting import plot_graphs

    out_path_fig = "%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s" % (dir_path, '/', ID, '_modality-func_',
                                                       '%s' % ("%s%s%s" % ('rsn-', network, '_') if
                                                               network is not None else ''),
                                                       '%s' % ("%s%s%s" % ('roi-',
                                                                           op.basename(roi).split('.')[0],
                                                                           '_') if roi is not None else ''),
                                                       'est-', conn_model, '_',
                                                       '%s' % (
                                                           "%s%s%s" % ('nodetype-spheres-',
                                                                       node_size, 'mm_') if
                                                           ((node_size != 'parc') and (node_size is not
                                                                                       None))
                                                           else 'nodetype-parc_'),
                                                       "%s" % ("%s%s%s" % ('smooth-', smooth, 'fwhm_') if
                                                               float(smooth) > 0 else ''),
                                                       "%s" % ("%s%s%s" % ('hpass-', hpass, 'Hz_') if
                                                               hpass is not None else ''),
                                                       '_thr-', thr, '_adj_mat.png')

    plot_graphs.plot_conn_mat(conn_matrix, labels, out_path_fig)

    # Plot community adj. matrix
    try:
        from pynets.stats.netstats import community_resolution_selection
        G = nx.from_numpy_matrix(np.abs(conn_matrix))
        _, node_comm_aff_mat, resolution, num_comms = community_resolution_selection(G)
        out_path_fig_comm = "%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s" % (dir_path, '/', ID, '_modality-func_',
                                                                '%s' % ("%s%s%s" % ('rsn-', network, '_') if
                                                                        network is not None else ''),
                                                                '%s' % ("%s%s%s" % ('roi-',
                                                                                    op.basename(roi).split('.')[0],
                                                                                    '_') if roi is not None else ''),
                                                                'est-', conn_model, '_',
                                                                '%s' % (
                                                                    "%s%s%s" % ('nodetype-spheres-',
                                                                                node_size, 'mm_') if
                                                                    ((node_size != 'parc') and (node_size is not
                                                                                                None))
                                                                    else 'nodetype-parc_'),
                                                                "%s" % ("%s%s%s" % ('smooth-', smooth, 'fwhm_') if
                                                                        float(smooth) > 0 else ''),
                                                                "%s" % ("%s%s%s" % ('hpass-', hpass, 'Hz_') if
                                                                        hpass is not None else ''),
                                                                '_thr-', thr, '_adj_mat_comm.png')
        plot_graphs.plot_community_conn_mat(conn_matrix, labels, out_path_fig_comm, node_comm_aff_mat)
    except:
        print('\nWARNING: Louvain community detection failed. Cannot plot community matrix...')

    return


def plot_conn_mat_struct(conn_matrix, conn_model, atlas, dir_path, ID, network, labels, roi, thr, node_size,
                         target_samples, track_type, directget, min_length):
    """
    API for selecting among various structural connectivity matrix plotting approaches.

    Parameters
    ----------
    conn_matrix : array
        NxN matrix.
    conn_model : str
       Connectivity estimation model (e.g. corr for correlation, cov for covariance, sps for precision covariance,
       partcorr for partial correlation). sps type is used by default.
    atlas : str
        Name of atlas parcellation used.
    dir_path : str
        Path to directory containing subject derivative data for given run.
    ID : str
        A subject id or other unique identifier.
    network : str
        Resting-state network based on Yeo-7 and Yeo-17 naming (e.g. 'Default') used to filter nodes in the study of
        brain subgraphs.
    labels : list
        List of string labels corresponding to ROI nodes.
    roi : str
        File path to binarized/boolean region-of-interest Nifti1Image file.
    thr : float
        A value, between 0 and 1, to threshold the graph using any variety of methods
        triggered through other options.
    node_size : int
        Spherical centroid node size in the case that coordinate-based centroids
        are used as ROI's.
    target_samples : int
        Total number of streamline samples specified to generate streams.
    track_type : str
        Tracking algorithm used (e.g. 'local' or 'particle').
    directget : str
        The statistical approach to tracking. Options are: det (deterministic), closest (clos), boot (bootstrapped),
        and prob (probabilistic).
    min_length : int
        Minimum fiber length threshold in mm to restrict tracking.
    """
    from pynets.plotting import plot_graphs
    import networkx as nx
    import os.path as op
    out_path_fig = "%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s" % (dir_path, '/', ID, '_modality-dwi_',
                                                                 '%s' % ("%s%s%s" % ('rsn-', network, '_') if
                                                                         network is not None else ''),
                                                                 '%s' % ("%s%s%s" % ('roi-',
                                                                                   op.basename(roi).split(
                                                                                       '.')[0], '_') if
                                                                         roi is not None else ''),
                                                                 'est-', conn_model, '_', '%s' % (
                                                                   "%s%s%s" % ('nodetype-spheres-',
                                                                               node_size, 'mm_')
                                                                   if ((node_size != 'parc') and
                                                                       (node_size is not None))
                                                                   else 'nodetype-parc_'),
                                                                 "%s" % ("%s%s%s" % ('samples-', int(target_samples),
                                                                                     'streams_')
                                                                         if float(target_samples) > 0 else '_'),
                                                                 'tt-', track_type, '_dg-', directget,
                                                                 '_ml-', min_length,
                                                                 '_thr-', thr, '_adj_mat.png')
    plot_graphs.plot_conn_mat(conn_matrix, labels, out_path_fig)

    # Plot community adj. matrix
    try:
        from pynets.stats.netstats import community_resolution_selection
        G = nx.from_numpy_matrix(np.abs(conn_matrix))
        _, node_comm_aff_mat, resolution, num_comms = community_resolution_selection(G)
        out_path_fig_comm = "%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s" % (dir_path, '/', ID, '_modality-dwi_',
                                                                          '%s' % ("%s%s%s" % ('rsn-', network, '_') if
                                                                                  network is not None else ''),
                                                                          '%s' % ("%s%s%s" % ('roi-',
                                                                                             op.basename(roi).split(
                                                                                                 '.')[0],
                                                                                              '_') if roi is not
                                                                                                      None else ''),
                                                                          'est-', conn_model, '_', '%s' % (
                                                                              "%s%s%s" % ('nodetype-spheres-',
                                                                                          node_size, 'mm_')
                                                                              if ((node_size != 'parc') and
                                                                                  (node_size is not None))
                                                                              else 'nodetype-parc_'),
                                                                          "%s" % ("%s%s%s" % ('samples-',
                                                                                              int(target_samples),
                                                                                              'streams_')
                                                                                  if float(target_samples) > 0
                                                                                  else '_'),
                                                                          'tt-', track_type, '_dg-', directget,
                                                                          '_ml-', min_length,
                                                                          '_thr-', thr, '_adj_mat_comm.png')
        plot_graphs.plot_community_conn_mat(conn_matrix, labels, out_path_fig_comm, node_comm_aff_mat)
    except:
        print('\nWARNING: Louvain community detection failed. Cannot plot community matrix...')

    return
