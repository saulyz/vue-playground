<template>
  <div class="counters-page">
    <p>Child counter is receiving props and emiting events to notice Parent when Max value is reached</p>
    <div class="counter-row" v-bind:class="{'is-max': isAtMaxVal}">
      <p>
        Set a max value
        <input v-on:keyup.enter="submit" v-model.number="curval">
        <Counter v-model="maxval" :maxval=maxval v-on:maximum="reachedMax" v-on:default="isDefault"></Counter>
      </p>
    </div>
    <small class="note">Keep clicking button till the max, then give a bigger max</small>
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
  .note{
    display: block;
    margin: 15px 0;
    color: #999;
  }
</style>
