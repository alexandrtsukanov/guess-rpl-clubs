<template>
    <div>
        <UpperButtons v-bind:hints="hints"/>
        <View
            v-bind:letters="letters"
            v-bind:word="word"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
        <LowerButtons
            @check-club="checkClub"
            @renew-letters="renewLetters"
            @hint="hint"
            v-bind:hintsNum="hints"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ALL_CLUBS, hintsAmount, TClub} from '@/constants';
import View from '@/components/View.vue'
import LowerButtons from '@/components/LowerButtons.vue'
import UpperButtons from '@/components/UpperButtons.vue'
import { ILetter } from '@/types';
import { getLetters, getWord } from '@/utils';
import { useGuessedClubsStore } from '@/store';
import { getRandomNum } from '@/utils/getRandomNum';

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
            currentClubs: [] as string[],
            states: {
                notGuessed: false,
                alreadyGuessed: false,
                guessed: false,
            },
            hints: hintsAmount,
            piniaState: useGuessedClubsStore(),
        }
    },
    methods: {
        checkClub() {
            const club = getWord(this.word);

            if (!this.allClubs.has(club)) {
                this.states.notGuessed = true;
                alert('NOT CORRECT')
            } else {
                if (this.piniaState.guessedClubs.has(club)) {
                    this.states.alreadyGuessed = true;
                    alert('ALREADY GUESSED')
                } else {
                    this.states.guessed = true;
                    this.guessClub(club);
                } 
            }
        },
        guessClub(club: string) {
            this.piniaState.addGuessedClub(club); 
            this.remainedClubs = this.remainedClubs.filter((el: TClub) => el !== club);
            this.word = [];

            if (this.currentClubs.includes(club)) {
                this.letters = this.letters.map(letter => letter.isSelected ? {...letter, isGone: true} : letter);
            } else {
                this.renewLetters();
            }

            if (this.currentClubs.every(club => this.piniaState.guessedClubs.has(club))) {
                this.renewLetters();
            }

            if (this.remainedClubs.length === 0) {
                alert('YOU WIN!');
            }
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
        renewLetters() {
            this.currentClubs = [];
            this.letters = getLetters(this.remainedClubs, this.currentClubs);
            this.word = [];
            console.log('currentClubs =>', this.currentClubs);
        },
        hint() {
            if (!this.hints) {
                alert('YOU HAVE NO HINTS')
                return;
            }

            this.letters = this.letters.map(letter => letter.isHinted ? {...letter, isHinted: false} : letter);
            this.hints -= 1;

            const remainedCurrentClubs = this.currentClubs.filter(club => !this.piniaState.guessedClubs.has(club));
            const index = getRandomNum(0, remainedCurrentClubs.length);
            const hintedClub = remainedCurrentClubs[index];

            hintedClub
                .split('')
                .forEach(letter => {
                    const hintedLetter = this.letters.find(currLetter => 
                        currLetter.title === letter && !currLetter.isHinted && !currLetter.isGone);
    
                    this.letters = this.letters
                        .map(letter => letter.id === hintedLetter?.id
                            ? {...letter, isHinted: true}
                            : {...letter, isSelected: false});
                })
        }
    },
    mounted() {
        this.renewLetters();
    },
})
</script>
