<template>
    <div id="upper-items">
        <router-link to="/clublist">SEE GUESSED CLUBS</router-link>
        <div>GUESSED {{guessedClubsAmount}} OF {{allClubsAmount}} </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { clubsAmount } from '@/constants'
import { useGuessedClubsStore } from '@/store'

export default defineComponent({
    name: 'UpperButtons',
    data() {
        return {
            allClubsAmount: clubsAmount,
            piniaState: useGuessedClubsStore(),
        }
    },
    computed: {
        guessedClubsAmount() {
            return this.piniaState.getAllClubs().length;
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