<template>
    <div class="container center">
        <h4 class="loadingcse">Academic Resources</h4>
        <ul class="collapsible">
            <li v-for="semester in semesters" :key="semester">
                <div class="collapsible-header"><i class="large material-icons">add_circle_outline</i>Semester {{ semester }}</div>
                <div class="collapsible-body">
                    <p v-for="module in modules" :key="module.id" class="module-line">
                        <a v-if="module.semester == semester" :href="module.link">{{ module.id }} {{ module.title }}</a>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'Resources',
    data() {
        return {
            semesters: [1, 2, 3, 4, 5, 6, 7, 8],
            modules: []
        }
    },
    created() {
        db.collection("modules").get().then(snapshot => {
            snapshot.forEach(doc => {
                let module = doc.data()
                module.id = doc.id
                module.link = "https://cse16.tk"
                this.modules.push(module)
            })
            console.log(this.modules)
        })
    },
    mounted() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {
            
        });
    }
}
</script>

<style>
.module-line {
    text-align: left;
}
.module-line a:hover {
    text-decoration: underline;
}
</style>
