A tool for automatic assignments of students to timeslot.

## Installation

 - From pypi: 
   ```
   pip install assignator
   ```

 - Dev version:
   ```
   git clone https://github.com/jb-leger/assignator
   cd assignator/
   pip install -e .
   ```


## Python module
### `assignments(bmat, order=1, ntry=10)`
```
Make assignments between rows and columns.

    The objective is to have assigments following the following conditions:
     - all association are allowed in bmat,
     - each row is associated with a unique column,
     - each column is associated with a unique row,
     - all rows are associated.

    A classical use case is to assign students to defense schedule.

    Parameters
    ----------
    bmat : array of bool or int
        Binary matrix indicating which assignments are allowed.
    order : int, optional
        Order of the greedy search. Default: 1. A higher oreder can be used for
        small dataset if a solution can not be found with oreder 1.
    ntry : int
        Number of random tries to use to solve the assignments problem.

    Returns
    -------
    AssignmentResult
        Attributes are:
          - ``best_assignments`` contains the assigments that solve the problem
            or aith the higher number of associated rows.
          - ``not_assigned_rows`` contains the indexes of not assignated rows in
            the ``best_assignments`` (empty if the problem is solved)
          - ``problematic_rows`` contains tuples of problematics rows indexes
            and scores. A higher score indicating a row is problematic for the
            assignement problem.
    
```
## Cli usage
```
usage: assignator [-h] [-e TIMESLOT_FILE] [-o OUTPUT_FILE] [-t TIMESLOT_FILE]
                  [-g GROUPS_FILE]
                  INPUT_FILE

A tool to assign students to time slots.

With allowed assignments provided in a csv (e.g. from a survey),
provide a acceptable solution.

positional arguments:
  INPUT_FILE            Input CSV file with headers. Encoding and CSV dialect
                        are autodetected. This file must contain a header. The
                        firsts columns contains a student identifier (e.g. the
                        name or the name and the email address). Following
                        columns are timeslots. the column name must identify
                        the timeslot and therefore must be unique.

optional arguments:
  -h, --help            show this help message and exit
  -e TIMESLOT_FILE, --export-timeslots TIMESLOT_FILE
                        Export in TIMESLOT_FILE all timeslots from the input
                        csv.
  -o OUTPUT_FILE, --output OUTPUT_FILE
                        Output CSV file where to write assignments. The
                        encoding and CSV dialect is the same than the input.
  -t TIMESLOT_FILE, --timeslots TIMESLOT_FILE
                        Restrict allowed timeslots to timeslots provided in
                        TIMESLOT_FILE. All line beginning with a '#' is
                        ignored. See -e to generate a version of this file. If
                        not provided, all timeslots are allowed.
  -g GROUPS_FILE, --groups GROUPS_FILE
                        Students are in groups, and the assignments must be
                        done by groups. The GROUPS_FILE must be a CSV with a
                        header and two columns, the first must be a column
                        identifying the student and must have exactly the same
                        name than one of the columns provided in the
                        INPUT_FILE, and values must corresponds (order or rows
                        doesn't matter), and the second column must be a group
                        identifier (whatever its name). If more than one
                        student answer for a group, the intersection is made
                        to build allowed timeslots for the group.

Workflow example:
  - Give a survey to your students providing a little bit more time
    slots than student number. Export the survey result in CSV.
  - To have a fist allocation, run the command:
      assignatorurvey.csv -o output.csv
    If you have not assigned students, contact all the students
    marked as problematic (not only the not assigned) to extend
    their choices. Once a allocation can be made go to next step.
  - If you have more time slots than student, you can try to choice
    the time slot you want to free.
     1. First, export the timeslot list from the csv:
         assignatorurvey.csv -e timeslots.txt
     2. Edit the timeslots file, adding a '#' in the begining of the
        timeslots you want to free.
     3. Run the command with the timeslots
         prog -t timeslots.txt survey.csv -o output.csv

```
