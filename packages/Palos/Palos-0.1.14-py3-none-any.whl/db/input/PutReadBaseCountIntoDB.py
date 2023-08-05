#!/usr/bin/env python
"""
Examples:
	%s 
	
	%s -u yh /tmp/readCount.tsv

Description:
	2012.3.13
		program to put output of CountFastqReadBaseCount.py into database.
		table IndividualSequence and IndividualSequenceFile
"""

import sys, os, math
__doc__ = __doc__%(sys.argv[0], sys.argv[0])

sys.path.insert(0, os.path.expanduser('~/lib/python'))
sys.path.insert(0, os.path.expanduser('~/script'))
sys.path.insert(0, os.path.expanduser('~/src'))

import csv, copy
from pymodule import ProcessOptions, PassingData, utils, figureOutDelimiter
from Sunset.mapper.AbstractAccuMapper import AbstractAccuMapper as ParentClass
from pymodule.db import SunsetDB as DBClass

class PutReadBaseCountIntoDB(ParentClass):
	__doc__ = __doc__
	option_default_dict = copy.deepcopy(ParentClass.option_default_dict)
	option_default_dict.pop(('inputFname', 0, ))
	option_default_dict.pop(('outputFname', 0, ))
	option_default_dict.pop(('outputFnamePrefix', 0, ))
	option_default_dict.update({
							('genomeSize', 1, int): [3000000000, '', 1, 'the estimated genome size for calculating coverage=baseCount/genomeSize'],\
							})
	def __init__(self, inputFnameLs, **keywords):
		"""
		"""
		ParentClass.__init__(self, inputFnameLs, **keywords)
	
	def updateIndividualSequenceFileReadBaseCount(self, db_main=None, isqf_id=None, read_count=None, base_count=None):
		"""
		2012.3.14
		"""
		if self.debug or self.report:
			sys.stderr.write("Updating IndividualSequenceFile read & base count for isqf_id %s ...\n"%(isqf_id))
		isqf = db_main.queryTable(DBClass.IndividualSequenceFile).get(isqf_id)
		if isqf:
			if isqf.read_count !=read_count or isqf.base_count!=base_count:
				isqf.read_count = read_count
				isqf.base_count = base_count
				db_main.session.add(isqf)
			return 1
		else:
			sys.stderr.write("warning: IndividualSequenceFile.id=%s not found in db.\n"%(isqf_id))
			return 0
	
	def updateIndividualSequenceReadBaseCount(self, db_main=None, isq_id=None, read_count=None, base_count=None, \
											genomeSize=3000000000):
		"""
		2012.3.14
		"""
		if self.debug or self.report:
			sys.stderr.write("Updating IndividualSequence read & base count for isq_id %s ...\n"%(isq_id))
		isq = db_main.queryTable(DBClass.IndividualSequence).get(isq_id)
		if isq:
			if isq.read_count !=read_count or isq.base_count!=base_count:
				isq.read_count = read_count
				isq.base_count = base_count
				isq.coverage = float(base_count)/float(genomeSize)
				db_main.session.add(isq)
			return 1
		else:
			sys.stderr.write("warning: IndividualSequence.id=%s not found in db.\n"%(isq_id))
			return 0
	
	def run(self):
		"""
		"""
		
		if self.debug:
			import pdb
			pdb.set_trace()
		session = self.db_main.session
		session.begin()
		
		isq_id2data ={}
		no_of_total_lines = 0
		no_of_isqf_lines = 0
		no_of_isqf_in_db = 0
		for inputFname in self.inputFnameLs:
			reader = csv.reader(open(inputFname), delimiter=figureOutDelimiter(inputFname))
			header = reader.next()
			colName2Index = utils.getColName2IndexFromHeader(header, skipEmptyColumn=True)
			isq_id_index = colName2Index.get('isq_id')
			isqf_id_index = colName2Index.get('isqf_id')
			read_count_index = colName2Index.get("read_count")
			base_count_index = colName2Index.get("base_count")
			for row in reader:
				isq_id = int(row[isq_id_index])
				isqf_id = row[isqf_id_index]
				read_count = int(row[read_count_index])
				base_count = int(row[base_count_index])
				if isq_id not in isq_id2data:
					isq_id2data[isq_id] = PassingData(read_count=0, base_count=0)
				isq_id2data[isq_id].read_count += read_count
				isq_id2data[isq_id].base_count += base_count
				if isqf_id and isqf_id!='0':
					isqf_id = int(isqf_id)
					no_of_isqf_lines += 1
					no_of_isqf_in_db += self.updateIndividualSequenceFileReadBaseCount(self.db_main, isqf_id=isqf_id, \
											read_count=read_count, base_count=base_count)
				no_of_total_lines += 1
			del reader
		logMsg1="%s isqf out of %s were put into db. %s lines in total.\n"%(no_of_isqf_in_db, no_of_isqf_lines, no_of_total_lines)
		sys.stderr.write(logMsg1)
		
		counter = 0
		real_counter = 0
		for isq_id, data in isq_id2data.iteritems():
			real_counter += self.updateIndividualSequenceReadBaseCount(self.db_main, isq_id=isq_id, \
										read_count=data.read_count, base_count=data.base_count, genomeSize=self.genomeSize)
			counter += 1
		logMsg2="%s isq out of %s were put into db.\n"%(real_counter, counter)
		sys.stderr.write(logMsg2)
		
		if self.logFilename:
			logF = open(self.logFilename, 'w')
			logF.write(logMsg1)
			logF.write(logMsg2)
			del logF
			
		
		if self.commit:
			self.db_main.session.flush()
			self.db_main.session.commit()

if __name__ == '__main__':
	main_class = PutReadBaseCountIntoDB
	po = ProcessOptions(sys.argv, main_class.option_default_dict, error_doc=main_class.__doc__)
	instance = main_class(po.arguments, **po.long_option2value)
	instance.run()