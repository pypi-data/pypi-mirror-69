#!/usr/bin/env python3
# coding: utf-8

import sqlite3

from multiprocessing import Pool
from napoleontoolbox.file_saver import dropbox_file_saver

import json

class ForecasterParalleLauncher():
    def __init__(self,drop_token='', dropbox_backup=True, local_root_directory='../data',user='napoleon',  db_path_suffix = '_run.sqlite', ss=[10], ns=[21], s_evals = [5], n_ffts=[21], n_wavelets=[21], calibration_steps=[1000],add_wavelet_details=[False], optimize_thresholds=[True], signal_idiosyncratic_paramaters=[None]):
        self.args = []
        self.counter = 1
        self.seed = 0
        for s in ss:
            for n in ns:
                for s_eval in s_evals:
                    for n_fft in n_ffts:
                        for n_wavelet in n_wavelets:
                            for add_wavelet_detail in add_wavelet_details:
                                for calibration_step in calibration_steps:
                                    for optimize_threshold in optimize_thresholds:
                                        for signal_type, params  in signal_idiosyncratic_paramaters.items():
                                            for param in params:
                                                self.args.append((self,self.seed,n,s,s_eval,n_fft,n_wavelet,add_wavelet_detail,calibration_step,optimize_threshold,signal_type,json.dumps(param, sort_keys=True)))
                                                self.counter = self.counter + 1
        self.args.sort()
        self.local_root_directory = local_root_directory
        self.user = user
        self.db_path_suffix = db_path_suffix
        self.filename =  user + db_path_suffix
        self.db_path = self.local_root_directory + self.filename
        self.runs = []
        self.totalRow = 0
        self.instantiateTable()
        self.instantiateSignalTable()
        self.empty_runs_to_investigate = []
        self.dbx = dropbox_file_saver.NaPoleonDropboxConnector(drop_token=drop_token,dropbox_backup=dropbox_backup)

    def launchParallelPool(self, toRun, use_num_cpu):
        with Pool(processes=use_num_cpu) as pool:
            results = pool.starmap(toRun, self.args)
            print('parallel computation done')

    def launchSequential(self, toRun):
        for meArg in self.args:
             toRun(*meArg)

    def instantiateSignalTable(self):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = '''CREATE TABLE parallel_signal (
                                        effective_date date PRIMARY KEY);'''
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")

    def instantiateTable(self):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = '''CREATE TABLE parallel_run (
                                        effective_date date PRIMARY KEY);'''
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")

    def addRunTurnOver(self,run):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = 'alter table parallel_run add column ' + run + '_turn_over real'
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
            self.runs.append(run)
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")  # adding the column

    def addRunPerf(self,run):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = 'alter table parallel_run add column ' + run + '_perf_return real'
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
            self.runs.append(run)
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")  # adding the column

    def insertSignals(self, run, values):
        sqliteConnection = None
        try:
            success = True
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for i, v in values.iteritems():
                sqlite_insert_query = """INSERT INTO 'parallel_signal' ('effective_date', '""" + run + """') VALUES ('""" + str(
                    i) + """','""" + str(v) + """');"""
                cursor.execute(sqlite_insert_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
            success = False
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")
        return success

    def insertResults(self, run, values):
        sqliteConnection = None
        try:
            success = True
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for i, v in values.iteritems():
                sqlite_insert_query = """INSERT INTO 'parallel_run' ('effective_date', '""" + run + """') VALUES ('""" + str(
                    i) + """','""" + str(v) + """');"""
                cursor.execute(sqlite_insert_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
            success = False
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")
        return success

    def updateSignals(self, run, values):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for i, v in values.iteritems():
                sqlite_update_query = """UPDATE 'parallel_signal' set '""" + run + """' = '""" + str(
                    v) + """' where effective_date = '""" + str(i) + """'"""
                cursor.execute(sqlite_update_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")

    def updateResults(self, run, values):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for i, v in values.iteritems():
                sqlite_update_query = """UPDATE 'parallel_run' set '""" + run + """' = '""" + str(
                    v) + """' where effective_date = '""" + str(i) + """'"""
                cursor.execute(sqlite_update_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")

    def insertPerfTurnOverResults(self, run, signal_results_df):
        sqliteConnection = None
        try:
            success = True
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for date_index, row in signal_results_df.iterrows():
                sqlite_insert_query = """INSERT INTO 'parallel_run' ('effective_date', '""" +run +"""_perf_return','"""+run +"""_turn_over')"""+""" VALUES ('""" + str(
                    date_index) + """','""" + str(row['perf_return']) + """','""" + str(row['turn_over']) + """');"""
                cursor.execute(sqlite_insert_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
            success = False
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")
        return success

    def updatePerfTurnOverResults(self, run, signal_results_df):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            cursor = sqliteConnection.cursor()
            for date_index, row in signal_results_df.iterrows():
                sqlite_update_query = """UPDATE 'parallel_run' set ('""" + run + """_perf_return','""" + run + """_turn_over')""" + """ = ('""" + str(
                    row['perf_return']) + """','""" + str(row['turn_over']) + """') where effective_date = '""" + str(
                    date_index) + """'"""
                cursor.execute(sqlite_update_query)
            sqliteConnection.commit()
            cursor.close()
        except sqlite3.Error as error:
            print("Error while working with SQLite", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")

    def addPerfTurnOverResults(self, run, values):
        success = self.insertPerfTurnOverResults(run,values)
        if not success :
            self.updatePerfTurnOverResults(run, values)


    def addResults(self, run, values):
        success = self.insertResults(run,values)
        if not success :
            self.updateResults(run, values)

    def addSignals(self, run, values):
        success = self.insertSignals(run,values)
        if not success :
            self.updateSignals(run, values)

    def addSignal(self,run):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = 'alter table parallel_signal add column ' + run + ' real'
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
            self.runs.append(run)
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")  # adding the column

    def addRun(self,run):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_create_table_query = 'alter table parallel_run add column ' + run + ' real'
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_create_table_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
            self.runs.append(run)
        except sqlite3.Error as error:
            print("Error while creating a sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")  # adding the column

    def saveAll(self,run, strat_results_df):
        self.saveResults(run, strat_results_df['reconstituted_perf'])
        self.saveSignals(run, strat_results_df['signal'])

    def saveResults(self, run, strat_results_df):
        self.addRun(run)
        #self.addRunPerf(run)
        #self.addRunTurnOver(run)
        self.addResults(run, strat_results_df)

    def saveSignals(self, run, strat_results_df):
        self.addSignal(run)
        #self.addRunPerf(run)
        #self.addRunTurnOver(run)
        self.addSignals(run, strat_results_df)

    def checkRunExistence(self,run):
        sqliteConnection = None
        runExistence=None
        try:
            sqliteConnection = sqlite3.connect(self.db_path)
            sqlite_select_run_query = 'SELECT effective_date,'+run + ' FROM parallel_run'
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            cursor.execute(sqlite_select_run_query)
            sqliteConnection.commit()
            print("SQLite table created")
            cursor.close()
            runExistence = True
        except sqlite3.Error as error:
            print("The run is not present", error)
            runExistence = False
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("sqlite connection is closed")  # adding the column
        return runExistence

    def datesCount(self):
        sqliteConnection = None
        try:
            sqliteConnection = sqlite3.connect(self.db_path, timeout=20)
            cursor = sqliteConnection.cursor()
            sqlite_select_query = """SELECT count(*) from parallel_run"""
            cursor.execute(sqlite_select_query)
            totalRows = cursor.fetchone()
            print("Total rows are:  ", totalRows)
            cursor.close()
            return totalRows
        except sqlite3.Error as error:
            print("Failed to read data from sqlite table", error)
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The Sqlite connection is closed")



    def upload_results_to_dropbox(self):
        print('uploading to dropbox the results '+self.db_path)
        self.dbx.uploadFileToDropbox(filename=self.filename,fullpath = self.db_path)
