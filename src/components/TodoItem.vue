<template>
  <div class="todo-item">
    {{item.task}}
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item']
}
</script>


<style>
  .todo-item {
    display: inline-block;
  }
</style>
