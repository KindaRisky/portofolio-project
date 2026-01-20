<script setup>
import landingpage from "./components/landingpage.vue"
import loginapp from "./components/loginform.vue"
import dashboard from "./components/dashboard.vue"
</script>

<template>
  <div>
    <HelloWorld msg="Portofolio Saya" />

    <landingpage />
    <loginapp />
    <dashboard />
  </div>
</template>

<style>
/* Reset margin dan padding bawaan browser */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Mencegah scroll ke samping */
}

#app {
  max-width: 100% !important; /* Menghilangkan batasan lebar 1280px */
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw;
}
</style>