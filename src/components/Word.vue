<template>
    <div>
        <p v-if="ownWord.length">{{ownWord}}</p>
        <p v-else id="empty-word">TEXT CLUB</p>
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
        height: auto;
        font-weight: 700;
        font-size: 64px;
        line-height: 72px;
        letter-spacing: 4px;
    }

    #empty-word {
        color: grey;
    }

    hr {
        width: 80vw;
    }
</style>