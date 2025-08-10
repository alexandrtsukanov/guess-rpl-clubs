<template>
    <div>
        <UpperButtons/>
        <View
            v-bind:letters="letters"
            v-bind:word="word"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
        <LowerButtons @check-club="checkClub"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ALL_CLUBS, TClub} from '@/constants';
import View from '@/components/View.vue'
import LowerButtons from '@/components/LowerButtons.vue'
import UpperButtons from '@/components/UpperButtons.vue'
import { ILetter } from '@/types';
import { getLetters, getWord } from '@/utils';

export default defineComponent({
    name: 'Game',
    components: {
        View,
        LowerButtons,
        UpperButtons,
    },
    data() {
        return {
            allClubs: new Set<string>(ALL_CLUBS),
            remainedClubs: [...ALL_CLUBS],
            letters: [] as ILetter[],
            word: [] as ILetter[],
            currentClubs: [] as TClub[],
            states: {
                notGuessed: false,
                alreadyGuessed: false,
                guessed: false,
            },
        }
    },
    methods: {
        checkClub() {
            const club = getWord(this.word);
            console.log('checked club =>', club);

            if (!this.allClubs.has(club)) {
                this.states.notGuessed = true;
            } else {
                if (this.allClubs.has(club)) {
                    if (true) {
                        this.states.alreadyGuessed = true;
                    } else {
                        this.states.guessed = true;
                        this.guessClub(club);
                        console.log('checked!');
                    }
                }
            }
        },
        guessClub(club: string) {
            // useAppDispatch(addGuessedClub(club));
            // state?.addGuessedClub(club); 
            this.remainedClubs = this.remainedClubs.filter((el: TClub) => el !== club); // mobx
            this.word = [];
            this.letters = this.letters.map(letter => letter.isSelected ? {...letter, isGone: true} : letter);
        },
        pushLetter(letter: ILetter) {
            if (letter.isSelected || letter.isGone) {
                return;
            };
            this.word.push(letter);
            this.letters = this.letters
                .map(el => el.id === letter.id && !letter.isSpace
                    ? {...el, isSelected: true}
                    : el
                );
        },
        popLetter() {
            const letter = this.word.pop();
            if (!letter) {
                return;
            }
            this.letters = this.letters.map((el) => el.id === letter.id ? {...el, isSelected: false} : el);
        },
        resetStates() {
            this.states.alreadyGuessed = false;
            this.states.guessed = false;
            this.states.notGuessed = false;
        },
    },
    mounted() {
        this.letters = getLetters(this.remainedClubs);
    },
})
</script>
