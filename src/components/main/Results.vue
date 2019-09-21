<template>
    <div class="row">
        <div  v-if="!results && !moduleTitles">
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        </div>
        <div class="col s12 l12">
            <ul class="tabs">
                <li class="col l2"></li>
                <li class="tab col s1 l1"><a href="#sem1">1</a></li>
                <li class="tab col s1 l1"><a href="#sem2">2</a></li>
                <li class="tab col s1 l1"><a href="#sem3">3</a></li>
                <li class="tab col s1 l1"><a href="#sem4">4</a></li>    
                <li class="tab col s1 l1"><a href="#sem5">5</a></li>
                <li class="tab col s1 l1"><a href="#sem6">6</a></li>
                <li class="tab col s1 l1"><a href="#sem7">7</a></li>
                <li class="tab col s1 l1"><a href="#sem8">8</a></li>
                <li class="col l2"></li>
            </ul>
        </div>
        <div class="results" :id="'sem' + semester" v-for="semester in semesters" :key="semester">
            <div class="col s12" v-if="results && moduleTitles">
                <ul>
                    <li>Semester: {{ semester }}</li>
                    <li>S-GPA: {{ sgpa['semester'.concat(semester)] }}</li>
                    <li>S-Rank: {{ srank['semester'.concat(semester)] }}</li>
                </ul>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>Module Code</th>
                            <th>Module Title</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(grade, moduleCode) in results['semester'.concat(semester)]" :key="moduleCode" >
                            <td>{{ moduleCode }}</td>
                            <td>{{ moduleTitles[moduleCode]}}</td>
                            <td>{{ grade }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Results',
    data() {
        return {
            email: null,
            results: null,
            sgpa: null,
            srank: null,
            moduleTitles: null,
            semesters: [1, 2, 3, 4, 5, 6, 7, 8]  // change here..
        }
    },
    created() {
        this.email = firebase.auth().currentUser.email
        db.collection("students").doc(this.email).get().then(doc => {
            this.results = doc.data().results
            this.sgpa = doc.data().sgpa
            this.srank = doc.data().srank
        })
        db.collection("modules").get().then(snapshot => {
            this.moduleTitles = {}
            snapshot.forEach(doc => {
                this.moduleTitles[doc.id] = doc.data().title
            })
        })
    },
    mounted() {
        var el = document.querySelector('.tabs');
        var instance = M.Tabs.init(el, {
            swipeable: true
        });
        instance.select('sem5');
    }
}
</script>

<style>
/*Black color to the text*/
.tabs .tab a{
    color: #000;
} 
/*Text color on hover*/
.tabs .tab a:hover {
    background-color: #fff;
    color: #000;
} 
/*Background and text color when a tab is active*/
.tabs .tab a.active {
    background-color: #fff;
    color: #000;
} 
/*Background and text color when a tab is active and focus*/
.tabs .tab a:focus.active {
    background-color: #fff;
    color: #000;
} 
/*Color of underline*/
.tabs .indicator {
    background-color: #3f51b5;
} 
/*Height of tab content*/
.tabs-content {
    min-height: 750px;
}
.results {
    padding: 0px 400px;
}
@media only screen and (max-width : 1024px) {
    .results {
        padding: 0;
    }
}
</style>
