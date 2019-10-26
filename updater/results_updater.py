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

# Open results csv file
fo = open("CS3512.csv", "r", encoding="utf-8-sig")                                                                      # change here..
lines = fo.readlines()
fo.close()

# Update results of the module
i = 0
for line in lines:
    email, student_id, module_code, grade_point = line.strip().split(",")
    students_ref.document(email).update({
        u'results.semester5.CS3512': grade_point                                                                        # change here..
    })
    print("updated", student_id)
    i += 1

stop = time.time()

print("updated", i, "records in", stop - start, "seconds")