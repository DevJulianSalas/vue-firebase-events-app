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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body{
  margin: 0%;
}

.nav-item-link {
  text-decoration: none;
  color: #2c3e50;
}

.hline-bottom {
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
