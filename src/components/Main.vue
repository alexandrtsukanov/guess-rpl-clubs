<template>
    <div id="root">
        <Header/>
        <View/>
        <Letters/>
        <Butttons/>
    </div>
</template>

<script lang="ts">
import {ALL_CLUBS, TClub} from '@/constants';
import Header from '@/components/Header.vue'
import View from '@/components/View.vue'
import Letters from '@/components/Letters.vue'
import Butttons from '@/components/Buttons.vue'

export default {
    name: 'Main',
    components: {
        Header,
        View,
        Letters,
        Butttons,
    },
    data() {
        return {
            clubs: new Set<string>(ALL_CLUBS),
            guessed: new Set<string>(),
            remainedClubs: [...ALL_CLUBS],
            states: {
                notGuessed: false,
                alreadyGuessed: false,
                guessed: false,
            }
        }
    },
    methods: {
        check(club: string) {
            if (!this.clubs.has(club)) {
                this.states.notGuessed = true;
                return;
            }
            if (this.clubs.has(club) && this.guessed.has(club)) {
                this.states.alreadyGuessed = true;
                return;
            }
            this.states.guessed = true;
            this.guessClub(club);
        },
        guessClub(club: string) {
            this.guessed.add(club);
            this.remainedClubs = this.remainedClubs.filter(el => el !== club);
        },
    }
}
</script>