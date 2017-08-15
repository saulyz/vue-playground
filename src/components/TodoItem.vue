<template>
  <div class="todo-item">
    <small>{{number}}.</small>
    <input type="checkbox" :id="number" v-model="item.completed">
    <label :for="number" :class="{'completed': item.completed}">{{item.task}}</label>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item', 'index'],

  data () {
    return {
      number: null
    }
  },

  mounted () {
    this.number = this.index + 1
  }
}
</script>


<style>
  .todo-item {
    display: inline-block;
  }

  .todo-item input[type="checkbox"]{
    margin-right: 5px;
  }

  .todo-item label {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .todo-item .completed {
    text-decoration: line-through;
    color: #999;
  }
</style>
