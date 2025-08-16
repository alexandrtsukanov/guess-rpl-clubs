import { TClub, hintsAmount } from '@/constants';
import { getFullClubs } from '@/utils';
import { defineStore } from 'pinia';

interface IStore {
    guessedFullClubs: string[];
    hints: number,
}

export const useStore = defineStore('guessedClubs', {
    state: (): IStore => {
        return {
            guessedFullClubs: [],
            hints: hintsAmount,
        }
    },
    actions: {
        addGuessedClub(club: string) {
            this.guessedFullClubs.push(...getFullClubs(club as TClub));
        },
        subtractHint() {
            this.hints -= 1;
        },
    },
})
