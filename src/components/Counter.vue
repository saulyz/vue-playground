<template>
  <div class="counter">
    <button class="button" @click="increment" v-bind:class="{max: checkMaxVal}">Current: {{cnt}}, Max: {{maxval}}</button>
  </div>
</template>

<script>
export default {
  name: 'counter-button',
  props: {
    maxval: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      cnt: 0
    }
  },
  methods: {
    increment () {
      if (this.cnt < this.maxval) {
        this.cnt += 1
      }
      return this.cnt
    }
  },
  computed: {
    checkMaxVal () {
      if (this.cnt === this.maxval) {
        this.$emit('maximum')
        return true
      } else {
        this.$emit('default')
        return false
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .counter {
    display: inline-block;
    padding: 0 15px;
  }

  .button {
    border: 0;
    border-radius: 3px;
  }

  .button:focus {
    outline: 0;
  }

  .max {
    background: lightcoral;
  }
</style>
