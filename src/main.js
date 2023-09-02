import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUWLgDngsd6mGoluBvmj3YKPbwiVr_c1w",
  authDomain: "vueauth-fe891.firebaseapp.com",
  projectId: "vueauth-fe891",
  storageBucket: "vueauth-fe891.appspot.com",
  messagingSenderId: "688154874098",
  appId: "1:688154874098:web:4ed736c8040ff61fc9006b"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

