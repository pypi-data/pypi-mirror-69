#!/bin/bash
# 2011-9-14 
if test $# -lt 2
then
	echo "Usage: $0 inputVCF outputVCF"
	echo
	echo "This script calls vcf-convert and converts VCF 3.x or 4.x to version 4.0"
	echo "Note:"
	echo "	1. pure VCF file, no bgzip, nor tabix indexed."
	echo
	echo "Example:"
	echo "	$0 Contig0_1_2000000.vcf Contig0_1_2000000.4.vcf"
exit
fi

shellDir=`dirname $0`
shellDir=~/script/pymodule/shell
source $shellDir/common.sh
exitIfNonZeroExitCode

bgzipPath=~/bin/bgzip
tabixPath=~/bin/tabix
#export below will actually fail the perl library search
#export PERL5LIB="~/script/vcftools/lib/"
vcfConverPath=~/bin/vcftools/vcf-convert

#referenceFasta=/Network/Data/vervet/db/individual_sequence/524_superContigsMinSize2000.fasta
inputVCF=$1
outputVCF=$2
if [ -n "$inputVCF" ]
then
	isVCFEmpty=`checkVCFFileIfEmpty $inputVCF`
fi
echo isVCFEmpty: $isVCFEmpty

#   -r, --refseq <file>              The reference sequence in samtools faindexed fasta file. (Not required with SNPs only.)
#-r $referenceFasta

cat $inputVCF | $vcfConverPath  > $outputVCF
exitCodeAll="${PIPESTATUS[0]} ${PIPESTATUS[1]}"
exitCode=`echo $exitCodeAll|awk -F ' ' '{print $1}'`
exitCode2=`echo $exitCodeAll|awk -F ' ' '{print $2}'`

echo exit code: $exitCode, $exitCode2
#if test "$exitCode" = "0" && test "$exitCode2" = "0"
#then
#	$tabixPath -p vcf $outputVCF
#fi
if test "$exitCode" != "0"
then
	exit $exitCode
fi
if test "$exitCode2" != "0"
then
	exit $exitCode2
fi
