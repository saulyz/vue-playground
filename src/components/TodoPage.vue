<template>
  <div class="todo-page">
    <p>
      Todo object is held in this page component<br/>
      Child components are passing values to parent via callback functions
    </p>
    <h3>Todo list tasks</h3>
      <ul>
        <li v-for="(todoItem, index) in todoList">
          <todo-item :item="todoItem" :index="index" :callback="removeTask"></todo-item>
        </li>
      </ul>
      <todo-add-item :callback="setNewTask"></todo-add-item>
      <hr size="1" class="separator-line">
      <small class="note">Task list is stored in this page component, so if you navigate away, all tasks are lost</small>
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
      this.todoList.push({task: text, completed: false})
      console.log('new task was submitted:', text)
    },
    removeTask (index) {
      console.log('remove item No:', index)
      this.todoList.splice(index, 1)
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
    height: 30px;
  }

  input[type="text"] {
    padding: 5px 10px;
    font-size: 14px;
  }

  .fa-icon {
    vertical-align: bottom;
    margin-bottom: 4px;
  }

  .separator-line {
    margin: 30px auto;
    width: 75%;
    border: 0;
    border-top: 1px solid #ccc;
  }

  .note{
    display: block;
    margin: 15px 0;
    color: #999;
  }
</style>

