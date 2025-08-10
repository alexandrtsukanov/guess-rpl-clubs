<template>
    <div id="root">
        <Header/>
        <br>
        <ClubList/>
        <Game/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ALL_CLUBS, TClub} from '@/constants';
import Header from '@/components/Header.vue'
import ClubList from '@/components/ClubList.vue'
import Game from '@/components/Game.vue'
import { ILetter } from '@/types';
import { getWord } from '@/utils';

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
</style>