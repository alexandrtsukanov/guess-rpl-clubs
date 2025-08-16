<template>
    <div>
        <router-link to="/">BACK TO GAME</router-link>

        <div v-for:="club in pinia.guessedFullClubs" :key="club">
            {{club}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

interface IClubList {
    pinia: ReturnType<typeof useStore>;
}

export default defineComponent({
    name: 'ClubList',
    data(): IClubList {
        return {
            pinia: useStore(),
        }
    },
})
</script>
