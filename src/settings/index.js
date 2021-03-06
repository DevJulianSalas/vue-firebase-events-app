import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
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


//auto import components
const requireComponents = require.context('@/components', true, /\w+.+\.(vue|js)$/)

requireComponents.keys().forEach(fileName => {
  const componentConfig = requireComponents(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  const subComponentName = componentName.replace(/^[a-z]+\/(.*)/, '$1')
  Vue.component(subComponentName, componentConfig.default || componentConfig)
})




