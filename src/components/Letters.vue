<template>
    <div id="letters">
        <Letter
            v-for:="letter in letters"
            v-bind:letter="letter"
            v-bind:word="word"
            @push-letter="onClickLetter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Letter from '@/components/Letter.vue'
import { getLetters } from '@/utils';
import {TClub} from '@/constants';
import {ILetter} from '@/types';

export default defineComponent({
    name: 'Letters',
    components: {
        Letter,
    },
    props: {
        clubs: {
            type: Array as PropType<TClub[]>,
            required: true,
        },
    },
    data() {
        return {
            letters: [] as ILetter[],
        }
    },
    mounted() {
        this.letters = getLetters(this.clubs);        
    },
    methods: {
        onClickLetter(letter: ILetter) {
            if (!letter.isVisible) {
                return;
            }
            this.$emit('push-letter', letter);
            this.letters = this.letters.map(el => el.id === letter.id ? {...el, isVisible: false} : el);
        },
        // onDeleteLetter() {
        //     this.$emit('pop-letter');
        //     this.letters = this.letters.map(el => el.id === letter.id ? {...el, isVisible: false} : el);
        // },
    }
})
</script>

<style scoped>
    #letters {
        display: flex;
        flex-wrap: wrap;
        width: 408px;
    }
</style>