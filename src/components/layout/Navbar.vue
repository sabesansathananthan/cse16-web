<template>
    <div>
        <div class="navbar-fixed">
            <nav class="blue accent-4">
                <div class="nav-wrapper">
                    <router-link :to="{ name: 'Home'}" class="brand-logo">CSE 16<span class="new badge" data-badge-caption="beta"></span></router-link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link :to="{ name: 'Home'}">Home</router-link></li>
                        <li><router-link :to="{ name: 'Blogs'}">Blogs</router-link></li>
                        <li v-if="user"><router-link :to="{ name: 'Students'}">Students</router-link></li>
                        <li v-if="user"><router-link :to="{ name: 'Results' }">Results</router-link></li>
                        <li v-if="!user"><a @click="signin()">Sign in</a></li>
                        <li v-if="user"><a @click="signout()">Sign out</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <ul id="mobile-demo" class="sidenav">
            <li><router-link :to="{ name: 'Home' }" class="sidenav-close">Home</router-link></li>
            <li><router-link :to="{ name: 'Blogs' }" class="sidenav-close">Blogs</router-link></li>            
            <li v-if="user"><router-link :to="{ name: 'Students' }" class="sidenav-close">Students</router-link></li>
            <li v-if="user"><router-link :to="{ name: 'Results' }" class="sidenav-close">Results</router-link></li>
            <li><div class="divider"></div></li>
            <li v-if="!user"><a @click="signin()" class="sidenav-close">Sign in</a></li>
            <li v-if="user"><a @click="signout()" class="sidenav-close">Sign out</a></li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data() {
        return {
            user: null,
            admin: null
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
        },
        signout() {
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Home'})
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.user = user
                if (user.email == 'binod.16@cse.mrt.ac.lk') {
                    this.admin = user
                }
            } else {
                this.user = null
                this.admin = null
            }
        })
    },
    mounted() {
        var elems = document.querySelectorAll('.sidenav')
        var instances = M.Sidenav.init(elems, {
            edge: 'left',
            draggable: true
        })
    }
}
</script>

<style>
nav {
    padding: 0 20px;
}
.router-link-exact-active {
    background-color: #2979ff;
}
.brand-logo {
    background-color: #2962ff;
}
</style>

