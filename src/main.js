// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = null

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(user => {
    if (user && !user.email.includes('16@cse.mrt.ac.lk')) {
        firebase.auth().signOut()
    }
    if(!app) {
        new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        })
    }
    if (user) {
        if (user.email.includes('16@cse.mrt.ac.lk')) {        
            M.toast({html: 'Signed in successfully!', classes: 'teal', displayLength: 1000});
        } else {
            M.toast({html: 'Signin failed!', classes: 'red', displayLength: 1000});
        }
    } else {
        M.toast({html: 'Signed out successfully!', classes: 'teal', displayLength: 1000});
    }
})
