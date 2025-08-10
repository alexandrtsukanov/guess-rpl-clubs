<template>
    <div>
        {{clubs}}
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
    computed: {
        clubs(): string[] {
            return this.piniaState.getClubList();
        }
    }
})
</script>
