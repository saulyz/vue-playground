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
    width: 300px;
  }
  .new-item input {
    padding: 5px 10px;
    width: 100%;
    font-size: 14px;
  }
</style>
