WARNING! Do not change the name of any folder created by this program:
    Do not alter any file name in the installation directory or in the main log directory - this could cause the
    application to break. Internal data in the text files may be modified as the user pleases.

Description: Lightweight command line program to increase ease of logging and exporting exercise records
Commands supported:

Installation instructions:
    (1) Download Python v3.6+
    (2) Copy ExerciseTerminal.py, Setup.py and CreateRequiredFiles.py to the preferred destination folder.
    (3) After ensuring that your version of Python is set to PATH (run "sysdm.cpl" > Advanced > Environment Variables), call "pip install --editable ." in the folder with the three files.
    (4) Call "initdir" and start using.

COMMANDS FOR EXERCISE-TERMINAL:
    (1) initialise directory:                           initdir;    This command should be called first. This command can change BodyHealth directory.
                                                                    The two defaults which will NOT be prompted are:
                                                                        'Logging_Resolution=Day'
                                                                        'Cache_Period=Forever'
                                                                    User may change this using the setreso and setCP commands
                                                                    Refrain from initialising in a logging directory with another folder names
                                                                    "ExerciseTerminalLogFiles" as this may break the program/cause important information to be overwritten.
    (2) log exercise:                                   ex -l <time in DDMMYYYY-HHmm or HHmm form>, or just "ex" for logging "now"
                                                            subarguments:
                                                                -n 'Type additional notes; eg, name of the person doing the exercise, if the file is not named after the performer of the exercises.'
                                                            logging variables:
                                                                (a) exercise; Type the ACRONYM for the exercise done; find acronym specified in legends.txt.
                                                                (b) reps; Specify reps - integer only)
                                                                (c) weight; Specify weight (integer or decimal number in kilos); if no weight specification, type NA or 0.
                                                                (d) duration; Specify duration (seconds - s, mins - m, hours - h; omit spaces) and omit spaces; if no weight specification, type 0
                                                                (e) doneby; Specify the person doing the exercise. As far as possible, keep the name consistent and exact across all logs.
    (3) delete log:                                     dellog
    (4) modify log:                                     modlog
    (5) create exercise:                                createex
    (6) delete exercise from legend:                    delex
    (7) check full name of exercise from its acronym:   chknm
    (8) check acronym of exercise from its full name:   chkac
    (9) query slice of log file (and export file):      querylog
    (10) query all logs in log file (and export file):  alllogs;    does not work if there are blank lines in the selected log file)
    (11) sort all logs in log file (by date/time):      sortlog
    (12) sort legend (by alphabet):                     sortleg

Manual Tools:
    (1) change config.txt directory:                    setdir <input full directory path of the folder> (log file will be unselected --> "None")
    (2) change config.txt logging file:                 setlogfile <input full directory path of the file with extension>
    (3) change config.txt resolution:                   setreso
    (4) change config.txt cache period:                 setCP <param>;
                                                                Input integer number to specify number of days for
                                                                cache period.
                                                                Input string 'F' to set period to "Forever".
    (5) change config.txt logging extension:            setext ##
    (6) print contents of config.txt:                   etconfig

ABORT process:
    Pressing the "CTRL+C" will abort any running ExerciseTerminal process.

NOTE:
    - Using the '_' character in exercise logs, exercise names or exercise acronyms will lead to issues. Avoid using it.
    - All modification processes will cause the modified log to be cached first before being overwritten. The cache file
    can be found in the "ExerciseTerminalLogFiles" directory.


COMMANDS FOR BODY-HEALTH-TERMINAL:
    (1) initialise info for BMI/RFM calcs:              inithealth
    (2) log height and weight:                          logh -l <time in DDMMYYYY-HHmm or HHmm form>, or just "logh" for logging at current time
                                                            NOTE: calculates Body-Mass-Index and the newer Relative-Fat-Mass.
                                                            RFM is an estimate of fat in the body and is therefore intended to be a
                                                            more accurate measure of health:
                                                            "Relative fat mass (RFM) as a new estimator of whole-body fat percentage ─ A cross-sectional study in American adult individuals"; Authors: Orison O. Woolcott & Richard N. Bergman
                                                            Correct Relative Fat Mass depends on sex and age:
                                                                Typical fat mass percentage for women is between 25–31%
                                                                Average body fat mass for men is between 18–24%
    (3) print BodyHealth info:                          bhinfo; prints contents of the selected directory's BodyHealthPersonalInfo.txt
    (4) print all BodyHealth logs in selected file:     alllogsbh
    (5) print BodyHealth logs between specified frame:  querylogbh
    (6) delete BodyHealth log:                          dellogbh
    (7) modify BodyHealth log:                          modlogbh
    (8) sort BodyHealth log:                            sortlogbh; call this function every time a log is added which is prior to the most recent log made