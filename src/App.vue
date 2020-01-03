<template>
  <div id="app">
    <app-Home></app-Home>
    <app-NavBar v-on:ItemAdded="updateList($event)"></app-NavBar>
    <app-showItems v-bind:items="items"></app-showItems>
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
    return{
      items: 0,
    }
  },
  methods: {
    updateList: function(){
      this.items = this.items + 1;
      //console.log("Items:" + this.items)
    }
  }
};
</script>

<style></style>
