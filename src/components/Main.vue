<template>
    <div id="root">
            <Header/>
            <br>
            <ClubList/>
            <Game/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Observer from 'mobx-vue-lite'
import {ALL_CLUBS, TClub} from '@/constants';
import Header from '@/components/Header.vue'
import ClubList from '@/components/ClubList.vue'
import Game from '@/components/Game.vue'
import { ILetter } from '@/types';
import { getWord } from '@/utils';

export default defineComponent({
    name: 'Main',
    components: {
        Observer,
        Header,
        ClubList,
        Game,
    },
    data() {
        return {
            allClubs: new Set<string>(ALL_CLUBS),
            guessedClubs: new Set<string>(),
            remainedClubs: [...ALL_CLUBS],
            word: [] as ILetter[],
            states: {
                notGuessed: false,
                alreadyGuessed: false,
                guessed: false,
            },
            letters: [] as ILetter[],
        }
    },
    methods: {
        checkClub() {
            const club = getWord(this.word);

            if (!this.allClubs.has(club)) {
                this.states.notGuessed = true;
                return;
            }
            if (this.allClubs.has(club)) {
                if (this.guessedClubs.has(club)) {
                    this.states.alreadyGuessed = true;
                } else {
                    this.states.guessed = true;
                    this.guessClub(club);
                }
            }
        },
        guessClub(club: string) {
            this.guessedClubs.add(club);
            this.remainedClubs = this.remainedClubs.filter((el: TClub) => el !== club);
            this.word = [];
            // this.letters = this.letters.map((el) => el.id === letter.id ? {...el, isSelected: false} : el);
        },
        pushLetter(letter: ILetter) {
            this.word.push(letter);
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
    }
})
</script>

<style>
    button {
        cursor: pointer;
        padding: 4px 8px;
        margin: 8px;
    }
</style>