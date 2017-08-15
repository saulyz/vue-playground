<template>
  <div class="new-item">
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
    width: 200px;
  }
  .new-item input {
    width: 100%;
  }
</style>
