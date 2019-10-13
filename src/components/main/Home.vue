<template>
    <div class="row">
        <h3 class="home-title">
            The official web site of 2016 batch of Computer Science and Engineering of University of Moratuwa    
        </h3>
        <div class="home-button center">
                <button class="waves-effect waves-light blue btn" v-if="!user" @click="signin()">Sign in</button>
                <router-link class="waves-effect waves-light blue btn" :to="{ name: 'Results' }" v-if="user">View Results</router-link>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Home',
    data() {
        return {
            user: null
        }
    },
     methods: {
        signin() {
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(result => {
                if (result.credential) {
                    var token = result.credential.accessToken
                }
                var user = result.user
            }).catch(error => {
                var errorCode = error.code
                var errorMessage = error.message
                var email = error.email
                var credential = error.credential
            })
        }
    },
    created() {
        const user = firebase.auth().currentUser
        if(user.email.includes('16@cse.mrt.ac.lk')) {
            this.user = user
        } else {
            this.user = null
        }
    }
}
</script>

<style>
.home-title {
    text-align: center;
}
.home-button {
    padding: 50px;
}
</style>
