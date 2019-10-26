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
students = students_ref.stream()

crank_list = []
srank_list = []
for student in students:
  id = student.id
  cgpa = float(student.get('cgpa'))
  sgpa = student.get('sgpa')
  crank_list.append((id, cgpa))
  srank_list.append((id, sgpa))

crank_list.sort(key=lambda tup: tup[1], reverse=True)
i = 1
for x in crank_list:
  students_ref.document(x[0]).update({
    u'crank': i
  })
  print('%3i %s' % (i, x[0]))
  i += 1

for n in range(1, 6):
  temp_srank_list = []
  for z in srank_list:
    temp_srank_list.append((z[0], float(z[1].get('semester%i' %n))))
  temp_srank_list.sort(key=lambda tup: tup[1], reverse=True)
  j = 1
  for y in temp_srank_list:
    students_ref.document(y[0]).update({
      'srank.semester%i'%n: j
    })
    j += 1
  print('semester%i ranks updated'%n)

