<template>
  <div id="Items">
    <h3>All items</h3>
    <p>All todos</p>
  <div v-for="todo in Todos" v-bind:key="todo.id">
      <article>{{todo.item}}</article>
  </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      Todos: [],
    }
  },
  methods: {},
  created () {
    this.$http.get('https://todo-app-a7a17.firebaseio.com/todoList.json').then(function(data){
      this.Todos = data.body;
      console.log("DATA GET");
      console.log(data);
    })
  },
};
</script>

<style scoped>
#Items {
  text-align: center;
  padding-top: 50px;
}
</style>
