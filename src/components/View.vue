<template>
    <div id="view">
        <Word v-bind:word="word"/>
        <Letters
            v-bind:letters="letters"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Word from '@/components/Word.vue'
import Letters from '@/components/Letters.vue'
import { ILetter } from '@/types'

export default defineComponent({
    name: 'View',
    components: {
        Word,
        Letters,
    },
    props: {
        letters: {
            type: Array as PropType<ILetter[]>,
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