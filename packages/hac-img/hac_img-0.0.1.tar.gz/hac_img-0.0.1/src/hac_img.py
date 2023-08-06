from skimage.measure import compare_ssim
import time
import numpy as np
from itertools import product as combo
import os
import shutil
from fnmatch import fnmatch
from PIL import Image
from os import path as pt

def get_time():
    global timeCounter
    currentTime = time.time() - timeCounter
    timeCounter = time.time()
    return currentTime

def get_image(img_path):
    img = np.array(Image.open(img_path).resize((length, width), Image.NEAREST))
    return img
     
def flatten_dirs(dir_path, patterns):
    for path, subdirs, files in os.walk(dir_path):
        for i, name in enumerate(files):
            for pattern in patterns:
                if fnmatch(name, pattern):
                    filename = os.path.join(path, name)
                    shutil.move(filename, dir_path+name)
        if not os.listdir(path):
            os.rmdir(path)

def build_corpus():
    cluster_items = list()
    for items in clusters.values():
        cluster_items += items
    for ind1, data1 in cluster_items:
        for ind2, data2 in cluster_items:
            if ind1 < ind2:
                score, diff = compare_ssim(data1, data2, full=True, multichannel=True)
                CORPUS[(ind1, ind2)] = score

def get_similar_score(ind1):
    score_set = list()
    for ind2 in clusters:
        if ind1 == ind2:
            continue
        min_score = MAX_SCORE
        merge_index = -1
        combinations = combo(clusters[ind1], clusters[ind2])
        for f1, f2 in combinations:
            if f1 < f2:
                score = CORPUS[(f1, f2)]
            else:
                score = CORPUS[(f2, f1)]
            if score < min_score:
                min_score = score
                merge_index = ind2
                
        score_set.append((min_score, merge_index))
    max_score, merge_index = max(score_set, key = lambda x: x[0])
    if max_score < THRESHOLD:
        merge_index = -1
    return max_score, merge_index

def merge_clusters(ind1, ind2):
    clusters[ind1] += clusters[ind2]
    del (clusters[ind2])             
                

def cluster_images(dir_path, flatten_nest=True, max_iterations=10000, verbose=False):
    dimension = 2**5
    global length, width, THRESHOLD, MAX_SCORE, MAX_ITERATIONS, clusters, CORPUS, timeCounter
    length, width = dimension, dimension
    THRESHOLD = 0.08
    MAX_SCORE = float('inf')
    MAX_ITERATIONS = max_iterations
    patterns = ["*.jpg", "*.jpeg", "*.png"]
    clusters = dict()
    CORPUS = dict()
    timeCounter = time.time()
    
    if flatten_nest:
        flatten_dirs(dir_path, patterns)
                    
    for path, subdirs, files in os.walk(dir_path):
        for i, name in enumerate(files):
            for pattern in patterns:
                if fnmatch(name, pattern):
                    filename = os.path.join(path, name)
                    clusters[i] = [(name, get_image(filename))]
    current_time = get_time()
    if verbose:
        print("Reading files done in:", current_time)
    
    build_corpus()
    current_time = get_time()
    if verbose:
        print("Corpus generated in:", current_time)
    
    for k, v in clusters.items():
        clusters[k] = [v[0][0]]
    
    number_of_clusters = len(clusters)
    iterations = 0
    while iterations < MAX_ITERATIONS:
        iterations += 1
        if iterations % 10 == 0 and verbose:
            print(iterations, "iterations completed")
        candidates = list()
        for index in clusters:
             index_score, mergeable = get_similar_score(index)
             candidates.append((index_score, index, mergeable))
        
        _, mergee, merger = max(candidates, key = lambda x: x[0])
        if merger > -1:
            merge_clusters(mergee, merger)
        
        curr_cluster_number = len(clusters)
        if curr_cluster_number == number_of_clusters:
            break
        number_of_clusters = curr_cluster_number
    
    current_time = get_time()
    if verbose:
        print(iterations, "iterations completed clustering in", current_time)
    
    result = list()
    ones = list()
    for clust in clusters.values():
        if len(clust) > 1:
            result.append(clust)
        else:
            ones += clust
    result.append(ones)
    
    for i, res in enumerate(result):
        new_path = dir_path+str(i)+"\\"
        if not pt.exists(new_path):
            os.mkdir(new_path)
        for file in res:
            if pt.exists(dir_path+file):
                shutil.move(dir_path+file, new_path+file)
            