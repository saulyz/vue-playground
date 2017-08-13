<template>
  <div class="counters-page">
    <h1>Child Counters receiving props and informing parents when Max</h1>
    <div class="counter-row" v-bind:class="{'is-max': isAtMaxVal}">
      <p>
        Set a max value
        <input v-on:keyup.enter="submit" v-model.number="curval">
        <Counter v-model="maxval" :maxval=maxval v-on:maximum="reachedMax" v-on:default="isDefault"></Counter>
      </p>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  name: 'CountersPage',
  components: {Counter},
  data () {
    return {
      curval: null,
      maxval: null,
      isAtMaxVal: false
    }
  },
  methods: {
    submit () {
      if (!isNaN(this.curval)) {
        console.log('submitting ', this.curval)
        this.maxval = this.curval
        this.curval = ''
      } else {
        console.log('sorry - Not a number')
      }
    },
    reachedMax () {
      this.isAtMaxVal = true
    },
    isDefault () {
      this.isAtMaxVal = false
    }
  }
}
</script>

<style lang="css">
  input {
    width: 50px;
  }

  .counter-row {
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .is-max {
    border: 1px solid #ffcccc;
  }
</style>
