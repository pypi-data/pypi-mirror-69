import os
from trna.trnascan import trnascan, parse
from feature import trnafeature
from trna import trna_nameaamap, L1, L2, S1, S2, codon
from Bio.Data.IUPACData import ambiguous_dna_values
import sys
import logging
import numpy
from os import listdir
from os.path import isfile, join

#def remove_redudant_hits():
    
#    '''
#    this function will take the cmsearch output file and remove the redundant hits that are matched two times (for the same tRNA family) with cmsearch 
#    it will only keep the best one based on the evalue
#    '''


def cmsearch_parse(cmsearch_file,outfile):
    
    """
    Parse cmsearch tabular output
    """
    fh = open(cmsearch_file,"r")          ## the cmsearch output file
    trnas = {}

    intronstart = 0
    intronstop = 0
    skip = False
    start = None
    stop = None
    strand = None
    score = None
    seq = None
    dotbracket = None
    name = None
    anticodonpos = None
    anticodon = None
    arr1 = []
    #print fh
    for l in fh.readlines():
        if l.startswith("#"):
            continue
        
        ##### this part is to filter the duplicate hits and keep the best one, i.e., the one with the smallest evalue
         
        l = l.lstrip().rstrip().split()
        acc = l[0].split("_")[0]+"_"+l[0].split("_")[1]
        start = int( l[7]) - 1
        stop = int( l[8] ) - 1
        evalue = float(l[15])
 
            # is start < stop then the sequence if on the reverse complement
        if start > stop:
            start, stop = stop, start
            strand = "-"
        else:
            strand = "+"
                 
        arr1.append((acc,start,stop,evalue,strand))

        nk=numpy.array(arr1)
        result1={}
        final = []
        for x in nk:
            result1.setdefault(x[0],[]).append(x[3])

        for x in nk:
            if x[3]==min(result1[x[0]], key=float):
                final.append(x)

#    print final

                 
        
    trna_name = sys.argv[1].split("/")[-1].split(".")[0].split("_")[0]
    
    for x in final:    
        #print x[0]+"\t"+str(x[1])+"\t"+str(x[2])+"\t"+trna_name+"\t"+str(x[3])+"\t"+str(x[4])
        outfile.write(x[0]+"\t"+str(x[1])+"\t"+str(x[2])+"\t"+trna_name+"\t"+str(x[3])+"\t"+str(x[4])+"\n")

    fh.close() 



tRNAs=["trnS1","trnF","trnD","trnY","trnS2","trnL1","trnL2","trnH","trnI","trnM","trnN","trnC","trnE","trnP","trnQ","trnR","trnT","trnW","trnK","trnA","trnG","trnV"]

cmsearch_out_path = sys.argv[1]

for g in tRNAs:
    outfile = open("/home/wi93jaj/Documents/Work/MITOS/ncRNAs_171214/Fungi/cmsearch/bedfiles/"+g+".bed","a")
    mypath = cmsearch_out_path+g
    cmsearch_files = [ os.path.join(mypath,f) for f in listdir(mypath) if isfile(join(mypath,f)) ]
    for f in cmsearch_files:
        i=0
        print(f)
        test = open(f,"r") ## test if file contains only comments before calling the function
        for l in test:
            if not l.startswith("#"):
                i=1
        test.close()
        if i==1:
            cmsearch_parse(f,outfile)
    outfile.close()  
    
    
    
    
