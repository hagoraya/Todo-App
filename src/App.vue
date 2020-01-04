<template>
  <div id="app">
    <app-Home></app-Home>
    <app-NavBar></app-NavBar>
    <app-showItems></app-showItems>
  </div>
</template>

<script>
/* eslint-disable no-console */

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ShowItems from "./components/showItems";

export default {
  components: {
    "app-Home": Home,
    "app-NavBar": NavBar,
    "app-showItems": ShowItems
  },
  data() {
    return{    }
  },
  methods: {
    
  }
};
</script>

<style>

</style>
