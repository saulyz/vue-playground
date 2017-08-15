<template>
  <div class="todo-item">
    <small>{{number}}.</small>
    <input type="checkbox" :id="number" :disabled="editMode" v-model="item.completed">
    <input type="text" class="edit" v-if="editMode" v-model="item.task" @keyup.enter="disableEdit">
    <label :for="number" v-else="editMode" :class="{'completed': item.completed}" @click="enableEdit">{{item.task}}</label>
    - <span @click="remove"><icon name="trash"></icon></span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item', 'index', 'callback'],

  data () {
    return {
      number: null,
      editMode: false
    }
  },

  methods: {
    remove () {
      this.callback(this.index)
    },
    enableEdit () {
      if (this.item.completed) {
        console.log('Cannot edit completed item')
      } else {
        this.editMode = true
        console.log('Edit was enabled')
      }
    },
    disableEdit () {
      console.log('Edit was disabled')
      this.editMode = false
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
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .todo-item input[type="checkbox"]{
    margin-right: 5px;
  }

  .todo-item .edit:focus {
    outline: 0;
  }

  .todo-item .edit {
    border: 1px solid #33aa33;
  }

  .todo-item .completed {
    text-decoration: line-through;
    color: #999;
  }

  .todo-item .fa-icon {
    color: #666;
  }
</style>
