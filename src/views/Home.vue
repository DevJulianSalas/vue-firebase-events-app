<template>
    <div>
        <p>Home view</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: () => ({}),
        created() {
            if (this.$store.getters.layout !== 'home-layout') {
                this.$store.commit('SET_LAYOUT', 'home-layout')
            }
        },
    }
    
</script>

<style lang="sass" scoped>

</style>
