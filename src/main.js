import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router'
import store from './store/store'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import './assets/css/main.css'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueResource);

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbBOab-0bCsOjteXVwbocwWSpyzMIIoWw",
    authDomain: "my-books-pj-819ba.firebaseapp.com",
    databaseURL: "https://my-books-pj-819ba.firebaseio.com",
    projectId: "my-books-pj-819ba",
    storageBucket: "my-books-pj-819ba.appspot.com",
    messagingSenderId: "1090960851385",
    appId: "1:1090960851385:web:05e568b88a8b96f0c3b668",
    measurementId: "G-HJ606HQ75T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
