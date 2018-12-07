import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)


// initial set up to firebase
const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    projectId: process.env.VUE_APP_PROJECT_ID,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
}

firebase.initializeApp(config)

//init the database
export const db = firebase.firestore()



