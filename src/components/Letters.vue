<template>
    <div id="letters">
        <Letter
            v-for:="letter in letters" :key="letter.id"
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
        word: {
            type: Array as PropType<ILetter[]>,
            required: true,
        },
    },
    data() {
        return {
            letters: [] as ILetter[],
            ownWord: [] as ILetter[],
            currentClubs: [] as TClub[],
        }
    },
    mounted() {
        this.letters = getLetters(this.clubs);
    },
    methods: {
        onClickLetter(letter: ILetter) {
            if (letter.isSelected || letter.isGone) {
                return;
            }
            this.$emit('push-letter', letter);
            this.ownWord.push(letter);
            this.letters = this.letters
                .map(el => el.id === letter.id && !letter.isSpace
                    ? {...el, isSelected: true}
                    : el
                );
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

            this.letters = this.letters
                .map(el => el.id === lastLetter.id
                    ? {...el, isSelected: false}
                    : el
                );
        },
    },
    // computed: {
    //     ownLetters(): ILetter[] {
    //         if (this.word.length === 0) {
    //             return this.letters.map(letter =>
    //                 letter.isSelected
    //                     ? {...letter, isGone: true}
    //                     : letter
    //                 )
    //         }
    //         return this.letters;
    //     },
    //     ownWordComputed(): ILetter[] {
    //         return this.word;
    //     }
    // }
})
</script>

<style scoped>
    #letters {
        display: flex;
        flex-wrap: wrap;
        width: 408px;
    }
</style>
