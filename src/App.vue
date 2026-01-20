<script setup>
// 1. Bagian Import (Sudah benar)
import HelloWorld from './components/HelloWorld.vue'
import landingpage from "./components/landingpage.vue"
import loginapp from "./components/loginform.vue"
import dashboard from "./components/dashboard.vue"
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" /> 

    <landingpage />
    <loginapp />
    <dashboard />
  </div>
</template>

<style scoped>
/* Tambahkan CSS jika perlu */
</style>