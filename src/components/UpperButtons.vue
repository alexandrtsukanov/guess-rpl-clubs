<template>
    <div id="upper-items">
        <router-link to="/clublist">SEE GUESSED CLUBS</router-link>
        <div>GUESSED {{guessedClubsAmount}} OF {{allClubsAmount}} </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { clubsAmount } from '@/constants'
import { useStore } from '@/store'

interface IUpperButtons {
    allClubsAmount: number;
    piniaState: ReturnType <typeof useStore>;
}

export default defineComponent({
    name: 'UpperButtons',
    data(): IUpperButtons {
        return {
            allClubsAmount: clubsAmount,
            piniaState: useStore(),
        }
    },
    computed: {
        guessedClubsAmount(): number {
            return this.piniaState.guessedFullClubs.length;
        }
    }
})
</script>

<style scoped>
    #upper-items {
        display: flex;
        justify-content: center;
        gap: 16px;
    }
</style>