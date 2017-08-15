<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png" width="50" height="50">
    </router-link>
    <div>
       <router-link to="/child-parent-counters">Child-Parent</router-link> |
       <router-link to="/todo-list">Todo application</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
