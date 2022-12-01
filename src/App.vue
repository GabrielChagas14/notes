<script setup>
/* 
  imports
*/
import NavBar from './components/layout/NavBar.vue';
</script>
<template>
  <nav-bar></nav-bar>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="stats">Stats</RouterLink> -->
  <RouterView />
</template>
<style>
@import 'bulma/css/bulma.min.css';
</style>
