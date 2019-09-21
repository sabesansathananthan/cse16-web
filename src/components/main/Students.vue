<template>
    <div class="container students">
        <div v-if="allStudents.length < 128">
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        </div>
        <div class="search-bar">
            <form>
                <div class="input-field">
                    <i class="material-icons prefix">search</i>
                    <input id="search" type="text" class="validate" @keyup="filterStudents()" v-model="studentData" placeholder="Search by id or name">
                </div>
            </form>
        </div>
        <table class="highlight responsive-table">
            <thead>
                <tr>
                    <th>Index No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Field</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.mobile }}</td>
                    <td>{{ student.field }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'Students',
    data() {
        return {
            students: [],
            allStudents: [],
            studentData: null
        }
    },
    methods: {
        filterStudents() {
            if (this.studentData) {
                let studentListById = this.allStudents.filter(student => {
                    return student.id.toLowerCase().includes(this.studentData.toLowerCase())
                })
                let studentListLeft = this.allStudents.filter(student => {
                    return !studentListById.includes(student)
                })
                let studentListByName = studentListLeft.filter(student => {
                    return student.name.toLowerCase().includes(this.studentData.toLowerCase())
                })
                this.students = studentListById.concat(studentListByName)
            } else {
                this.students = this.allStudents
            }
        }
    }, 
    created() {
        db.collection("students").orderBy("id").onSnapshot(snapshot => {
            snapshot.forEach(doc => {
                let student = doc.data()
                this.students.push(student)
            })
        })
        this.allStudents = this.students
    },
}

</script>

<style>
.search-bar {
    padding: 30px 0 0 0;
}
</style>
