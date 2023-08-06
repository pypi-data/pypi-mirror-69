# Installation

##  Test Repo
This will be updated with the "formal" pypi repo eventually, but for now it's located here.

    python3 -m pip install --upgrade --index-url https://test.pypi.org/simple/ canvas-lms-api

## Formal Repo
This will be updated with the "formal" pypi repo eventually, but for now it's located here.

    python3 -m pip install --upgrade canvas-lms-api

Alternatively, you can download the source code and pip install from that:

    git clone https://github.gatech.edu/omscs-ta/canvas-lms-api
    cd canvas-lms-api
    pip install .

# Usage:
## Get Canvas Token
Found here: Canvas > Account > Settings > Approved Integrations: > New Access Token.

## Get Course Number
There are really 2 ways. 
1. Use this tool to find all the courses and then use the number below (course is optional so you can set it later)
````
from canvas_lms_api import Canvas
grader = Canvas(base="https://gatech.instructure.com", token=YOUR TOKEN)
grader.GetCourses()
````
2. Login to canvas
    * Go to your course
    * eg: https://gatech.instructure.com/courses/46234
    * The value for canvas_course is "46234"

## Get Assignments Example

````
from canvas_lms_api import Canvas
grader = Canvas(base="https://gatech.instructure.com", token=YOUR TOKEN, course=Your Course Number)
grader.GetAssignments()
````

## Get Course Users Example
````
from canvas_lms_api import Canvas
grader = Canvas(base="https://gatech.instructure.com", token=YOUR TOKEN, course=Your Course Number)
grader.GetCourseUsers()
````

## Submit Grades Example
````
from canvas_lms_api import Canvas
grader = Canvas(base="https://gatech.instructure.com", token=YOUR TOKEN, course=Your Course Number)
# Find your assignment id number see Get Assignments Example
assignment_id = ""
# Find your student id number see Get Course Users Example
student_id = ""

# Set score and comment
score = "75"
comment = "The student failed to complete the assignment\nAnd they got thse points wrong\n(-10) for poor guessing"
grader.SubmitGrade(assignment_id, student_id, score, comment, visibility=False)
````

## Get StudentID by sortable name
````
from canvas_lms_api import Canvas
grader = Canvas(base="https://gatech.instructure.com", token=YOUR TOKEN, course=Your Course Number)
# If you have downloaded all submissions from canvas, the students files should be named with their sortable name in the string
# For your use case you'll need to parse them, but then when you have them you can get the student id from there. This will allow you to use the submit grades function.
sortable_name = "deanjimmy"
grader.GetIDBySortableName(sortable_name)
````