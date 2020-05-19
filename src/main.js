import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

var firebaseConfig = {
    apiKey: "AIzaSyBRqreWtTEw1kT7iyRpTqkrsALP8ncmIhE",
    authDomain: "boutiqueauthentification.firebaseapp.com",
    databaseURL: "https://boutiqueauthentification.firebaseio.com",
    projectId: "boutiqueauthentification",
    storageBucket: "boutiqueauthentification.appspot.com",
    messagingSenderId: "859820151366",
    appId: "1:859820151366:web:32ef100da920e57fe1b047"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
