<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter()
const errMsg = ref()

const register = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!");
      router.push("/")
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email or password was incorrect";
          break;
          case "auth/user-not-found":
          errMsg.value = "Email or password was incorrect";
          break;
          case "auth/wrong-password":
          errMsg.value = "Email or password was incorrect";
          break;
          default :
          errMsg.value = "Email or password was incorrect";
          break;
      }
      alert(errMsg.value);
    })
};


</script>


<template>
  <h1>LogIn with account</h1>
  <div>
    <p><input type="email" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </div>
  <p v-if="errMsg">{{ errMsg }}</p>
</template>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1{
    text-align: center;
  }

  p{
    text-align: center;
  }
</style>
