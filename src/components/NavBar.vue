<template>
  <div>
    <div id="form-div">
      <b-form id="form">
        <b-form-group id="form-table">
          <b-form-input required placeholder="Your new TODO" v-model="TodoItem.item"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" v-on:click="addItem">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import { bus } from "../main";

export default {
  data() {
    return {
      showAdd: false,
      added: 0,
      TodoItem: {
        item: "",
        completed: false
      }
    };
  },
  methods: {
    showAddButton: function() {
      this.showAdd = !this.showAdd;
    },

    addItem: function() {

      //console.log(this.TodoItem.item.length);
      if(this.TodoItem.item.length > 0){ //Only non-empty strings
        this.$http
        .post(
          "https://todo-app-a7a17.firebaseio.com/todoList.json",
          this.TodoItem
        )
        .then(function(data) {
          console.log(data);
        });

      //To reset input back to empty
      this.TodoItem.item = "";
      this.added = this.added + 1;
      bus.$emit('itemAdded');
      }
      

    }
  }
};
</script>

<style scoped>
#form {
  padding: 5px;
}

#form-div {
  text-align: center;
}
</style>
