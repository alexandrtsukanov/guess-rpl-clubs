import { ALL_CLUBS, TClub, hintsAmount } from '@/constants';
import { getFullClubs } from '@/utils';
import { defineStore } from 'pinia'

export const useStore = defineStore('guessedClubs', {
    state: () => {
        return {
            guessedFullClubs: [] as string[],
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
