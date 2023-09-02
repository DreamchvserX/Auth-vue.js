<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
 auth = getAuth();
 onAuthStateChanged(auth, (user) => {
  if(user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
 });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
}
</script>

<template>
  <div>
    
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/signin"> SignIn </router-link> |
      <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-align: center;
  }
</style>