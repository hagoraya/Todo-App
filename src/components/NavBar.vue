<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs align="center">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Completed</b-nav-item>
          <b-nav-item v-on:click="showAddButton">Add Item</b-nav-item>

          <b-card-body id="addButtonWindow" v-show="showAdd" class="text-center" align="center">
              <b-form-input id="todoInput" v-model="TodoItem.item" placeholder="I want to do..."></b-form-input>
            <b-button id="addButton" v-on:click="addItem" variant="primary">Add</b-button>
            <p>{{TodoItem.item}}</p>
          </b-card-body>
        </b-nav>
      </b-card-header>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      showAdd: false,
      TodoItem:{
          item: '',
          completed: false,
      },
    };
  },
  methods: {
    showAddButton: function() {
      this.showAdd = !this.showAdd;
    },

    addItem: function() {
        this.$http.post('https://todo-app-a7a17.firebaseio.com/todoList.json', this.TodoItem).then(function(data){
            console.log("Data SENT")
            console.log(data);
        });

        //To reset input back to empty
        this.TodoItem.item = '';

    }
  }
};
</script>

<style scoped>
.addButtonWindow {
  padding: 50px;
}
.addButton{
    padding-top: 50px;
    
}

.todoInput{
    padding-bottom: 50px;
}

</style>
