<template>
    <div id="root">
        <Header/>
        <br>
        <br>
        <ClubList v-bind:clubs="guessedClubs"/>
        <Game
            v-bind:clubs="remainedClubs"
            v-bind:word="word"
            @check-club="checkClub"
            @push-letter="pushLetter"
            @pop-letter="popLetter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {ALL_CLUBS, TClub} from '@/constants';
import Header from '@/components/Header.vue'
import ClubList from '@/components/ClubList.vue'
import Game from '@/components/Game.vue'
import { ILetter } from '@/types';
import { getWord } from '@/utils';

export default defineComponent({
    name: 'Main',
    components: {
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
            mode: 'game',
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
        },
        pushLetter(letter: ILetter) {
            this.word.push(letter);
        },
        popLetter() {
            return this.word.pop();
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
        margin: 8px;
    }
</style>