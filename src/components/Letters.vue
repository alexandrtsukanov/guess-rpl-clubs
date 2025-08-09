<template>
    <div id="letters">
        <Letter
            v-for:="letter in letters"
            v-bind:letter="letter"
            @click-letter="onClickLetter"
            @delete-letter="onDeleteLetter"
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
            ownWord: [] as ILetter[],
        }
    },
    mounted() {
        this.letters = getLetters(this.clubs);    
    },
    methods: {
        onClickLetter(letter: ILetter) {
            if (letter.isClicked) {
                return;
            }
            this.$emit('push-letter', letter);
            this.ownWord.push(letter);
            this.letters = this.letters.map(el => el.id === letter.id ? {...el, isClicked: true} : el);
        },
        onDeleteLetter() {
            if (!this.ownWord.length) {
                return;
            }

            this.$emit('pop-letter');
            const lastLetter = this.ownWord.pop();

            if (!lastLetter) {
                return;
            }

            this.letters = this.letters.map(el => el.id === lastLetter.id ? {...el, isClicked: false} : el);
        },
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