<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import LoginLayout from '@/layouts/LoginLayout'
import HomeLayout from '@/layouts/HomeLayout'

export default {
  name: 'app',
  components: {
    LoginLayout,
    HomeLayout
  },
  computed: {
    layout() {
      return this.$store.getters.layout
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
