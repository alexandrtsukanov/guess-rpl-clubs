<template>
    <div id="letters">
        <Letter
            v-for:="letter in letters" :key="letter.id"
            v-bind:letter="letter"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Letter from '@/components/Letter.vue'
import {TClub} from '@/constants';
import {ILetter} from '@/types';

export default defineComponent({
    name: 'Letters',
    components: {
        Letter,
    },
    props: {
        letters: {
            type: Array as PropType<ILetter[]>,
            required: true,
        },
    },
    data() {
        return {
            currentClubs: [] as TClub[],
        }
    },
    methods: {
        pushLetter(letter: string) {
            this.$emit('push-letter', letter);
        },
        popLetter() {
            this.$emit('pop-letter');
        },
    },
})
</script>

<style scoped>
    #letters {
        display: flex;
        flex-wrap: wrap;
        width: 408px;
    }
</style>
