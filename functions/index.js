// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Initialize database
const db = admin.firestore();

// https://us-central1-cse16-firestore.cloudfunctions.net/updateStudentRank
exports.updateStudentRank = functions.https
    .onRequest(async (req, res) => {
        students = [];
        const val = await db.collection('students').orderBy('cgpa', 'desc').get().then(snapshot => {
            var i = 1;
            snapshot.forEach(doc => {
                students.push(doc.data());
                db.collection('students').doc(doc.id).set({crank: i}, {merge: true});
                i++;
            });
        });
        res.redirect(200, "https://cse16.tk");
    });

exports.updateStudentGPA = functions.firestore
    .document('students/{studentId}')
    .onUpdate((change, context) => {
        // Get an objects representing the document
        const oldStudent = change.before.data();
        const newStudent = change.after.data();

        // We'll only update if the results has changed.
        // This is crucial to prevent infinite loops.
        if (oldStudent.results == newStudent.results) return null;

        var gradePoints = {
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
            "N": null,
            "W": null
        }
        var credits = {
            "CE1022": 2.0,
            "CE1822": 2.0,
            "CS1032": 3.0,
            "CS1962": 1.5,
            "CS2012": 3.0,
            "CS2022": 2.5,
            "CS2032": 3.0,
            "CS2042": 2.5,
            "CS2052": 3.0,
            "CS2062": 3.0,
            "CS2150": 2.0,
            "CS2202": 1.0,
            "CS2212": 1.0,
            "CS2222": 3.0,
            "CS2242": 3.0,
            "CS2952": 1.5,
            "CS2963": 1.0,
            "CS2972": 1.0,
            "CS2982": 1.0,
            "CS3022": 3.0,
            "CS3032": 3.0,
            "CS3042": 3.0,
            "CS3052": 2.0,
            "CS3062": 2.0,
            "CS3202": 2.0,
            "CS3212": 3.0,
            "CS3242": 3.0,
            "CS3252": 3.0,
            "CS3262": 3.0,
            "CS3272": 3.0,
            "CS3282": 2.0,
            "CS3322": 2.0,
            "CS3332": 3.0,
            "CS3412": 3.0,
            "CS3512": 3.0,
            "CS3612": 3.0,
            "CS3712": 3.0,
            "CS3953": 1.5,
            "CS3992": 6.0,
            "DE2251": 2.0,
            "DE2371": 2.0,
            "DE2460": 2.0,
            "DE2550": 2.0,
            "EE1012": 2.0,
            "EE2093": 2.0,
            "EL1012": 1.0,
            "EN1012": 2.0,
            "EN2022": 2.5,
            "EN2062": 2.5,
            "MA1013": 3.0,
            "MA1032": 3.0,
            "MA2033": 2.0,
            "MA2063": 2.0,
            "MA2073": 2.0,
            "MA3013": 3.0,
            "ME1032": 2.0,
            "ME1802": 2.5,
            "ME1822": 2.0,
            "MN1012": 1.0,
            "MN3042": 3.0,
            "MT1022": 2.0
        }
        var sgpa = {};
        var cgpa = 0;

        var sumTotalPoints = 0;
        var sumTotalCredits = 0;
        Object.keys(newStudent.results).forEach(semester => {
            var totalPoints = 0;
            var totalCredits = 0;
            Object.keys(newStudent.results[semester]).forEach(moduleCode => {
                let gp = gradePoints[newStudent.results[semester][moduleCode]];
                let cr = credits[moduleCode];
                totalPoints = totalPoints + gp*cr;
                totalCredits = totalCredits + cr;
            });
            sgpa[semester] = totalPoints/totalCredits;
            sumTotalPoints = sumTotalPoints + totalPoints;
            sumTotalCredits = sumTotalCredits + totalCredits;
        });
        cgpa = sumTotalPoints/sumTotalCredits;

        return change.after.ref.set({"sgpa": sgpa, "cgpa": cgpa}, {merge: true});;
    });