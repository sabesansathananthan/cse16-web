import time
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

start = time.time()

# Use the application default credentials
cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

students_ref = db.collection(u'students')
modules_ref = db.collection(u'modules')

credits = {}
for module in modules_ref.stream():
  credits[module.id] = module.get('credits')

grade_points = {
  "A+": 4.2,
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.5,
  "D": 1.0,
  "F": 0.0,
  "I-WE": 0.0,
  "I-CA": 0.0,
  "N": 0.0,
  "W": 0.0
}

i = 0
for student in students_ref.stream():
  total_semester_points = 0
  total_semester_credits = 0
  for semester in student.get('results'):
    semester_points = 0
    semester_credits = 0
    for module in student.get('results').get(semester):
      semester_points += credits[module] * grade_points[student.get('results').get(semester).get(module)]
      semester_credits += credits[module]
    sgpa = 0
    if (semester_credits):
      sgpa = semester_points / semester_credits
    students_ref.document(student.get('email')).update({
      u'sgpa.%s' % semester: float('%.4f' % sgpa)
    })
    total_semester_points += semester_points
    total_semester_credits += semester_credits
  cgpa = total_semester_points/total_semester_credits
  students_ref.document(student.get('email')).update({
    u'cgpa': float('%.4f' % cgpa)
  })
  i += 1
  print('%3i %s: %.4f' %(i, student.get('id'), cgpa))


stop = time.time()

print("updated", i, "records in", stop - start, "seconds")

