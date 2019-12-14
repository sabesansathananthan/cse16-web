import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

students_ref = db.collection(u'students')
modules_ref = db.collection(u'modules').order_by(u'semester')

for module in modules_ref.stream():
  print(str(module.get('semester')) + '\t' + module.id + '\t' + str(module.get('gpa')) + '\t' + str(module.get('credits')) + '\t' + module.get('title'))
