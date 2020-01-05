<template>
  <div id="Items">
    <h3>All Todos</h3>
    <div v-for="todo in Todos" v-bind:key="todo.id">
      <article>{{todo.item}}</article>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import {bus} from '../main';

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
    bus.$on('itemAdded', () => {
      console.log("Event caught");
      this.updateList();
    })
  },

  watch:{
    getNewData(){
      this.items = this.getNewData;
    }
  }

};
</script>

<style scoped>
#Items {
  text-align: center;
}
</style>
