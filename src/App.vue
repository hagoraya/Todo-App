<template>
  <div id="background">
    <div id="container">
      <app-Home></app-Home>
      <app-NavBar id="nav"></app-NavBar>
      <app-showItems id="items"></app-showItems>
    </div>
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
    return {};
  },
  methods: {}
};
</script>

<style >

body{
  height: 100%;
}


#background{
    background: linear-gradient(to right, #7F7FD5, #86A8E7,#91EAE4);
    background-repeat: no-repeat;
    background-size: auto;
    min-width: 100vh;
    display: flex;
}


#container {
  text-align: center;
  width: 60%;
  height: auto;
  margin: auto;
  padding: 10px;
}

#nav {
  width: 45%;
  height: 200px;
  border: 2px solid;
  background: whitesmoke;
  float: left;
}

#items {
  margin-left: 50%;
  height: auto;
  border: 2px solid;
  background: whitesmoke;

}
</style>
