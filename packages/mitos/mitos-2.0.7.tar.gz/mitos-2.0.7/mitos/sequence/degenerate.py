'''
@author: M. Bernt

This is a confidential release. Do not redistribute without 
permission of the author (bernt@informatik.uni-leipzig.de).

functions to determine codon degeneration
'''
from Bio.Data.CodonTable import unambiguous_dna_by_id

def altcodons( codon, table ):
    """
    list codons that code for the same aminoacid / are also stop
    @param codon
    @table code table id
    @return list of codons
    """

    tab = unambiguous_dna_by_id[ table ]

    if codon in tab.stop_codons:
        return tab.stop_codons

    try:
        aa = tab.forward_table[codon]
    except:
        return []

    return [k for ( k, v ) in tab.forward_table.items() if v == aa and k[0] == codon[0] and k[1] == codon[1]]

def degeneration( codon, table ):
    """
    determine how many codons code for the same amino acid / are also stop
    as codon
    
    @param codon the codon
    @param table code table id 
    @param the number of codons also coding for the aminoacid codon codes for
    """

    return len( altcodons( codon, table ) )

def isXdegenerated( x, codon, table ):
    """
    determine if codon is x-fold degenerated

    @param codon the codon
    @param table code table id  
    @param true if x <= the degeneration of the codon
    """

    return ( x <= len( altcodons( codon, table ) ) )

def degenerated_subseq( seq, x, table ):
    """
    get a subsequence consisting of the x-fold degenerated codons only
    """

    data = ""
    for i in range( 0, len( seq ), 3 ):
        codon = str( seq[i:i + 3] )
        if isXdegenerated( x, codon, table ):
            data += codon
    return data

