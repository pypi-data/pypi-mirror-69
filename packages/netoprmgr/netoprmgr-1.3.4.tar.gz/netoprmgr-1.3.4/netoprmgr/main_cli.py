import os
import time
import re
import pkg_resources
import shutil
import subprocess
from zipfile import ZipFile

from netoprmgr.script.capture import function_capture
from netoprmgr.script.check import function_check
from netoprmgr.script.device_identification import device_identification
from netoprmgr.script.create_template import create_data_template

base_path = pkg_resources.resource_filename('netoprmgr', '')
capture_path = pkg_resources.resource_filename('netoprmgr', 'static/')
capture_path = os.path.join(capture_path,'capture/')
data_path = pkg_resources.resource_filename('netoprmgr', 'static/')
data_path = os.path.join(data_path,'data/')
result_path = pkg_resources.resource_filename('netoprmgr', 'static/')
result_path = os.path.join(result_path,'result/')


class MainCli:

    def deviceIdentification():
        chg_dir = os.chdir(data_path)
        current_dir=os.getcwd()
        raw_data_dir = (data_path+'/raw_data.xlsx')
        call_device_identification = device_identification(raw_data_dir)

    def deviceAvailability():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        data_dir = (data_path+'/devices_data.xlsx')
        call_function_check=function_check(data_dir,capture_path)
        src_mv = (capture_path+'device_availability_check.xlsx')
        dst_mv = (result_path+'device_availability_check.xlsx')
        shutil.move(src_mv,dst_mv)

    def captureDevice():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        files = os.listdir(current_dir)
        for file in files:
            if file.endswith(".zip"):
                os.remove(file)
        data_dir = (data_path+'/devices_data.xlsx')
        command_dir = (data_path+'/show_command.xlsx')
        call_function_capture=function_capture(data_dir,command_dir,capture_path)
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        files = os.listdir(current_dir)
        zipObj = ZipFile('captures.zip', 'w')
        for file in files:
            zipObj.write(file)
        zipObj.close()

    def createReport():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        from netoprmgr.script.file_identification import file_identification
        from netoprmgr.script.to_docx import to_docx
        files = os.listdir(current_dir)
        file_identification=file_identification(files)
        file_identification.file_identification()
        to_docx=to_docx()
        to_docx.to_docx()
        time.sleep(3)
        src_mv = (capture_path+'preventive_maintenance.docx')
        dst_mv = (result_path+'preventive_maintenance.docx')
        shutil.move(src_mv,dst_mv)
        os.remove("pmdb")

    def showEnvironment():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        from netoprmgr.script.get_env import get_env
        from netoprmgr.script.env_docx import env_docx
        files = os.listdir(current_dir)
        get_env=get_env(files)
        get_env.get_env()
        env_docx=env_docx()
        env_docx.env_docx()
        time.sleep(3)
        src_mv = (capture_path+'show_environment.docx')
        dst_mv = (result_path+'show_environment.docx')
        shutil.move(src_mv,dst_mv)
        os.remove("env_pmdb")

    def showLog():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        from netoprmgr.script.get_log import get_log
        #from netoprmgr.script.log_docx import log_docx

        num=input('Log for 1 or 3 month?\n')
        month_list = []
        if num == '1':
            month=input('Please input month\n'+'1 = Jan\n'+
                                                    '2 = Feb\n'+
                                                    '3 = Mar\n'+
                                                    '4 = Apr\n'+
                                                    '5 = May\n'+
                                                    '6 = Jun\n'+
                                                    '7 = Jul\n'+
                                                    '8 = Aug\n'+
                                                    '9 = Sep\n'+
                                                    '10 = Oct\n'+
                                                    '11 = Nov\n'+
                                                    '12 = Dec\n')
            if month == '1':
                month = 'Jan'
            elif month == '2':
                month = 'Feb'
            elif month == '3':
                month = 'Mar'
            elif month == '4':
                month = 'Apr'
            elif month == '5':
                month = 'May'
            elif month == '6':
                month = 'Jun'
            elif month == '7':
                month = 'Jul'
            elif month == '8':
                month = 'Aug'
            elif month == '9':
                month = 'Sep'
            elif month == '10':
                month = 'Oct'
            elif month == '11':
                month = 'Nov'
            elif month == '12':
                month = 'Dec'
            month_list.append(month)
        elif num == '3':
            month=input('Please input first month\n'+'1 = Jan\n'+
                                                    '2 = Feb\n'+
                                                    '3 = Mar\n'+
                                                    '4 = Apr\n'+
                                                    '5 = May\n'+
                                                    '6 = Jun\n'+
                                                    '7 = Jul\n'+
                                                    '8 = Aug\n'+
                                                    '9 = Sep\n'+
                                                    '10 = Oct\n'+
                                                    '11 = Nov\n'+
                                                    '12 = Dec\n')
            if month == '1':
                month = 'Jan'
            elif month == '2':
                month = 'Feb'
            elif month == '3':
                month = 'Mar'
            elif month == '4':
                month = 'Apr'
            elif month == '5':
                month = 'May'
            elif month == '6':
                month = 'Jun'
            elif month == '7':
                month = 'Jul'
            elif month == '8':
                month = 'Aug'
            elif month == '9':
                month = 'Sep'
            elif month == '10':
                month = 'Oct'
            elif month == '11':
                month = 'Nov'
            elif month == '12':
                month = 'Dec'
            month_list.append(month)

            month=input('\nPlease input second month\n'+'1 = Jan\n'+
                                                    '2 = Feb\n'+
                                                    '3 = Mar\n'+
                                                    '4 = Apr\n'+
                                                    '5 = May\n'+
                                                    '6 = Jun\n'+
                                                    '7 = Jul\n'+
                                                    '8 = Aug\n'+
                                                    '9 = Sep\n'+
                                                    '10 = Oct\n'+
                                                    '11 = Nov\n'+
                                                    '12 = Dec\n')
            if month == '1':
                month = 'Jan'
            elif month == '2':
                month = 'Feb'
            elif month == '3':
                month = 'Mar'
            elif month == '4':
                month = 'Apr'
            elif month == '5':
                month = 'May'
            elif month == '6':
                month = 'Jun'
            elif month == '7':
                month = 'Jul'
            elif month == '8':
                month = 'Aug'
            elif month == '9':
                month = 'Sep'
            elif month == '10':
                month = 'Oct'
            elif month == '11':
                month = 'Nov'
            elif month == '12':
                month = 'Dec'
            month_list.append(month)

            month=input('\nPlease input third month\n'+'1 = Jan\n'+
                                                    '2 = Feb\n'+
                                                    '3 = Mar\n'+
                                                    '4 = Apr\n'+
                                                    '5 = May\n'+
                                                    '6 = Jun\n'+
                                                    '7 = Jul\n'+
                                                    '8 = Aug\n'+
                                                    '9 = Sep\n'+
                                                    '10 = Oct\n'+
                                                    '11 = Nov\n'+
                                                    '12 = Dec\n')
            if month == '1':
                month = 'Jan'
            elif month == '2':
                month = 'Feb'
            elif month == '3':
                month = 'Mar'
            elif month == '4':
                month = 'Apr'
            elif month == '5':
                month = 'May'
            elif month == '6':
                month = 'Jun'
            elif month == '7':
                month = 'Jul'
            elif month == '8':
                month = 'Aug'
            elif month == '9':
                month = 'Sep'
            elif month == '10':
                month = 'Oct'
            elif month == '11':
                month = 'Nov'
            elif month == '12':
                month = 'Dec'
            month_list.append(month)
        else:
            print('Wrong Input!!! Back To Main')
            menu()

        files = os.listdir(current_dir)
        get_log=get_log(files,month_list)
        get_log.get_log()
        #env_docx=env_docx()
        #env_docx.env_docx()
        
        time.sleep(3)
        for file in files:
            if file.endswith("db"):
                os.remove(file)
        src_mv = (capture_path+'show_log.docx')
        dst_mv = (result_path+'show_log.docx')
        shutil.move(src_mv,dst_mv)

    def showLogWeb(month_list):
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        from netoprmgr.script.get_log import get_log

        month_list = month_list

        files = os.listdir(current_dir)
        get_log=get_log(files,month_list)
        get_log.get_log()
        
        time.sleep(3)
        for file in files:
            if file.endswith("db"):
                os.remove(file)
        src_mv = (capture_path+'show_log.docx')
        dst_mv = (result_path+'show_log.docx')
        shutil.move(src_mv,dst_mv)

    def createNewReport():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        from netoprmgr.script.new_file_identification import new_file_identification
        from netoprmgr.script.convert_docx import convert_docx
        files = os.listdir(current_dir)
        new_file_identification=new_file_identification(files)
        new_file_identification.new_file_identification()
        convert_docx=convert_docx()
        convert_docx.convert_docx()
        time.sleep(3)
        src_mv = (capture_path+'preventive_maintenance.docx')
        dst_mv = (result_path+'preventive_maintenance.docx')
        shutil.move(src_mv,dst_mv)
        os.remove("pmdb")

    def createTemplate():
        chg_dir = os.chdir(data_path)
        create_data_template=create_data_template()

    def deleteCapture():
        chg_dir = os.chdir(capture_path)
        current_dir=os.getcwd()
        files = os.listdir(current_dir)
        print(files)
        for file in files:
            try:
                os.remove(file)
            except:
                pass

    def webAccess():
        chg_dir = os.chdir(base_path)
        print(os.getcwd())
        command = ['python3 main_web.py','python main_web.py']
        count_row = 0

        for i in command:
            try:
                subprocess.call(i, shell=True)
            except:
                pass
            count_row+=1
        
if __name__ == "__main__":
    answer=input(
    'Type "template" to create template on data folder\n\n'
    'Press Number for MENU :\n'
    'Type "web" for accessing web version\n'
    '0. Device Identification (Still Development)\n'
    '1. Device Availability Check\n'
    '2. Capture\n'
    '3. Create Report\n'
    '4. Show Environment Report\n'
    '5. Show Log Report\n'
    '6. New Create Report\n'
    'Type "quit" to quit program\n'
    )
    if answer == '0':
        MainCli.deviceIdentification()
    elif answer == '1':
        MainCli.deviceAvailability()
    elif answer == '2':
        MainCli.captureDevice()
    elif answer == '3':
        MainCli.createReport()
    elif answer == '4':
        MainCli.showEnvironment()
    elif answer == '5':
        MainCli.showLog()
    elif answer == '6':
        MainCli.createNewReport()
    elif answer == 'web':
        MainCli.webAccess()