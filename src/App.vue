<template>
  
  <Auth></Auth>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Auth from './views/Auth'
export default {
  name: 'App',
  components: {
   // HelloWorld
  Auth
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
