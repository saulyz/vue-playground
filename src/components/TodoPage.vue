<template>
  <div class="todo-page">
    <p>
      Todo object is held in this page component<br/>
      TodoAddItem is passing values to parent via callback function
    </p>
    <h3>Todo list tasks</h3>
      <ul>
        <li v-for="(todoItem, index) in todoList">
          <todo-item :item="todoItem" :index="index"></todo-item>
        </li>
      </ul>
      <todo-add-item :callback="setNewTask"></todo-add-item>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import TodoAddItem from '@/components/TodoAddItem'

export default {
  name: 'TodoPage',
  components: {TodoItem, TodoAddItem},
  data () {
    return {
      todoList: [
        {task: 'Do stuff with VueJS', completed: true},
        {task: 'Write nice code', completed: false}
      ]
    }
  },
  methods: {
    setNewTask (text) {
      this.todoList.push({task: text})
      console.log('new task was submitted:', text)
    }
  }
}
</script>

<style>
  ul {
    margin: 20px 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
  }
</style>

