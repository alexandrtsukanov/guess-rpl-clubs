<template>
    <div>
        <View
            v-bind:clubs="clubs"
            v-bind:word="word"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
        <Buttons @check-club="checkClub"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import View from '@/components/View.vue'
import Buttons from '@/components/Buttons.vue'
import { TClub } from '@/constants';
import { ILetter } from '@/types';

export default defineComponent({
    name: 'Game',
    components: {
        View,
        Buttons,
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
        checkClub() {
            this.$emit('check-club');
        },
        pushLetter(letter: string) {
            this.$emit('push-letter', letter);
        },
        popLetter() {
            this.$emit('pop-letter');
        },
    },
})
</script>