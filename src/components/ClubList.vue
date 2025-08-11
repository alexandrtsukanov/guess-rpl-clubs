<template>
    <div>
        <router-link to="/">BACK TO GAME</router-link>

        <div v-for:="club in piniaState.guessedFullClubs" :key="club">
            {{club}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGuessedClubsStore } from '@/store';

export default defineComponent({
    name: 'ClubList',
    data() {
        return {
            piniaState: useGuessedClubsStore(),
        }
    },
})
</script>
