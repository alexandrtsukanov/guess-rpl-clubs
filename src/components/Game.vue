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
            v-bind:word="word"
            @check-club="checkClub"
            @renew-letters="renewLetters"
            @hint="hint"
        />
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
import { useStore } from '@/store';
import { getRandomNum } from '@/utils/getRandomNum';

interface IGame {
    allClubs: Set<string>;
    guessedClubs: Set<string>;
    remainedClubs: TClub[];
    letters: ILetter[];
    word: ILetter[];
    currentClubs: string[];
    pinia: ReturnType<typeof useStore>;
}

export default defineComponent({
    name: 'Game',
    components: {
        View,
        LowerButtons,
        UpperButtons,
    },
    data(): IGame {
        return {
            allClubs: new Set<string>(ALL_CLUBS),
            guessedClubs: new Set<string>(),
            remainedClubs: [...ALL_CLUBS],
            letters: [],
            word: [],
            currentClubs: [],
            pinia: useStore(),
        }
    },
    methods: {
        checkClub() {
            const club = getWord(this.word);

            if (this.allClubs.has(club)) {
                if (this.guessedClubs.has(club)) {
                    alert('ALREADY GUESSED')
                } else {
                    this.guessClub(club);
                } 
            } else {
                alert('NOT CORRECT')
            }
        },
        guessClub(club: string) {
            this.guessedClubs.add(club);
            this.pinia.addGuessedClub(club);
            this.remainedClubs = this.remainedClubs.filter((el: TClub) => el !== club);
            this.word = [];
            this.unhint();

            if (this.currentClubs.includes(club)) {
                this.letters = this.letters.map(letter => letter.isSelected ? {...letter, isGone: true} : letter);
            } else {
                this.renewLetters();
            }

            if (this.currentClubs.every(club => this.guessedClubs.has(club))) {
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
        renewLetters() {
            this.currentClubs = [];
            this.letters = getLetters(this.remainedClubs, this.currentClubs);
            this.word = [];
        },
        async hint() {
            if (!this.pinia.hints) {
                alert('YOU HAVE NO HINTS')
                return;
            }

            this.pinia.subtractHint();
            this.unhint();

            const remainedCurrentClubs = this.currentClubs.filter(club => !this.guessedClubs.has(club));
            const index = getRandomNum(0, remainedCurrentClubs.length);
            const hintedClub = remainedCurrentClubs[index];

            hintedClub
                .split('')
                .forEach(letter => {
                    const hintedLetter = this.letters.find(currLetter => 
                        currLetter.title === letter && !currLetter.isHinted && !currLetter.isGone
                    );
    
                    this.letters = this.letters
                        .map(letter => letter.id === hintedLetter?.id
                            ? {...letter, isHinted: true}
                            : {...letter, isSelected: false}
                        );
                })
        },
        unhint() {
            this.letters = this.letters.map(letter => ({...letter, isHinted: false}));
        }
    },
    mounted() {
        this.renewLetters();
        console.log(this.letters);
        
    },
})
</script>
