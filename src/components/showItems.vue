<template>
  <div id="Items">
    <div v-for="todo in Todos" v-bind:key="todo.id">
      <div id="ss">
        <p id="single-todo-div">{{todo.item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import { bus } from "../main";

export default {
  props: {
    items: {
      type: Number
    }
  },
  data() {
    return {
      Todos: []
    };
  },
  methods: {
    updateList: function() {
      this.$http
        .get("https://todo-app-a7a17.firebaseio.com/todoList.json")
        .then(function(data) {
          this.Todos = data.body;
          console.log("Updating list!");
        });
    }
  },
  created() {
    this.updateList(this.val);
    bus.$on("itemAdded", () => {
      console.log("Event caught");
      this.updateList();
    });
  },

  watch: {
    getNewData() {
      this.items = this.getNewData;
    }
  }
};
</script>

<style scoped>


#Items {
  padding: 1px;

}


#single-todo-div{
  height: 60%;
  background: whitesmoke;
  border: 1px black;
  box-shadow: 0 0 10px #2c3e50;
  border-radius: 5px;



}



</style>
