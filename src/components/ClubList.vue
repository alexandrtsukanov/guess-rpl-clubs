<template>
    <div>
        {{ownClubs}}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TClub } from '@/constants';
import { getFullClubs } from '@/utils';

export default defineComponent({
    name: 'ClubList',
    props: {
       clubs: {
            type: Set as PropType<Set<TClub>>,
            required: true,
       },
    },
    computed: {
        ownClubs(): string[] {
            const clubs = [...this.clubs];
            return clubs.reduce((allClubs: string[], club) => [...allClubs, ...getFullClubs(club)], []);
        }
    }
})
</script>
