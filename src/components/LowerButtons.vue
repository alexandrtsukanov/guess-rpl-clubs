<template>
    <div>
        <button @click="$emit('renew-letters')">
            RENEW LETTERS
        </button>
        <button @click="$emit('check-club')">
            CHECK CLUB
        </button>
        <button @click="$emit('hint')">
            HINT {{hintsNum}} / {{allHintsNum}}
        </button>
    </div>
</template>

<script>
import { hintsAmount } from '@/constants'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LowerButtons',
    props: {
        hintsNum: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            allHintsNum: hintsAmount,
        }
    }
})
</script>
