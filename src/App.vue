<template>
    <div id="app">
      <component :is="layout"></component>
    </div>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import LoginLayout from '@/layouts/LoginLayout'
export default {
  name: 'app',
  components: {
    LoginLayout,
    HomeLayout
  },
  computed: {
    layout () {
      console.log(this.$store)
      return this.$store.getters.layout
    }
  }
}
</script>

<style>
</style>
