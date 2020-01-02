<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs align="center">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Completed</b-nav-item>
          <b-nav-item v-on:click="showAddButton">Add Item</b-nav-item>

          <b-card-body v-show="showAdd" class="text-center">
            <b-card-text>Add a new ToDo item</b-card-text>

            <b-button variant="primary">Add</b-button>
          </b-card-body>
        </b-nav>
      </b-card-header>
    </b-card>
  </div>
</template>

<script>
      /* eslint-disable no-console */

export default {
  data () {
      return{
           showAdd: false
      }
     
  },
  methods: {
    showAddButton: function() {
      console.log("Adding new item!:" + this.showAdd);
      this.showAdd = !this.showAdd;
    }
  }
};
</script>

<style scoped></style>
