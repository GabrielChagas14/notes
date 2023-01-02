<script setup>
/* 
  imports
*/
import { onMounted } from "vue";
import { useStoreAuth } from "./stores/storeAuth.js"
import NavBar from "./components/layout/NavBar.vue";

/* 
  load notes
*/
const storeAuth = useStoreAuth()
onMounted(()=>{
  storeAuth.init()
})
</script>
<template>
  <nav-bar></nav-bar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>
<style>
@import "bulma/css/bulma.min.css";
</style>
