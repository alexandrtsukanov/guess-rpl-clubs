<template>
    <div>
        {{clubs}}
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { TClub } from '@/constants';
import { getFullClubs } from '@/utils';

// const guessedClubs = useAppSelector(state => state.guessedClubs.guessedClubsList);

export default defineComponent({
    name: 'ClubList',
    data() {
        return {
            clubs: []
        }
    },
    // computed: {
    //     ownClubs(): string[] {
    //         console.log('ownClubs', [...store2.guessedClubs]);
            
    //         const clubs = [...store2.guessedClubs] as TClub[];
    //         return clubs.reduce((allClubs: string[], club) => [...allClubs, ...getFullClubs(club)], []);
    //     }
    // }
})
</script>
