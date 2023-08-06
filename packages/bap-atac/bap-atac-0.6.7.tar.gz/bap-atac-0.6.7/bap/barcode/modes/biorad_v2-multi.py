#!/usr/bin/env python

# Caleb Lareau, Broad Institute
# Finished: 16 June 2018
# This program will demultiplex barcoded Tn5-based
# scATAC from v2.1 scheme

##### IMPORT MODULES #####
import os
import re
import regex
import sys
import gzip
from barcodeHelp import * # local python script

from optparse import OptionParser
from multiprocessing import Pool, freeze_support
from itertools import repeat

from Bio import SeqIO
from Bio.SeqIO.QualityIO import FastqGeneralIterator

from rapidfuzz import fuzz
from rapidfuzz import process
from fuzzysearch import find_near_matches

#### OPTIONS ####
opts = OptionParser()
usage = "usage: %prog [options] [inputs] Software to process raw .fastq reads and make data suitable for downstream processes"

opts.add_option("-a", "--fastq1", help="<Read1> Accepts fastq or fastq.gz")
opts.add_option("-b", "--fastq2", help="<Read2> Accepts fastq or fastq.gz")

opts.add_option("-n", "--nreads", default = 5000000, help="Number of reads in each split output file")
opts.add_option("-c", "--ncores", default = 4, help="Number of cores for parallel processing.")

opts.add_option("-j", "--constant1", default = "TATGCATGAC", help="Barcode Constant 1")
opts.add_option("-k", "--constant2", default="AGTCACTGAG", help="Barcode Constant 2")
opts.add_option("-l", "--nextera", default="TCGTCGGCAGCGTC", help="Nextera Adaptor Sequence")
opts.add_option("-m", "--me", default="AGATGTGTATAAGAGACAG", help="ME Sequence")

opts.add_option("-x", "--nmismatches", default=1, help="Number of mismatches")
opts.add_option("-o", "--output", help="Output sample convention")

options, arguments = opts.parse_args()

print(options)

# return usage information if no argvs given
if len(sys.argv)==1:
	os.system(sys.argv[0]+" --help")
	sys.exit()

##### INPUTS #####
a = options.fastq1
b = options.fastq2
outname = options.output
o = options.output

cpu = int(options.ncores)
n = int(options.nreads)

c1 = options.constant1
c2 = options.constant2
nxt = options.nextera
me = options.me
n_mismatch = int(options.nmismatches)

# Infer the length from the adaptors
c1_len = len(c1)
c2_len = len(c2)
nxt_len = len(nxt)
me_len = len(me)

# Parse input files
extension = a.split('.')[-1]
if extension == "fastq" or extension == "fq":
	sys.exist("Quitting... GZIP your .fastq files!")
elif extension == "gz":
	print("Found supplied .fastq.gz files")
else:
	sys.exit("ERROR! The input files (-a , -b) a *.fastq.gz")


# Define global variables
dumb = "N"*7 + "_" + "N"*7 + "_" + "N"*7 + "_" + "N"*6
dumb2 = "N"*27

# Define barcodes
barcodes = ["GGACGAC","GCAGTGT","GAGAGGT","GAACCGT","GGTTAGT","GCCTTTG","GATAGAC","GTGGTAG","GTAATAC","CGAGGTC","CATCAGT","CCAAGCT","CCTTAGG","CACGGAC","CAGGCGG","CCGAACC","CACTTCT","CTGGCAT","CGATTAC","TCGTTCT","TGCTACT","TTCCTCT","TACTTTC","TGAATCC","TAGTACC","TTATCAT","TGATTGT","TGGCAAC","TGTTTAG","AGTTTCT","ATGGTGT","ATTGCCT","ACTCAAT","AGACCAT","AGCGAAT","ACCTACC","AGATAGG","AAGGTTC","AGGCATG","GTGGCGC","GGTCGTA","GTGTCCA","GAGGACA","GTCCTTC","GAGCGTG","GATCACC","GTTGATG","CATACGC","CTGCGCC","CGTAGCC","CGCGGCG","CATCTTA","CCAGTCA","CGTTTGA","CCACTTG","CTAACTC","CGAGTGG","TCCTGGC","TGACCGC","TAAGGTA","TCGCGCA","TCATACA","TAAGAGG","TGGAAGG","TCCGCTC","TAACGCC","TGCGTTG","TCGGATG","AGCCGCC","ACACGCG","ACTACGA","AATGGCC","ATGTTCC","ACGTTGG","AGACTTC","ATATAAC","ATAGTTG","GCACAGC","GACAATA","GAATCAA","GCTCCAA","GCGTAGA","GGAAGTT","GGAGCCT","GAATATG","GGTTCAC","CTAGAGC","CGTGATA","CGCCTAA","CGATGCA","CTTGCGA","CCATAAT","CCTATGT","CGCGCTT","CCGCGAT","CGGCCAG","TTGAGGC","TTTCCTA","TCAGCAA","TCCTTAA","TGGACCA","TAGTGTT","TATACTT","TGTCGCT","TACGCAT","TTGTAAG","TGTAGTG","AGTAAGC","ATGAATA","AACGTAA","AATTCCA","AATGATT","AAGTTAT","ACAGCTT","AGCTGAG","ACAGTAC","GGCAGGC","GCGCACG","GAGCTAA","GGTAACA","GCTAATT","GTCGGTT","GGTGTTT","GCGACTC","CTTACCG","CTATTCG","CTAAGAA","CACGCCA","CGGAGGA","CTTGTCC","CTCATTT","CGGATCT","CAGAATT","CGCAATC","TGCGAGC","TTAAGCG","TCTTGTA","TACCGAA","TTCTGCA","TCCAGTT","TGGCCTT","TCGGCGT","TCTGAAC","TCGACAG","AAGCAGC","ATTCACG","AAGTGCG","ATAGGCA","ATTCGTT","ACGTATT","ACCGGCT","AATTGGT","ATTATTC","AACGGTG","GAGTTGC","GGCGGAA","GTTAGGA","GTGCATT","GCCTCGT","GCTTTAT","GTGTGTC","GGCGTCC","CTCTTGC","CGGCTGC","CGGTACG","CGTACAA","CACATGA","CCGGTTT","CGACACT","CCTCCTT","CATGTAT","CTTCATC","CAGAGAG","TATGTGC","TCAAGAC","TTGGTTA","TGGTGAA","TTACAGA","TGAGATT","TTTGGTC","TTGGACT","TTCGTAC","TGAGGAG","ACCATGC","AGAGACC","AGCAACG","ACGAGAA","AACCACA","AACTCTT","ATGAGCT","AGGACGT","AGGATAC"]
tn5 = ["AAAGAA","AACAGC","AACGTG","AAGCCA","AAGTAT","AATTGG","ACAAGG","ACCCAA","ACCTTC","ACGGAC","ACTGCA","AGACCC","AGATGT","AGCACG","AGGTTA","AGTAAA","AGTCTG","ATACTT","ATAGCG","ATATAC","ATCCGG","ATGAAG","ATTAGT","CAACCG","CAAGTC","CACCAC","CACTGT","CAGACT","CAGGAG","CATAGA","CCACGC","CCGATG","CCGTAA","CCTCTA","CGAAAG","CGAGCA","CGCATA","CGGCGT","CGGTCC","CGTTAT","CTAGGT","CTATTA","CTCAAT","CTGTGG","CTTACG","CTTGAA","GAAATA","GAAGGG","GACTCG","GAGCTT","GAGGCC","GAGTGA","GATCAA","GCCAGA","GCCGTT","GCGAAT","GCGCGG","GCTCCC","GCTGAG","GCTTGT","GGACGA","GGATTG","GGCCAT","GGGATC","GGTAGG","GGTGCT","GTACAG","GTCCTA","GTCGGC","GTGGTG","GTTAAC","GTTTCA","TAAGCT","TAATAG","TACCGA","TAGAGG","TATTTC","TCAGTG","TCATCA","TCCAAG","TCGCCT","TCGGGA","TCTAGC","TGAATT","TGAGAC","TGCGGT","TGCTAA","TGGCAG","TGTGTA","TGTTCG","TTAAGA","TTCGCA","TTCTTG","TTGCTC","TTGGAT","TTTGGG"]

#------------------------------

def extractbarcode_v2_tn5(sequence1):
	'''
	Function to extract barcodes
	'''

	# Parse out barcodes if we can ID the constants
	try:

		c1_hit = find_near_matches(c1, sequence1[7:25],  max_l_dist=2) 
		c2_hit = find_near_matches(c2, sequence1[23:42], max_l_dist=2)
		nxt_hit = find_near_matches(nxt, sequence1[33:65],  max_l_dist=2)
		me_hit = find_near_matches(me, sequence1[55:], max_l_dist=2)
		
		# Now grab the barcodes
		bc1, mm1 = prove_barcode(sequence1[0:7], barcodes, n_mismatch)
		bc2, mm2 = prove_barcode(sequence1[c1_hit[0].end+7:c2_hit[0].start+23], barcodes, n_mismatch)
		bc3, mm3 = prove_barcode(sequence1[c2_hit[0].end+23:nxt_hit[0].start+33], barcodes, n_mismatch)
		bc_tn5, mm4 = prove_barcode(sequence1[nxt_hit[0].end+33:me_hit[0].start+55], tn5, n_mismatch)
		seq = sequence1[me_hit[0].end+55:]
		
		return(bc1 + "_" + bc2 + "_" + bc3 + "_" + bc_tn5, seq, str(mm1)+","+str(mm2)+","+str(mm3)+","+str(mm4))
	except:
		return(dumb, sequence1, "0,0,0,0")
	

def debarcode_multiplexed(duo):
	"""
	Function that is called in parallel
	"""
	# Parse out inputs
	listRead1 = duo[0]; listRead2 = duo[1]
	
	# parameters to return
	fq1 = ""
	fq2 = ""
	mm_quant = ""

	nbc1 = 0
	nbc2 = 0
	nbc3 = 0
	ntn5 = 0

	npass = 0
	nfail = 0
	
	# Grab attributes
	title1 = listRead1[0]; sequence1 = listRead1[1]; quality1 = listRead1[2]
	title2 = listRead2[0]; sequence2 = listRead2[1]; quality2 = listRead2[2]
	
	# Return the barcode with underscores + the biological sequence learned	
	barcode, sequence1, mm = extractbarcode_v2_tn5(sequence1)
	quality1 = quality1[-1*len(sequence1):]
	
	four = barcode.split("_")
	if("NNNNNNN" in four or "NNNNNN" in four or len(sequence1) < 10):
		# Something went wrong
		nfail = nfail + 1
		if(barcode != dumb):
			if("NNNNNNN" == four[0]):
				nbc1 = 1
			if("NNNNNNN" == four[1]):
				nbc2 = 1
			if("NNNNNNN" == four[2]):
				nbc3 = 1
			if("NNNNNN" == four[3]):
				ntn5 = 1
	else:
		npass = 1
		fq1 = formatRead("".join(four) + "_" + title1, sequence1, quality1)
		fq2 = formatRead("".join(four) + "_" + title2, sequence2, quality2)
		mm_quant = mm_quant + "".join(four) + "," + mm +"\n"
	return([[fq1, fq2], [nbc1, nbc2, nbc3, ntn5, npass, nfail], [mm_quant]])


# Define variables to keep track of things that fail
nbc1 = 0
nbc2 = 0
nbc3 = 0
ntn5 = 0

npass = 0
nfail = 0

with gzip.open(a, "rt") as f1:
	with gzip.open(b, "rt") as f2:
		
		# Establish iterators
		it1 = batch_iterator(FastqGeneralIterator(f1), n)
		it2 = batch_iterator(FastqGeneralIterator(f2), n)
		
		# iterate over batches of length n
		for i, batch1 in enumerate(it1):
			batch2 = it2.__next__()
			output = o +  "-c" + str(i+1).zfill(3)
			
			# parallel process the barcode processing and accounting of failures.
			pool = Pool(processes=cpu)
			pm = pool.map(debarcode_multiplexed, zip(batch1, batch2))
			pool.close()
			
			# Aggregate output
			fqs = list(map(''.join, zip(*[item.pop(0) for item in pm])))
			counts = list(map(sum, zip(*[item.pop(0) for item in pm])))
			mm_values = list(map(''.join, zip(*[item.pop(0) for item in pm])))
			
			nbc1 = nbc1 + counts[0]
			nbc2 = nbc2 + counts[1]
			nbc3 = nbc3 + counts[2]
			ntn5 = ntn5 + counts[3]
			
			npass = npass + counts[4]
			nfail = nfail + counts[5]
			
			# Export one chunk in parallel
			filename1 = output +'_1.fastq.gz'
			filename2 = output +'_2.fastq.gz'
			#filenameMM = output +'_mismatches.csv.gz'
			
			pool = Pool(processes=2)
			toke = pool.starmap(chunk_writer_gzip, [(filename1, fqs[0]), (filename2, fqs[1])])
			pool.close()
			
with open(o + "-debarcode" + '.sumstats.log', 'w') as logfile:
	# give summary statistics
	logfile.write("\nParsing read pairs:\n" + a + "\n" + b + "\n")
	logfile.write("\n"+str(npass)+" reads parsed with barcodes ("+str(round(npass/(npass+nfail)*100, 2))+"% success)\n")
	logfile.write("Total reads that failed: "+str(nfail)+"\n\n")
	logfile.write("\nOf reads that could not be parsed that had valid, detectable constants:\n")
	logfile.write(str(nbc1) + " had a bad BC1 barcode sequence\n")
	logfile.write(str(nbc2) + " had a bad BC2 barcode sequence\n")
	logfile.write(str(nbc3) + " had a bad BC3 barcode sequence\n")
	logfile.write(str(ntn5) + " had a bad Tn5 barcode sequence\n")
	
	