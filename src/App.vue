<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Vuex></Vuex>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vuex from './components/Vuex2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    Vuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
