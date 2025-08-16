<template>
    <div id="root">
        <Header/>
        <br>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'
import ClubList from '@/components/ClubList.vue'
import Game from '@/components/Game.vue'

export default defineComponent({
    name: 'Main',
    components: {
        Header,
        ClubList,
        Game,
    }
})
</script>

<style>
    button {
        cursor: pointer;
        padding: 4px 8px;
        margin: 8px;
    }

    * {
        user-select: none;
    }
</style>