#!/usr/bin/env python3
"""
Examples:
	#2012.10.09 on hoffman condor, no clustering (-C0), always need db connection on hcondor (-H)
	# add -U 0 -Z 3000 if u want to change the partitioning configuration (how many sites in one blast job)
	%s  -I ~/NetworkData/vervet/db/genotype_file/method_42/
		--oldRefFastaFname ~/NetworkData/vervet/db/individual_sequence/524_superContigsMinSize2000.fasta
		--newRefFastaFname ~/NetworkData/vervet/db/individual_sequence/3231_6483ContigsVervetRef1.0.3.fasta
		--formatdbPath ~/bin/blast/bin/formatdb --blastallPath ~/bin/blast/bin/blastall
		--maxNoOfMismatches 2 -H -C 0
		-j hcondor -l hcondor -D ~/NetworkData/vervet/db/ -t ~/NetworkData/vervet/db/
		-u yh -z localhost -o dags/LiftPolymorphismCoordinates/FindNewRefCoordinates_Method42_vs_3231_maxContigID2.xml -x 2
		#-U 0 -Z 3000
	
	#2012.10.18 use bwa to align
	%s -I ~/NetworkData/vervet/db/genotype_file/method_42/ 
		--oldRefFastaFname ~/NetworkData/vervet/db/individual_sequence/524_superContigsMinSize2000.fasta
		--newRefFastaFname ~/NetworkData/vervet/db/individual_sequence/3231_6483ContigsVervetRef1.0.3.fasta
		--maxNoOfMismatches 2 -H -C 4 --no_of_aln_threads 1
		-j hcondor -l hcondor -D ~/NetworkData/vervet/db/ -t ~/NetworkData/vervet/db/
		-u yh -z localhost -o dags/LiftPolymorphismCoordinates/FindNewRefCoordinates_Method42_vs_3231_BWA.xml  --alignmentMethodType 2
		--intervalSize 40000
		#--flankingLength 50

Description:
	2012-10-03 --intervalSize refers to the number of polymorphic sites, not chromosomal intervals.
	#. preReduce: split the fasta into difference chromosomes (necessary?) 
    #. mapEachVCF:
    		split VCF into several small ones, N-SNP each
      #. mapEachInterval
         #. extract flanking sequences from the input VCF ():
         	ExtractFlankingSequenceForVCFLoci.py -i vcf -a reference fasta -o output.fasta -f flankingLength (=24)
         #. blast them
         #. run FindSNPPositionOnNewRefFromFlankingBlastOutput.py
             #. where hit length match query length, and no of mismatches <=2 => good => infer new coordinates
         #. output a mapping file between old SNP and new SNP coordinates.
         		#. reduce this thing by combining everything
    #. reduce()
         #. merge all output into one big one
         
"""
import sys, os, math
__doc__ = __doc__%(sys.argv[0], sys.argv[0])

sys.path.insert(0, os.path.expanduser('~/lib/python'))
sys.path.insert(0, os.path.join(os.path.expanduser('~/script')))

from pegaflow.DAX3 import Executable, File, PFN
from pegaflow import Workflow
from pymodule import ProcessOptions, PassingData
from pymodule.pegasus.AbstractVCFWorkflow import AbstractVCFWorkflow
from pymodule.pegasus.BlastWorkflow import BlastWorkflow
from pymodule.pegasus.ShortRead2AlignmentWorkflow import ShortRead2AlignmentWorkflow
from pymodule.yhio.FastaFile import FastaFile

ParentClass = AbstractVCFWorkflow

class FindNewRefCoordinatesGivenVCFFolderWorkflow(ParentClass, BlastWorkflow, ShortRead2AlignmentWorkflow):
	__doc__ = __doc__
	option_default_dict = ParentClass.option_default_dict.copy()
	option_default_dict.update(ShortRead2AlignmentWorkflow.alignment_option_dict.copy())
	option_default_dict.update({
						('oldRefFastaFname', 1, ): ['', '', 1, 'path to the old reference sequence file (on which input VCF is based)', ],\
						("formatdbPath", 1, ): ["%s/bin/blast/bin/formatdb", 'f', 1, 'path to formatdb, index fasta database file'],\
						("blastallPath", 1, ): ["%s/bin/blast/bin/blastall", 's', 1, 'path to blastall'],\
						('newRefFastaFname', 1, ): ['', '', 1, 'path to the new reference sequence file (blast db)', ],\
						
						('minNoOfIdentities', 0, int): [None, '', 1, 'minimum number of identities between a query and target', ],\
						('maxNoOfMismatches', 0, int): [None, '', 1, 'minimum number of mismatches between a query and target', ],\
						('minIdentityFraction', 0, float): [None, '', 1, 'minimum percentage of identities between a query and target', ],\
						('flankingLength', 1, int): [49, '', 1, 'number of flanking bases on either side of the locus.\n\
	length of flanking = 2*flankingLength+locusLength', ],\
						('minAlignmentSpan', 0, int): [None, '', 1, 'minimum length of alignment in blast. if not set, 1.8 X flankingLength', ],\
						
						('alignmentMethodType', 1, int): [1, '', 1, 'which alignment program to use: 1 blast; 2 bwa-mem; 3 bwa-aln', ],\
						('maxMissingAlignmentFraction', 1, float): [0.04, '', 1, ' max fraction of missing alignments given 2% uniform base error rate if FLOAT.', ],\
						('maxNoOfGaps', 0, int): [0, '', 1, 'Maximum number of gap opens', ],\
						('maxSwitchDensity', 0, float): [0.01, '', 1, 'Maximum switch density (#switches/#loci) for one interval to be included in final variants', ],\
						('minLiftOverMapPvalue', 1, float): [0.5, '', 1, 'locus with mapPvalue lower than this would be removed.', ],\
						
						})
	
	#2012.9.25 no overlap and make the interval a lot smaller, (for VCF file)
	option_default_dict[('intervalOverlapSize', 1, int)][0] = 0
	option_default_dict[('intervalSize', 1, int)][0] = 10000
	option_default_dict[('max_walltime', 1, int)][0] = 1320	#under 23 hours
	
	def __init__(self,  **keywords):
		"""
		2011-7-11
		"""
		self.pathToInsertHomePathList.extend(['formatdbPath', 'blastallPath'])
		
		ParentClass.__init__(self, **keywords)
		ShortRead2AlignmentWorkflow.__init__(self, **keywords)
		
		self.oldRefFastaFname = os.path.abspath(self.oldRefFastaFname)
		self.newRefFastaFname = os.path.abspath(self.newRefFastaFname)
		
		self.formatdbExecutableFile = self.registerOneExecutableAsFile(path=self.formatdbPath,\
											site_handler=self.input_site_handler)
		self.blastallExecutableFile = self.registerOneExecutableAsFile(path=self.blastallPath,\
											site_handler=self.input_site_handler)
		if not self.minAlignmentSpan:	#2013.07.12
			self.minAlignmentSpan = int(1.8*self.flankingLength)
	
	def preReduce(self, workflow=None, outputDirPrefix="", passingData=None, transferOutput=True, **keywords):
		"""
		2012.9.17
		"""
		returnData = ParentClass.preReduce(self, workflow=workflow, outputDirPrefix=outputDirPrefix,\
								passingData=passingData, transferOutput=transferOutput, **keywords)
		
		self.statDirJob = self.addMkDirJob(outputDir="%sStat"%(outputDirPrefix))
		self.reduceStatDirJob = self.addMkDirJob(outputDir="%sReduceStat"%(outputDirPrefix))
		
		self.liftOverMapDirJob = self.addMkDirJob(outputDir="%sMapLiftOverVCF"%(outputDirPrefix))
		self.liftOverReduceDirJob = self.addMkDirJob(outputDir="%sReduceLiftOverVCF"%(outputDirPrefix))
		self.reduceEachVCFDirJob = self.addMkDirJob(outputDir="%sReduceEachVCF"%(outputDirPrefix))
		
		self.plotDirJob = self.addMkDirJob(outputDir="%sPlot"%(outputDirPrefix))
		
		passingData.oldRefFastaFile = self.registerOneInputFile(workflow=workflow, inputFname=self.oldRefFastaFname, \
															folderName=self.pegasusFolderName)
		refIndexJob = None
		if self.alignmentMethodType==1:	#blast
			registerReferenceData = self.registerBlastNucleotideDatabaseFile(self.newRefFastaFname, \
						folderName=self.pegasusFolderName, input_site_handler=self.input_site_handler)
			passingData.newRefFastaFileList = registerReferenceData.refFastaFList
			if registerReferenceData.needBlastMakeDBJob:	#some nt-database index file is missing
				sys.stderr.write("Adding blast-db-making job ...")
				refIndexJob = self.addMakeBlastDBJob(executable=self.formatdb,\
											inputFile=passingData.newRefFastaFileList[0], transferOutput=True)
				#add the index files
				passingData.newRefFastaFileList = [passingData.newRefFastaFileList[0]] + refIndexJob.outputList
				sys.stderr.write(".\n")
		else:	#bwa
			registerReferenceData = self.registerBWAIndexFile(refFastaFname=self.newRefFastaFname, \
												folderName=self.pegasusFolderName)
			passingData.newRefFastaFileList = registerReferenceData.refFastaFList
			if registerReferenceData.needBWARefIndexJob:	#2013.3.20
				sys.stderr.write("Adding bwa reference index job ...")
				refIndexJob = self.addBWAReferenceIndexJob(workflow=workflow, refFastaFList=passingData.newRefFastaFileList, \
					refSequenceBaseCount=3000000000, bwa=workflow.bwa,\
					transferOutput=True)
				#add the index files
				passingData.newRefFastaFileList = [passingData.newRefFastaFileList[0]] + refIndexJob.outputList
				sys.stderr.write(".\n")
		# so that mapEachInterval() could access it 
		passingData.refIndexJob = refIndexJob
		
		
		#a stat merge job
		switchPointStatMergeFile = File(os.path.join(self.reduceStatDirJob.folder, 'oldChromosome.Span.SwitchPointStat.tsv'))
		self.switchPointStatMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
								outputF=switchPointStatMergeFile, \
								transferOutput=False, parentJobLs=[self.reduceStatDirJob],\
								extraArguments="--keyColumnLs 0 --valueColumnLs 1-3")
								#column 0 is chromosome,
		#sort it by chromosome and position
		
		
		returnData.jobDataLs.append(PassingData(jobLs=[self.switchPointStatMergeJob], \
											fileLs=[self.switchPointStatMergeJob.output]))
		
		#reduce replicate concordance results from after-TrioCaller VCFs 
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'oldChromosome.SwitchPointBySpan.tsv'))
		switchPointBySpanJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 1,2', transferOutput=False)
		self.addInputToStatMergeJob(statMergeJob=switchPointBySpanJob, \
							parentJobLs=[self.switchPointStatMergeJob])
		
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'oldChromosome.SwitchPointByNoOfLoci.tsv'))
		switchPointByNoOfLociJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 1,3', transferOutput=False)
		self.addInputToStatMergeJob(statMergeJob=switchPointByNoOfLociJob, \
							parentJobLs=[self.switchPointStatMergeJob])
		
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'oldChromosome.SwitchPoint.Stat.tsv'))
		concatenateSwitchPointBySomethingJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixByMergeColumnsWithSameKey, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 1,2,3', transferOutput=False)
		
		self.addInputToStatMergeJob(statMergeJob=concatenateSwitchPointBySomethingJob, \
							parentJobLs=[switchPointBySpanJob])
		self.addInputToStatMergeJob(statMergeJob=concatenateSwitchPointBySomethingJob, \
							parentJobLs=[switchPointByNoOfLociJob])
		returnData.jobDataLs.append(PassingData(jobLs=[concatenateSwitchPointBySomethingJob], \
											fileLs=[concatenateSwitchPointBySomethingJob.output]))
		"""
		#2014.1.4 reduce jobs for LiftOver mapPvalue
		"""
		#add a stat merge job and a genome wide plot job
		outputFile = File(os.path.join(self.reduceOutputDirJob.output, 'locusLiftOverProbability.tsv'))
		self.mergeLocusLiftOverProbabilityJob = self.addStatMergeJob(statMergeProgram=self.mergeSameHeaderTablesIntoOne, \
									outputF=outputFile, \
									parentJobLs=[self.reduceOutputDirJob],extraOutputLs=None, \
									extraDependentInputLs=None, transferOutput=False)
		
		sortProbabilityFile = File(os.path.join(self.reduceOutputDirJob.output, 'locusLiftOverProbability.sorted.tsv.gz'))
		sortProbabilityJob = self.addSortJob(inputFile=self.mergeLocusLiftOverProbabilityJob.output, \
						outputFile=sortProbabilityFile, noOfHeaderLines=1,\
						parentJobLs=[self.mergeLocusLiftOverProbabilityJob], \
						extraOutputLs=None, transferOutput=True, \
						extraArgumentList=["""-k1,1 -k2,3n """], \
						sshDBTunnel=None,\
						job_max_memory=4000, walltime=120)
		#2013.12.3 Tab delimiter syntax (-t$'\t') is removed because it can't be passed correctly.
		#2013.12.3 Tried -t "`/bin/echo -e '\t'`" as well, didn't work either.
		# However since each column field doesn't contain blank, it is fine to just use the default separator (non-blank to blank).
		#returnData.jobDataLs.append(self.constructJobDataFromJob(sortProbabilityJob))
		outputFile = File(os.path.join(self.plotDirJob.output, 'locusLiftOverProbability.png'))
		#2014.1.5 something wrong below, the reference genome is mismatched with the old reference used in the input.
		# esp. sequence_type_id=self.ref_genome_sequence_type_id,  needs to be changed to match the old, not new ref.
		self.addPlotGenomeWideDataJob(inputFileList=None, \
							inputFile=self.mergeLocusLiftOverProbabilityJob.output,\
							outputFile=outputFile,\
							whichColumn=None, whichColumnPlotLabel="mapPvalue", whichColumnHeader="mapPvalue", \
							logX=None, logY=2, valueForNonPositiveYValue=-1, \
							xScaleLog=None, yScaleLog=None,\
							missingDataNotation='NA',\
							xColumnPlotLabel="genomePosition", xColumnHeader="oldStart", \
							xtickInterval=0,\
							drawCentromere=True, chrColumnHeader="oldChromosome", \
							minChrLength=None, minNoOfTotal=None, maxNoOfTotal=None, \
							figureDPI=100, formatString=".", ylim_type=2, samplingRate=1, logCount=False, need_svg=True,\
							tax_id=self.ref_genome_tax_id, sequence_type_id=self.ref_genome_sequence_type_id, chrOrder=1,\
							inputFileFormat=1, outputFileFormat=None,\
							parentJobLs=[self.mergeLocusLiftOverProbabilityJob], \
							extraDependentInputLs=None, \
							extraArguments=None, extraArgumentList=None, \
							transferOutput=True, job_max_memory=1000, sshDBTunnel=self.needSSHDBTunnel)
		#xtickInterval=0 means no ticks on x-axis.
		
		outputFile = File( os.path.join(self.plotDirJob.output, 'locusLiftOverProbabilityHist.png'))
		#no spaces or parenthesis or any other shell-vulnerable letters in the x or y axis labels (whichColumnPlotLabel, xColumnPlotLabel)
		self.addDrawHistogramJob(executable=workflow.DrawHistogram, inputFileList=[self.mergeLocusLiftOverProbabilityJob.output], \
							outputFile=outputFile, \
					whichColumn=None, whichColumnHeader="mapPvalue", whichColumnPlotLabel="minusLogLiftOverPvalue", \
					xScaleLog=0, yScaleLog=1, \
					logCount=False, logY=2, valueForNonPositiveYValue=50,\
					minNoOfTotal=10,\
					figureDPI=100, samplingRate=1,legendType=1, \
					parentJobLs=[self.plotDirJob, self.mergeLocusLiftOverProbabilityJob], \
					extraDependentInputLs=None, \
					extraArguments=None, transferOutput=True,  job_max_memory=8000)	#lots of input data,
		
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociChange.s1.AfterLiftOver.stat.tsv'))
		self.noOfLociAfterLiftOverJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 1 -v 2-4")
		
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociChange.s2.AfterGATKFilterLiftOver.stat.tsv'))
		self.noOfLociAfterGATKFilterLiftOverMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 1 -v 2-4")
		
		
		#stat on number of loci per contig after filter-liftover (final number)
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociPerContig.s2.AfterGATKFilterLiftOver.stat.tsv'))
		self.noOfLociPerContigAfterGATKFilterLiftOverMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 0 -v 2-4")	#index 0 is contig ID, index 1 is fake chromosome length (=1)
		
		#divide the number to get reduction fraction
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'reduction.s2.ByFilterLiftoverPerContig.stat.tsv'))
		reductionByFilterLiftoverPerContigMergeJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 2,1', transferOutput=True)
		self.addInputToStatMergeJob(statMergeJob=reductionByFilterLiftoverPerContigMergeJob, \
							parentJobLs=[self.noOfLociPerContigAfterGATKFilterLiftOverMergeJob])
		
		#concatenate the number of loci per contig to the swtich point info
		self.addInputToStatMergeJob(statMergeJob=concatenateSwitchPointBySomethingJob, \
							parentJobLs=[reductionByFilterLiftoverPerContigMergeJob])
		
		#stats on the change after ClearVCFBasedOnSwitchDensity
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociChange.s3.AfterClearVCFBySwitchDensity.stat.tsv'))
		self.noOfLociAfterClearVCFMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 1 -v 2-4")
		#stat on number of loci per contig after clear VCF
		
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociPerContig.s3.AfterClearVCFBySwitchDensity.stat.tsv'))
		self.noOfLociPerContigAfterClearVCFMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 0 -v 2-4")	#index 0 is contig ID, index 1 is fake chromosome length (=1)
		#divide the number to get reduction fraction
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'reduction.s3.ByClearVCFPerContigBySwitchDensity.stat.tsv'))
		reductionByClearVCFPerContigMergeJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 2,1', transferOutput=True)
		self.addInputToStatMergeJob(statMergeJob=reductionByClearVCFPerContigMergeJob, \
							parentJobLs=[self.noOfLociPerContigAfterClearVCFMergeJob])
		
		#2014.01.04 remove loci with low mapPvalue
		
		#stats on the change after RemoveLocusFromVCFWithLowLiftOverMapPvalue
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociChange.s4.AfterRemoveLocusFromVCFWithLowLiftOverMapPvalue.stat.tsv'))
		self.noOfLociAfterRemoveLocusFromVCFWithLowLiftOverMapPvalueJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 1 -v 2-4")
		#stat on number of loci per contig after RemoveLocusFromVCFWithLowLiftOverMapPvalue
		
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociPerContig.s4.AfterRemoveLocusFromVCFWithLowLiftOverMapPvalue.stat.tsv'))
		self.noOfLociPerContigAfterRemoveLocusFromVCFWithLowLiftOverMapPvalueMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 0 -v 2-4")	#index 0 is contig ID, index 1 is fake chromosome length (=1)
		#divide the number to get reduction fraction
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'reduction.s4.ByRemoveLocusFromVCFWithLowLiftOverMapPvalue.stat.tsv'))
		reductionByRemoveLocusFromVCFWithLowLiftOverMapPvaluePerContigMergeJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 2,1', transferOutput=True)
		self.addInputToStatMergeJob(statMergeJob=reductionByRemoveLocusFromVCFWithLowLiftOverMapPvaluePerContigMergeJob, \
							parentJobLs=[self.noOfLociPerContigAfterRemoveLocusFromVCFWithLowLiftOverMapPvalueMergeJob])
		
		
		#stats on the change after RemoveRedundantLociFromVCF_InReduce
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociChange.s5.AfterRemoveRedundancyMerge.stat.tsv'))
		self.noOfLociAfterRemoveRedundancyMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 1 -v 2-4")
		
		#stat on number of loci per contig after clear VCF
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'noOfLociPerContig.s5.AfterRemoveRedundancyMerge.stat.tsv'))
		self.noOfLociPerContigAfterRemoveRedundancyMergeJob = self.addStatMergeJob(statMergeProgram=workflow.ReduceMatrixByChosenColumn, \
							outputF=outputFile, transferOutput=True, parentJobLs=[self.reduceStatDirJob],\
							extraArguments="-k 0 -v 2-4")	#index 0 is contig ID, index 1 is fake chromosome length (=1)
		#divide the number to get reduction fraction
		outputFile = File(os.path.join(self.reduceStatDirJob.folder, 'reduction.s5.ByRemoveRedundancyPerContigMerge.stat.tsv'))
		reductionByRemoveRedundancyPerContigMergeJob = self.addStatMergeJob(statMergeProgram=self.ReduceMatrixBySumSameKeyColsAndThenDivide, \
							outputF=outputFile, parentJobLs=[self.reduceStatDirJob],\
							extraArguments='--keyColumnLs 0 --valueColumnLs 2,1', transferOutput=True)
							# = (#sites after filter) / (#sites before filter)
		self.addInputToStatMergeJob(statMergeJob=reductionByRemoveRedundancyPerContigMergeJob, \
							parentJobLs=[self.noOfLociPerContigAfterRemoveRedundancyMergeJob])
		
		outputFile = File(os.path.join(self.plotDirJob.folder, 'noOfLoci_vs_noOfSwitchPoints.png'))
		#no spaces or parenthesis or any other shell-vulnerable letters in the x or y axis labels (whichColumnPlotLabel, xColumnPlotLabel)
		self.addAbstractPlotJob(executable=self.AbstractPlot, \
							inputFileList=[concatenateSwitchPointBySomethingJob.output], \
							outputFile=outputFile, \
							whichColumn=None, whichColumnHeader="noOfLociWithUniqueHit", whichColumnPlotLabel="noOfLoci",\
							xColumnHeader="noOfSwitchPoints", xColumnPlotLabel="noOfSwitchPoints", \
							xScaleLog=1, yScaleLog=1, \
							minNoOfTotal=1,\
							figureDPI=150, samplingRate=1,legendType=0,\
							parentJobLs=[self.plotDirJob, concatenateSwitchPointBySomethingJob], \
							extraDependentInputLs=None, \
							extraArguments=None, transferOutput=True, job_max_memory=2000)
		
		outputFile = File(os.path.join(self.plotDirJob.folder, 'noOfSwitchPoints_vs_chromosomeSize.png'))
		#no spaces or parenthesis or any other shell-vulnerable letters in the x or y axis labels (whichColumnPlotLabel, xColumnPlotLabel)
		self.addAbstractPlotJob(executable=self.AbstractPlot, \
							inputFileList=[concatenateSwitchPointBySomethingJob.output], \
							outputFile=outputFile, \
							whichColumn=None, whichColumnHeader="noOfSwitchPoints", whichColumnPlotLabel="noOfSwitchPoints", \
							xColumnHeader="regionSpan", xColumnPlotLabel="chromosomeSize", \
							xScaleLog=1, yScaleLog=1, \
							minNoOfTotal=1,\
							figureDPI=150, samplingRate=1,legendType=0,\
							parentJobLs=[self.plotDirJob, concatenateSwitchPointBySomethingJob], \
							extraDependentInputLs=None, \
							extraArguments=None, transferOutput=True, job_max_memory=2000)
		
		outputFile = File(os.path.join(self.reduceStatDirJob.output, 'oldChromosomeAndLociRetainedAtSwitchFrequencyThreshold.tsv'))
		calculateLociGenomeLeftAtThresholdJob = self.addAbstractMapperLikeJob(executable=self.CalculateLociAndGenomeCoveredAtEachSwitchFrequencyThreshold, \
					inputF=concatenateSwitchPointBySomethingJob.output, outputF=outputFile, \
					parentJobLs=[self.reduceStatDirJob, concatenateSwitchPointBySomethingJob], \
					transferOutput=True, job_max_memory=2000,\
					extraArguments=None, extraArgumentList=None, extraDependentInputLs=None)
		
		outputFile = File(os.path.join(self.plotDirJob.folder, 'fractionOfGenomeCovered_vs_maxSwitchFrequency.png'))
		#no spaces or parenthesis or any other shell-vulnerable letters in the x or y axis labels (whichColumnPlotLabel, xColumnPlotLabel)
		self.addAbstractPlotJob(executable=self.AbstractPlot, \
							inputFileList=[calculateLociGenomeLeftAtThresholdJob.output], \
							outputFile=outputFile, \
							whichColumn=None, whichColumnHeader="genomeCoveredFraction", whichColumnPlotLabel="fractionOfGenomeCovered",\
							xColumnHeader="maxSwitchFrequency", xColumnPlotLabel="maxSwitchFrequency", \
							xScaleLog=0, yScaleLog=0, \
							minNoOfTotal=1,\
							figureDPI=150, samplingRate=1,legendType=0,\
							parentJobLs=[self.plotDirJob, calculateLociGenomeLeftAtThresholdJob], \
							extraDependentInputLs=None, \
							extraArguments=None, transferOutput=True, job_max_memory=2000)
		
		outputFile = File(os.path.join(self.plotDirJob.folder, 'fractionOfLociCovered_vs_maxSwitchFrequency.png'))
		#no spaces or parenthesis or any other shell-vulnerable letters in the x or y axis labels (whichColumnPlotLabel, xColumnPlotLabel)
		self.addAbstractPlotJob(executable=self.AbstractPlot, \
							inputFileList=[calculateLociGenomeLeftAtThresholdJob.output], \
							outputFile=outputFile, \
							whichColumn=None, whichColumnHeader="noOfLociFraction", whichColumnPlotLabel="fractionOfLociCovered", \
							xColumnHeader="maxSwitchFrequency", xColumnPlotLabel="maxSwitchFrequency", \
							xScaleLog=0, yScaleLog=0, \
							minNoOfTotal=1,\
							figureDPI=150, samplingRate=1,legendType=0,\
							parentJobLs=[self.plotDirJob, calculateLociGenomeLeftAtThresholdJob], \
							extraDependentInputLs=None, \
							extraArguments=None, transferOutput=True, job_max_memory=2000)
		
		
		return returnData
	
	def registerCustomJars(self, workflow=None):
		"""
		2012.10.18
		"""
		#super(FindNewRefCoordinatesGivenVCFFolderWorkflow, self).registerCustomJars(workflow=workflow)
		ParentClass.registerCustomJars(self, workflow)
		ShortRead2AlignmentWorkflow.registerCustomJars(self, workflow)
		BlastWorkflow.registerCustomJars(self, workflow)
	
	def registerCustomExecutables(self, workflow=None):
		"""
		2011-11-28
		"""
		if workflow==None:
			workflow=self
		
		ParentClass.registerCustomExecutables(self, workflow)
		ShortRead2AlignmentWorkflow.registerCustomExecutables(self, workflow)
		BlastWorkflow.registerCustomExecutables(self, workflow)		

		self.addExecutableFromPath(path=self.javaPath, name='LiftoverVariants', clusterSizeMultiplier=0.5)
		self.addExecutableFromPath(path=self.javaPath, name='FilterLiftedVariants', clusterSizeMultiplier=0.5)
		self.addExecutableFromPath(path=os.path.join(self.pymodulePath, "polymorphism/qc/mapper/RemoveLocusFromVCFWithLowLiftOverMapPvalue.py"), \
												name='RemoveLocusFromVCFWithLowLiftOverMapPvalue', clusterSizeMultiplier=1)
		self.addExecutableFromPath(path=os.path.join(self.pymodulePath, "polymorphism/mapper/ComputeLiftOverLocusProbability.py"),\
											name='ComputeLiftOverLocusProbability', \
											clusterSizeMultiplier=1)
	
	def addFindNewRefCoordinateJob(self, workflow=None, executable=None, inputFile=None, \
							maxNoOfMismatches=None, minNoOfIdentities=None, minIdentityFraction=None,\
							minAlignmentSpan=None, outputFile=None, chainFile=None, \
							switchPointFile=None,\
							parentJobLs=None, extraOutputLs=None, transferOutput=False, job_max_memory=500,\
							extraArguments=None, extraArgumentList=None, extraDependentInputLs=None):
		"""
		2013.07.08 added argument chainFile
		2012.10.14
		
		"""
		if workflow is None:
			workflow = self
		# a FindSNPPositionOnNewRefFromFlankingBlastOutput job
		if extraArgumentList is None:
			extraArgumentList = []
		if extraOutputLs is None:
			extraOutputLs = []
		key2ObjectForJob={}
		
		if minAlignmentSpan is not None:
			extraArgumentList.append('--minAlignmentSpan %s'%(minAlignmentSpan))
		if maxNoOfMismatches is not None:
			extraArgumentList.append('--maxNoOfMismatches %s'%(maxNoOfMismatches))
		if minNoOfIdentities is not None:
			extraArgumentList.append("--minNoOfIdentities %s"%(minNoOfIdentities))
		if minIdentityFraction is not None:
			extraArgumentList.append("--minIdentityFraction %s"%(minIdentityFraction))
		if chainFile is not None:
			extraArgumentList.extend(["--chainFilename", chainFile ])
			extraOutputLs.append(chainFile)
			key2ObjectForJob['chainFile'] = chainFile
		if switchPointFile is not None:
			extraArgumentList.extend(["--switchPointFname", switchPointFile])
			extraOutputLs.append(switchPointFile)
			key2ObjectForJob['switchPointFile'] = switchPointFile
		
		findNewRefCoordinateJob = self.addAbstractMapperLikeJob(workflow=workflow, \
					executable=executable, \
					inputF=inputFile, outputF=outputFile, \
					parentJobLs=parentJobLs, extraOutputLs=extraOutputLs,\
					transferOutput=transferOutput, job_max_memory=job_max_memory,\
					extraArguments=extraArguments, extraArgumentList=extraArgumentList, \
					extraDependentInputLs=extraDependentInputLs, key2ObjectForJob=key2ObjectForJob)
		return findNewRefCoordinateJob
	
	def mapEachInterval(self, workflow=None, \
					VCFJobData=None, intervalData=None, passingData=None, transferOutput=False, **keywords):
		"""
		2014.01.04 added argument intervalData
		2013.04.08 use VCFJobData
		2012.10.3
			#. extract flanking sequences from the input VCF (ref sequence file => contig ref sequence)
			#. blast them
			#. run FindSNPPositionOnNewRefFromFlankingBlastOutput.py
				#. where hit length match query length, and no of mismatches <=2 => good => infer new coordinates
			#. output a mapping file between old SNP and new SNP coordinates.
				#. reduce this thing by combining everything
			#. make a new VCF file based on the input split VCF file
				(replace contig ID , position with the new one's, remove the header part regarding chromosomes or replace it)

		"""
		if workflow is None:
			workflow = self
		
		returnData = PassingData(no_of_jobs = 0)
		returnData.jobDataLs = []

		topOutputDirJob = passingData.topOutputDirJob
		mapDirJob = passingData.mapDirJob
		reduceOutputDirJob = passingData.reduceOutputDirJob
		
		intervalFileBasenamePrefix = passingData.intervalFileBasenamePrefix
		jobData = passingData.jobData
		VCFFile = VCFJobData.file	#2013.04.08
		
		splitVCFJob = passingData.mapEachVCFData.splitVCFJob
		chromosome = passingData.chromosome
		
		# a flanking sequence extraction job
		#noOfIndividuals
		realInputVolume = passingData.noOfIndividuals * passingData.span
		baseInputVolume = 600*2000	#600 individuals at 2000 sites
		#base is 200 individual X 2Mb region => 120 minutes
		walltime = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=60, \
							minJobPropertyValue=60, maxJobPropertyValue=1200).value
		#base is 4X, => 5000M
		job_max_memory = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=4000, \
							minJobPropertyValue=4000, maxJobPropertyValue=8000).value
		
		outputFnamePrefix = os.path.join(mapDirJob.output, '%s_flankSequence'%(intervalFileBasenamePrefix))
		outputFile = File('%s.fasta'%(outputFnamePrefix))
		extraArgumentList = ['--flankingLength %s'%(self.flankingLength), '--refFastaFname', passingData.oldRefFastaFile,\
							"--outputFormatType %s"%(self.alignmentMethodType)]
		# alignmentMethodType 1 => fasta
		# alignmentMethodType 2 => fastq
		extractFlankSeqJob = self.addAbstractMapperLikeJob(workflow=workflow, executable=self.ExtractFlankingSequenceForVCFLoci, \
					inputF=VCFFile, outputF=outputFile, \
					parentJobLs=[mapDirJob]+VCFJobData.jobLs, transferOutput=transferOutput, job_max_memory=2000,\
					extraArguments=None, extraArgumentList=extraArgumentList, extraDependentInputLs=[passingData.oldRefFastaFile])
		
		coordinateMapFile = File('%s_2NewRefCoordinateMap.tsv'%(outputFnamePrefix))
		chainFile = File('%s.chain.tsv'%(outputFnamePrefix))
		switchPointFile = File('%s_2NewRefCoordinateMap.switches.tsv'%(outputFnamePrefix))
		if self.alignmentMethodType==1:	#blast
			# a blast job
			blastOutputFnamePrefix = '%s_blast'%(outputFnamePrefix)
			outputFile = File('%s.tsv'%(blastOutputFnamePrefix))
			newRefFastaFile = passingData.newRefFastaFileList[0]
			blastJob = self.addBlastWrapperJob(executable=self.BlastWrapper, inputFile=extractFlankSeqJob.output, \
											outputFile=outputFile, \
							outputFnamePrefix=blastOutputFnamePrefix, databaseFile=newRefFastaFile,\
							maxNoOfMismatches=self.maxNoOfMismatches, minNoOfIdentities=self.minNoOfIdentities, \
							minIdentityPercentage=self.minIdentityFraction, blastallPath=self.blastallPath, \
							parentJobLs=[mapDirJob, extractFlankSeqJob, passingData.refIndexJob], \
							extraDependentInputLs=passingData.newRefFastaFileList, \
							transferOutput=transferOutput, \
							extraArguments=None, job_max_memory=5000)
			
			# a FindSNPPositionOnNewRefFromFlankingBlastOutput job
			findNewRefCoordinateJob = self.addFindNewRefCoordinateJob(executable=self.FindSNPPositionOnNewRefFromFlankingBlastOutput, \
						inputFile=blastJob.output, outputFile=coordinateMapFile, \
						chainFile=chainFile, \
						switchPointFile=switchPointFile,\
						maxNoOfMismatches=self.maxNoOfMismatches, \
						minNoOfIdentities=self.minNoOfIdentities, minIdentityFraction=self.minIdentityFraction, \
						minAlignmentSpan=self.minAlignmentSpan, parentJobLs=[blastJob], \
						transferOutput=transferOutput, job_max_memory=500, extraArguments=None, \
						extraArgumentList=None, extraOutputLs=None, )
			
		elif self.alignmentMethodType>=2:	#bwa
			#fake a fileObjectLs, which contains a single-end read fastq object
			# db_entry is supposedly a individual_sequence_file object 
			fileObjectLs = [PassingData(fastqF=extractFlankSeqJob.output, \
									db_entry=PassingData(quality_score_format='Standard', \
												individual_sequence=PassingData(sequencer=PassingData(short_name='GA'), \
																sequence_type=PassingData(short_name='SR', read_length_mean=2*self.flankingLength, paired_end=0)),\
												read_count=splitVCFJob.noOfSitesPerUnit))]
			bwaAdditionalAlignments = " -O 1000 -E 100"	#set Gap open and extension penalty really high to avoid gaps
			if self.alignmentMethodType==2:
				#2012.10.10 fake one
				alignment_method = PassingData(short_name='bwamem', command='mem')	#2013.05.21 use mem instead of aln
				bwaAdditionalAlignments += ' -a'	#2013.11.29 Output all found alignments for single-end or unpaired paired-end reads. These alignments will be flagged as secondary alignments
			else:
				#2013.07.10
				alignment_method = PassingData(short_name='bwaShortRead', command='aln')
			
			
			#2012.10.10 individual_alignment is not passed so that ReadGroup addition job is not added in addAlignmentJob()
			bamIndexJob = self.addAlignmentJob(workflow=workflow, fileObjectLs=fileObjectLs, \
				refFastaFList=passingData.newRefFastaFileList, bwa=workflow.bwa, \
				additionalArguments=self.additionalArguments + bwaAdditionalAlignments, samtools=workflow.samtools, \
				refIndexJob=passingData.refIndexJob, parentJobLs=[mapDirJob, extractFlankSeqJob], \
				alignment_method=alignment_method, \
				outputDir=mapDirJob.output,\
				PEAlignmentByBWA=workflow.PEAlignmentByBWA, ShortSEAlignmentByBWA=workflow.ShortSEAlignmentByBWA, \
				LongSEAlignmentByBWA=workflow.LongSEAlignmentByBWA,\
				java=workflow.java, SortSamFilesJava=workflow.SortSamFilesJava, SortSamJar=workflow.SortSamJar,\
				AddOrReplaceReadGroupsJava=workflow.AddOrReplaceReadGroupsJava, \
				AddOrReplaceReadGroupsJar=workflow.AddOrReplaceReadGroupsJar,\
				no_of_aln_threads=self.no_of_aln_threads,\
				stampy=workflow.stampy, \
				maxMissingAlignmentFraction=self.maxMissingAlignmentFraction, maxNoOfGaps=self.maxNoOfGaps, \
				addBamIndexJob=True, transferOutput = False)[0]
			
			alignmentJob = bamIndexJob.parentJobLs[0]
			# a FindSNPPositionOnNewRefFromFlankingBlastOutput job
			findNewRefCoordinateJob = self.addFindNewRefCoordinateJob(\
						executable=self.FindSNPPositionOnNewRefFromFlankingBWAOutput, \
						inputFile=alignmentJob.output, outputFile=coordinateMapFile, \
						chainFile=chainFile, switchPointFile=switchPointFile,\
						maxNoOfMismatches=self.maxNoOfMismatches, \
						minNoOfIdentities=self.minNoOfIdentities, minIdentityFraction=self.minIdentityFraction, \
						minAlignmentSpan=self.minAlignmentSpan, parentJobLs=[alignmentJob, bamIndexJob], \
						transferOutput=transferOutput, job_max_memory=500, extraArguments=None, \
						extraArgumentList=None, extraDependentInputLs=[bamIndexJob.output], \
						extraOutputLs=None)
		
		self.addInputToStatMergeJob(statMergeJob=self.switchPointStatMergeJob, inputF=findNewRefCoordinateJob.switchPointFile, \
							parentJobLs=[findNewRefCoordinateJob])
		
		#2014.1.4 add one mapPvalue computing job
		outputFile = File(os.path.join(self.mapDirJob.output, "%s.probability.tsv.gz"%(intervalFileBasenamePrefix)) )
		locusIntervalDeltaOutputFile = File(os.path.join(self.mapDirJob.output, "%s.locusIntervalDelta.tsv.gz"%(intervalFileBasenamePrefix,\
																					)))
		computeLiftOverLocusProbJob = self.addAbstractMatrixFileWalkerJob(executable=self.ComputeLiftOverLocusProbability, \
					inputFileList=None, inputFile=findNewRefCoordinateJob.output, outputFile=outputFile, \
					outputFnamePrefix=None, whichColumn=None, whichColumnHeader=None, \
					logY=None, valueForNonPositiveYValue=-1, \
					minNoOfTotal=1, samplingRate=1, \
					inputFileFormat=None, outputFileFormat=None,\
					parentJobLs=[findNewRefCoordinateJob], extraOutputLs=[locusIntervalDeltaOutputFile],\
					extraDependentInputLs=None, \
					extraArgumentList=["--locusIntervalDeltaOutputFname", locusIntervalDeltaOutputFile], \
					extraArguments=None, transferOutput=transferOutput, job_max_memory=2000, sshDBTunnel=False, \
					objectWithDBArguments=None)
		self.addInputToStatMergeJob(statMergeJob=self.mergeLocusLiftOverProbabilityJob, inputF=computeLiftOverLocusProbJob.output, \
							parentJobLs=[computeLiftOverLocusProbJob])
		
		"""
		2013.07.10 the TrioCaller VCF has some info tags that are not described in VCF header
		"""
		outputFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s1.extraInfo.vcf'%(intervalFileBasenamePrefix)))
		addInfoDescJob = self.addGenericJob(executable=self.AddMissingInfoDescriptionToVCFHeader, \
					inputFile=VCFJobData.file, \
					inputArgumentOption="-i", \
					outputFile=outputFile, outputArgumentOption="-o", \
					parentJobLs=[self.liftOverMapDirJob]+ VCFJobData.jobLs, \
					extraDependentInputLs=None, extraOutputLs=None, \
					frontArgumentList=None, extraArguments=None, extraArgumentList=None, \
					transferOutput=False, sshDBTunnel=None, \
					key2ObjectForJob=None, objectWithDBArguments=None, \
					no_of_cpus=None, job_max_memory=job_max_memory/2, walltime=walltime, \
					max_walltime=None)
		
		unsortedVCFFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s2.LiftOverUnsorted.vcf'%(intervalFileBasenamePrefix)))
		liftoverVariantsJob = self.addGenericJob(executable=self.LiftOverVCFBasedOnCoordinateMap, \
					inputFile=addInfoDescJob.output, \
					inputArgumentOption="-i", \
					outputFile=unsortedVCFFile, outputArgumentOption="-o", \
					parentJobLs=[findNewRefCoordinateJob, self.liftOverMapDirJob, addInfoDescJob], \
					extraDependentInputLs=[findNewRefCoordinateJob.output], extraOutputLs=[], \
					frontArgumentList=None, extraArguments=None, \
					extraArgumentList=["--coordinateMapFname", findNewRefCoordinateJob.output], \
					transferOutput=False, sshDBTunnel=None, \
					key2ObjectForJob=None, objectWithDBArguments=None, \
					no_of_cpus=None, job_max_memory=job_max_memory/2, walltime=walltime, \
					max_walltime=None)
		
		#check how much sites are lost
		outputF = File(os.path.join(self.statDirJob.output, '%s.s2.noOfLociAfterLiftover.tsv'%(intervalFileBasenamePrefix)))
		self.addVCFBeforeAfterFilterStatJob(chromosome=chromosome, outputF=outputF, \
								vcf1=addInfoDescJob.output, currentVCFJob=liftoverVariantsJob, \
								statMergeJob=self.noOfLociAfterLiftOverJob, \
								parentJobLs=[addInfoDescJob, liftoverVariantsJob, self.statDirJob])
	
		"""
		#my $cmd = "java -jar $gatk/dist/GenomeAnalysisTK.jar -T LiftoverVariants -R $oldRef.fasta -V:variant $in
		#	-o $unsorted_vcf -chain $chain -dict $newRef.dict";
		#	$cmd .= " -recordOriginalLocation";
		unsortedVCFFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.unsorted.vcf'%(intervalFileBasenamePrefix)))
		liftoverVariantsJob = self.addGATKJob(executable=self.LiftoverVariants, GATKAnalysisType="LiftoverVariants",\
					inputFile=addInfoDescJob.output, inputArgumentOption="-V:variant", \
					refFastaFList=self.oldRegisterReferenceData.refFastaFList, \
					inputFileList=None,\
					argumentForEachFileInInputFileList=None, interval=None, \
					outputFile=unsortedVCFFile, outputArgumentOption="--out", \
					frontArgumentList=None, extraArguments=None, \
					extraArgumentList=["-chain", chainFile, "-dict", self.newRegisterReferenceData.refPicardFastaDictF, "-recordOriginalLocation"], \
					extraOutputLs=None, \
					extraDependentInputLs=None, \
					parentJobLs=[findNewRefCoordinateJob, self.liftOverMapDirJob, addInfoDescJob], \
					transferOutput=False, \
					no_of_cpus=None, job_max_memory=job_max_memory, walltime=walltime, \
					key2ObjectForJob=None)
		"""
		#GATK's code for sorting vcf from https://github.com/broadgsa/gatk/blob/master/public/perl/sortByRef.pl
		#$cmd = "grep \"^#\" -v $unsorted_vcf | sort -n -k2 -T $tmp | $gatk/public/perl/sortByRef.pl --tmp $tmp - $newRef.fasta.fai >> $sorted_vcf";
		#
		# but use this guy instead
		# vcfsorter, from http://code.google.com/p/vcfsorter/ 
		#vcfsorter.pl genome.dict myvcf > mynewvcf.file 2>STDERR
		sortedVCFFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s3.LiftOverSorted.vcf'%(intervalFileBasenamePrefix)))
		vcfSorterJob = self.addPipeCommandOutput2FileJob(executable=self.vcfsorterShellPipe, \
					commandFile=self.vcfsorterExecutableFile, \
					outputFile=sortedVCFFile, \
					parentJobLs=[liftoverVariantsJob, self.liftOverMapDirJob], \
					extraDependentInputLs=[self.newRegisterReferenceData.refPicardFastaDictF, liftoverVariantsJob.output], \
					extraOutputLs=None, transferOutput=False, \
					extraArguments=None, \
					extraArgumentList=[self.newRegisterReferenceData.refPicardFastaDictF, liftoverVariantsJob.output], \
					sshDBTunnel=None,\
					job_max_memory=job_max_memory, walltime=walltime)
		
		#$cmd = "java -jar $gatk/dist/GenomeAnalysisTK.jar -T FilterLiftedVariants -R $newRef.fasta -V:variant $sorted_vcf -o $out";
		#
		filteredLiftOverVCFFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s4.filteredLiftOver.vcf'%(intervalFileBasenamePrefix)))
		filterLiftoverVariantsJob = self.addGATKJob(executable=self.FilterLiftedVariants, \
					GATKAnalysisType="FilterLiftedVariants",\
					inputFile=vcfSorterJob.output, inputArgumentOption="-V:variant", \
					refFastaFList=self.newRegisterReferenceData.refFastaFList, \
					inputFileList=None,\
					argumentForEachFileInInputFileList=None, interval=None, \
					outputFile=filteredLiftOverVCFFile, outputArgumentOption="--out", \
					frontArgumentList=None, extraArguments=None, \
					extraArgumentList=None, extraOutputLs=None, \
					extraDependentInputLs=None, \
					parentJobLs=[vcfSorterJob, self.liftOverMapDirJob], \
					transferOutput=False, \
					no_of_cpus=None, job_max_memory=job_max_memory, walltime=walltime, \
					key2ObjectForJob=None)
		
		#check how much sites are lost
		outputF = File(os.path.join(self.statDirJob.output, '%s.s4.noOfLociAfterFilterLiftover.tsv'%(intervalFileBasenamePrefix)))
		self.addVCFBeforeAfterFilterStatJob(chromosome=chromosome, outputF=outputF, \
								vcf1=vcfSorterJob.output, currentVCFJob=filterLiftoverVariantsJob, \
								statMergeJobLs=[self.noOfLociAfterGATKFilterLiftOverMergeJob,\
											self.noOfLociPerContigAfterGATKFilterLiftOverMergeJob], \
								parentJobLs=[vcfSorterJob, filterLiftoverVariantsJob, self.statDirJob])
	
		#cleanup the vcf if its switch density is > maxSwitchDensity
		
		outputFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s5.clearBasedOnSwitchDensity.vcf'%(intervalFileBasenamePrefix)))
		clearVCFBasedOnSwitchDensityJob = self.addGenericJob(executable=self.ClearVCFBasedOnSwitchDensity, \
					inputFile=filterLiftoverVariantsJob.output, \
					inputArgumentOption="-i", \
					outputFile=outputFile, outputArgumentOption="-o", \
					parentJobLs=[findNewRefCoordinateJob, self.liftOverMapDirJob, filterLiftoverVariantsJob], \
					extraDependentInputLs=[findNewRefCoordinateJob.switchPointFile], extraOutputLs=[], \
					frontArgumentList=None, extraArguments=None, \
					extraArgumentList=["--switchPointFname", findNewRefCoordinateJob.switchPointFile,\
									"--maxSwitchDensity %s"%(self.maxSwitchDensity)], \
					transferOutput=False, sshDBTunnel=None, \
					key2ObjectForJob=None, objectWithDBArguments=None, \
					no_of_cpus=None, job_max_memory=job_max_memory/2, walltime=walltime, \
					max_walltime=None)
		#record how many sites are lost
		outputF = File(os.path.join(self.statDirJob.output, '%s.s5.noOfLociAfterClearBasedOnSwitchDensity.tsv'%(intervalFileBasenamePrefix)))
		self.addVCFBeforeAfterFilterStatJob(chromosome=chromosome, outputF=outputF, \
								vcf1=filterLiftoverVariantsJob.output, currentVCFJob=clearVCFBasedOnSwitchDensityJob, \
								statMergeJobLs=[self.noOfLociAfterClearVCFMergeJob,\
											self.noOfLociPerContigAfterClearVCFMergeJob], \
								parentJobLs=[filterLiftoverVariantsJob, clearVCFBasedOnSwitchDensityJob, self.statDirJob])
		
		
		#2014.1.4 remove loci with low mapPvalue
		outputFile = File(os.path.join(self.liftOverMapDirJob.output, '%s.s6.RemoveLociWithLowMapPvalue.vcf'%(intervalFileBasenamePrefix)))
		removeLocusFromVCFWithLowLiftOverMapPvalueJob = self.addGenericJob(executable=self.RemoveLocusFromVCFWithLowLiftOverMapPvalue, \
					inputArgumentOption="-i", \
					inputFile=clearVCFBasedOnSwitchDensityJob.output, \
					outputFile=outputFile, outputArgumentOption="-o", \
					parentJobLs=[self.liftOverMapDirJob, clearVCFBasedOnSwitchDensityJob, computeLiftOverLocusProbJob], \
					extraDependentInputLs=None, extraOutputLs=None, \
					frontArgumentList=None, extraArguments=None, \
					extraArgumentList=["--liftOverLocusMapPvalueFname", computeLiftOverLocusProbJob.output,\
									"--minLiftOverMapPvalue %s"%(self.minLiftOverMapPvalue)], \
					transferOutput=False, sshDBTunnel=None, \
					key2ObjectForJob=None, objectWithDBArguments=None, \
					no_of_cpus=None, job_max_memory=job_max_memory/2, walltime=walltime, \
					max_walltime=None)
		
		#record how many sites are lost
		outputF = File(os.path.join(self.statDirJob.output, '%s.s6.RemoveLociWithLowMapPvalue.tsv'%(intervalFileBasenamePrefix)))
		self.addVCFBeforeAfterFilterStatJob(chromosome=chromosome, outputF=outputF, \
								vcf1=clearVCFBasedOnSwitchDensityJob.output, currentVCFJob=removeLocusFromVCFWithLowLiftOverMapPvalueJob, \
								statMergeJobLs=[self.noOfLociAfterRemoveLocusFromVCFWithLowLiftOverMapPvalueJob,\
											self.noOfLociPerContigAfterRemoveLocusFromVCFWithLowLiftOverMapPvalueMergeJob], \
								parentJobLs=[clearVCFBasedOnSwitchDensityJob, removeLocusFromVCFWithLowLiftOverMapPvalueJob, self.statDirJob])
		
		
		returnData.mapJob = removeLocusFromVCFWithLowLiftOverMapPvalueJob
		returnData.findNewRefCoordinateJob = findNewRefCoordinateJob
		return returnData
	
	def reduceEachVCF(self, workflow=None, chromosome=None, passingData=None, mapEachIntervalDataLs=None,\
					transferOutput=True, **keywords):
		"""
		2013.07.10
			#. concatenate all the sub-VCFs into one
		"""
		returnData = PassingData(no_of_jobs = 0)
		returnData.jobDataLs = []
		returnData.mapEachIntervalDataLs = mapEachIntervalDataLs
		
		intervalJobLs = [pdata.mapJob for pdata in mapEachIntervalDataLs]
		
		
		realInputVolume = passingData.jobData.file.noOfIndividuals * passingData.jobData.file.noOfLoci
		baseInputVolume = 200*20000
		walltime = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=60, \
							minJobPropertyValue=60, maxJobPropertyValue=500).value
		job_max_memory = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=5000, \
							minJobPropertyValue=5000, maxJobPropertyValue=10000).value
		
		concatenateVCFJobData = self.concatenateIntervalsIntoOneVCFSubWorkflow(refFastaFList=self.newRegisterReferenceData.refFastaFList, \
					fileBasenamePrefix='chr.%s.%s'%(chromosome, passingData.fileBasenamePrefix), passingData=passingData, \
					intervalJobLs=intervalJobLs,\
					outputDirJob=self.reduceEachVCFDirJob,
					transferOutput=True, job_max_memory=job_max_memory, walltime=walltime, \
					needBGzipAndTabixJob=True)
		
		returnData.concatenateVCFJobData = concatenateVCFJobData
		return returnData
		
	
	def reduce(self, workflow=None, passingData=None, reduceEachChromosomeDataLs=None, transferOutput=True, **keywords):
		"""
		2012.10.3
			#. merge all output of input jobs (passingData.mapEachIntervalDataLsLs) into one big one
		
		"""
		returnData = PassingData(no_of_jobs = 0)
		returnData.jobDataLs = []
		reduceOutputDirJob = passingData.reduceOutputDirJob
		
		outputFile = File(os.path.join(reduceOutputDirJob.output, 'SNPID2NewCoordinates.tsv'))
		reduceJob = self.addStatMergeJob(workflow, \
									statMergeProgram=self.mergeSameHeaderTablesIntoOne, \
									outputF=outputFile, \
									parentJobLs=[reduceOutputDirJob],extraOutputLs=[], \
									extraDependentInputLs=[], transferOutput=transferOutput,)
		
		
		#sort the SNPID2NewCoordinates file by chromosome and position (query, not target)
		sortedSNPID2NewCoordinateFile = File(os.path.join(reduceOutputDirJob.output, 'SNPID2NewCoordinates.sorted.tsv'))
		sortSNPID2NewCoordinatesJob = self.addSortJob(inputFile=reduceJob.output, \
						outputFile=sortedSNPID2NewCoordinateFile, noOfHeaderLines=1,\
						parentJobLs=[reduceJob], \
						extraOutputLs=None, transferOutput=False, \
						extraArgumentList=["-k3,3 -k4,4n"], \
						sshDBTunnel=None,\
						job_max_memory=4000, walltime=120)
		#2013 Explicit tab delimiter argument for sort is removed as each column field doesn't contain blank.
		#. it is fine to just use the default separator (non-blank to blank).
		returnData.jobDataLs.append(PassingData(jobLs=[sortSNPID2NewCoordinatesJob], file=sortSNPID2NewCoordinatesJob.output, \
											fileLs=[sortSNPID2NewCoordinatesJob.output]))
		
		intervalJobLs = []
		for mapEachIntervalDataLs in passingData.mapEachIntervalDataLsLs:
			for mapEachIntervalData in mapEachIntervalDataLs:
				self.addInputToStatMergeJob(statMergeJob=reduceJob, \
						parentJobLs=[mapEachIntervalData.findNewRefCoordinateJob])
				intervalJobLs.append(mapEachIntervalData.mapJob)
		
		
		realInputVolume = passingData.jobData.file.noOfIndividuals * passingData.jobData.file.noOfLoci
		baseInputVolume = 200*20000
		walltime = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=60, \
							minJobPropertyValue=60, maxJobPropertyValue=500).value
		job_max_memory = self.scaleJobWalltimeOrMemoryBasedOnInput(realInputVolume=realInputVolume, \
							baseInputVolume=baseInputVolume, baseJobPropertyValue=5000, \
							minJobPropertyValue=5000, maxJobPropertyValue=10000).value
		
		concatenateVCFJobData = self.concatenateIntervalsIntoOneVCFSubWorkflow(refFastaFList=self.newRegisterReferenceData.refFastaFList, \
					fileBasenamePrefix='wholeGenome.%s'%(passingData.fileBasenamePrefix), passingData=passingData, \
					intervalJobLs=intervalJobLs,\
					outputDirJob=self.reduceOutputDirJob,
					transferOutput=False, job_max_memory=job_max_memory, walltime=walltime, needBGzipAndTabixJob=False)
		
		#bgzip and tabix
		gzipVCFFile = File('%s.gz'%(concatenateVCFJobData.file.name))
		bgzip_tabix_job = self.addBGZIP_tabix_Job(bgzip_tabix=self.bgzip_tabix_in_reduce, \
								parentJobLs=concatenateVCFJobData.jobLs, \
								inputF=concatenateVCFJobData.file, outputF=gzipVCFFile, transferOutput=True,\
								job_max_memory=job_max_memory/4, walltime=walltime/4)
		
		newRefFastaFile = FastaFile(inputFname=self.newRefFastaFname)
		for seqTitle in newRefFastaFile.seqTitleList:
			#select each chromosome job
			oneChromosomeVCFFile = File(os.path.join(self.liftOverReduceDirJob.output, '%s.vcf'%(seqTitle)))
			selectOneChromosomeVCFJob = self.addSelectVariantsJob(SelectVariantsJava=self.SelectVariantsJavaInReduce, \
																GenomeAnalysisTKJar=None, \
					inputF=concatenateVCFJobData.file, outputF=oneChromosomeVCFFile, \
					interval=seqTitle,\
					refFastaFList=self.newRegisterReferenceData.refFastaFList, \
					sampleIDKeepFile=None, snpIDKeepFile=None, sampleIDExcludeFile=None, \
					parentJobLs=concatenateVCFJobData.jobLs + [self.liftOverReduceDirJob], extraDependentInputLs=concatenateVCFJobData.fileLs, \
					transferOutput=False, \
					extraArguments=None, extraArgumentList=None, job_max_memory=job_max_memory, walltime=walltime)
			
			#remove redundant loci (one or all redudant loci result from alignment errors)
			
			outputFile = File(os.path.join(self.liftOverReduceDirJob.output, '%s.unique.vcf'%(seqTitle)))
			removeRedundantLociFromVCFJob = self.addGenericJob(executable=self.RemoveRedundantLociFromVCF_InReduce, \
						inputFile=selectOneChromosomeVCFJob.output, \
						inputArgumentOption="-i", \
						outputFile=outputFile, outputArgumentOption="-o", \
						parentJobLs=[selectOneChromosomeVCFJob, self.liftOverReduceDirJob, ], \
						extraDependentInputLs=None, extraOutputLs=None, \
						frontArgumentList=None, extraArguments=None, \
						extraArgumentList=None, \
						transferOutput=False, sshDBTunnel=None, \
						key2ObjectForJob=None, objectWithDBArguments=None, \
						no_of_cpus=None, job_max_memory=job_max_memory/2, walltime=walltime, \
						max_walltime=None)
			
			#record how many sites are lost
			outputF = File(os.path.join(self.statDirJob.output, '%s.noOfLociAfterRemoveRedundancy.tsv'%(seqTitle)))
			self.addVCFBeforeAfterFilterStatJob(chromosome=seqTitle, outputF=outputF, \
									vcf1=selectOneChromosomeVCFJob.output, currentVCFJob=removeRedundantLociFromVCFJob, \
									statMergeJobLs=[self.noOfLociAfterRemoveRedundancyMergeJob,\
												self.noOfLociPerContigAfterRemoveRedundancyMergeJob], \
									parentJobLs=[selectOneChromosomeVCFJob, removeRedundantLociFromVCFJob, self.statDirJob])
			
			
			#sort each vcf file
			sortedVCFFile = File(os.path.join(self.liftOverReduceDirJob.output, '%s.sorted.vcf'%(seqTitle)))
			vcfSorterJob = self.addPipeCommandOutput2FileJob(commandFile=self.vcfsorterExecutableFile, \
					outputFile=sortedVCFFile, \
					parentJobLs=[removeRedundantLociFromVCFJob, self.liftOverReduceDirJob], \
					extraDependentInputLs=[self.newRegisterReferenceData.refPicardFastaDictF, removeRedundantLociFromVCFJob.output], \
					extraOutputLs=None, transferOutput=False, \
					extraArguments=None, extraArgumentList=[self.newRegisterReferenceData.refPicardFastaDictF, removeRedundantLociFromVCFJob.output], \
					job_max_memory=job_max_memory, walltime=walltime)
			
			#bgzip and tabix
			gzipVCFFile = File(os.path.join(self.liftOverReduceDirJob.output, '%s.sorted.vcf.gz'%(seqTitle)))
			bgzip_tabix_job = self.addBGZIP_tabix_Job(bgzip_tabix=self.bgzip_tabix_in_reduce, \
									parentJob=vcfSorterJob, \
									inputF=vcfSorterJob.output, outputF=gzipVCFFile, transferOutput=True,\
									job_max_memory=job_max_memory/4, walltime=walltime/4)
		return returnData
	
	def setup_run(self):
		"""
		2013.07.08
			
		"""
		pdata = ParentClass.setup_run(self)
		
		self.oldRegisterReferenceData = self.registerRefFastaFile(
							refFastaFname=self.oldRefFastaFname, \
							registerAffiliateFiles=True, \
							checkAffiliateFileExistence=True)
		
		self.newRegisterReferenceData = self.registerRefFastaFile(
							refFastaFname=self.newRefFastaFname, \
							registerAffiliateFiles=True, \
							checkAffiliateFileExistence=True)
		
		sys.stderr.write(" %s files related to the old reference %s; %s files related to new reference, %s.\n"%\
						(len(self.oldRegisterReferenceData.refFastaFList), self.oldRefFastaFname,
						len(self.newRegisterReferenceData.refFastaFList) , self.newRefFastaFname))
		return self

if __name__ == '__main__':
	main_class = FindNewRefCoordinatesGivenVCFFolderWorkflow
	po = ProcessOptions(sys.argv, main_class.option_default_dict, error_doc=main_class.__doc__)
	instance = main_class(**po.long_option2value)
	instance.run()