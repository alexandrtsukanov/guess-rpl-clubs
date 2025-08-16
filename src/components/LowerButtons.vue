<template>
    <div>
        <button @click="$emit('renew-letters')">
            RENEW LETTERS
        </button>
        <button @click="$emit('check-club')" v-bind:disabled="word.length === 0">
            CHECK CLUB
        </button>
        <button @click="$emit('hint')">
            HINT {{pinia.hints}} / {{allHintsNum}}
        </button>
    </div>
</template>

<script lang="ts">
import { hintsAmount } from '@/constants'
import { useStore } from '@/store';
import { ILetter } from '@/types'
import { defineComponent, PropType } from 'vue'

interface ILowerButtons {
    allHintsNum: number;
    pinia: ReturnType<typeof useStore>;
}

export default defineComponent({
    name: 'LowerButtons',
    props: {
        word: {
            type: Array as PropType<ILetter[]>,
            required: true,
        }
    },
    data(): ILowerButtons {
        return {
            allHintsNum: hintsAmount,
            pinia: useStore(),
        }
    }
})
</script>
