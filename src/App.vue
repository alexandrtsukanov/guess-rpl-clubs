<template>
    <div id="root">
        <Main/>
    </div>
</template>

<script lang="ts">
import Main from '@/components/Main.vue'

export default {
    name: 'App',
    components: {
        Main,
    },
}
</script>

<style>
    #root {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
