import { TClub } from '@/constants';
import { getFullClubs } from '@/utils';
import { defineStore } from 'pinia'

export const useGuessedClubsStore = defineStore('guessedClubs', {
    state: () => {
        return {
            guessedClubs: new Set<string>(),
        }
    },
    actions: {
        addGuessedClub(club: string) {
            this.guessedClubs.add(club);
        },
        getClubList() {
            const clubs = [...this.guessedClubs] as TClub[];
            return clubs.reduce((allClubs: string[], club) => [...allClubs, ...getFullClubs(club)], []);
        }
    },
})
