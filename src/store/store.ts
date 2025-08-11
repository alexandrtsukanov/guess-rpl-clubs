import { ALL_CLUBS, TClub } from '@/constants';
import { getFullClubs } from '@/utils';
import { defineStore } from 'pinia'

export const useGuessedClubsStore = defineStore('guessedClubs', {
    state: () => {
        return {
            guessedClubs: new Set<string>(),
            guessedFullClubs: [] as string[],
            remainedClubs: [...ALL_CLUBS],
        }
    },
    actions: {
        addGuessedClub(club: string) {
            this.guessedClubs.add(club);
            const clubs = [...this.guessedClubs] as TClub[];
            this.guessedFullClubs = clubs.reduce((allClubs: string[], club) => [...allClubs, ...getFullClubs(club)], []);
        },
        removeRemainedClub(club: string) {
            this.remainedClubs = this.remainedClubs.filter((el: TClub) => el !== club);
        }
    },
})
