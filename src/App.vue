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

<style scoped >

#background{
    background: linear-gradient(to right, #7F7FD5, #86A8E7,#91EAE4);
    background-repeat: no-repeat;
    height: 100%;
}


#container {
  text-align: center;
  width: 60%;
  height: auto;
  margin: auto;
  padding: 10px;
}

#nav {
  position: absolute;
  top: 10%;
  left: 35%;
  width: 30%;
  height: auto;
  border: 2px;
  border-radius: 5px;
  background: whitesmoke;
  box-shadow: 0 0 10px #2c3e50;

  float: left;
}

#items {
  position: absolute;
  top: 23%;
  left: 35%;
  width: 30%;
  height: auto;
  border: 2px ;
 /* box-shadow: 0 0 10px #2c3e50; */
  border-radius: 5px;


}
</style>
