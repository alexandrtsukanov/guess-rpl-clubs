<template>
    <div>
        <p>{{ownWord}}</p>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Letter from '@/components/Letter.vue'
import { ILetter } from '@/types'
import { getWord } from '@/utils'

export default defineComponent({
    name: 'Word',
    components: {
        Letter,
    },
    props: {
        word: {
            type: Array as PropType<ILetter[]>,
            required: true,
        }
    },
    computed: {
        ownWord(): string {
            return getWord(this.word);
        }
    },
})
</script>

<style scoped>
    p {
        height: 32px;
        margin: 0;
    }

    hr {
        width: 80vw;
    }
</style>