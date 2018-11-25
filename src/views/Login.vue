<template>
    <div>
        <p>Login</p>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({}),
        created() {
            if (this.$store.getters.layout !== 'login-layout') {
                this.$store.commit('SET_LAYOUT', 'login-layout')
            }
        }

    }

</script>

<style lang="sass" scoped>

</style>
