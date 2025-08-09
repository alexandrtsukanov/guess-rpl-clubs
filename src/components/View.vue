<template>
    <div id="view">
        <Word v-bind:word="word"/>
        <Letters
            v-bind:clubs="clubs"
            v-bind:word="word"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Word from '@/components/Word.vue'
import Letters from '@/components/Letters.vue'
import { TClub } from '@/constants'
import { ILetter } from '@/types'

export default defineComponent({
    name: 'View',
    components: {
        Word,
        Letters,
    },
    props: {
        clubs: {
            type: Array as PropType<TClub[]>,
            required: true,
        },
        word: {
            type: Array as PropType<ILetter[]>,
            required: true,
        },
    },
    methods: {
        pushLetter(letter: string) {
            this.$emit('push-letter', letter);
        },
        popLetter() {
            this.$emit('pop-letter');
        },
    }
})
</script>

<style scoped>
    #view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>