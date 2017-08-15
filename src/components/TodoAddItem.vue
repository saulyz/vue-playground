<template>
  <div class="new-item">
    <icon class="new-task-input-icon" name="plus-circle"></icon>
    <input
      type="text"
      v-model="text"
      placeholder="Input new task and press Enter"
      @keyup.enter="submitItem">
  </div>
</template>

<script>
export default {
  name: 'TodoAddItem',
  props: ['callback'],  // passed callback func
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submitItem () {
      this.callback(this.text)
      this.text = ''
    }
  }
}
</script>

<style>
  .new-item {
    margin: 0 auto;
    width: 350px;
  }

  .new-item input:focus {
    outline: 0;
    border-color: #33aa33;
  }

  .new-item input {
    width: calc(100% - 50px);
    border: 2px solid #ddd;
  }

  .new-task-input-icon {
    height: 20px;
    color: #aaa;
  }
</style>
