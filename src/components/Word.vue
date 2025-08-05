<template>
    <div id="word">
        <div id="word-letters">
            <Letter
                v-for:="letter in word"
                v-bind:letter="letter"
            />
        </div>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Letter from '@/components/Letter.vue'
import { ILetter } from '@/types'

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
    mounted() {
        // console.log(this.word);
    },
})
</script>

<style scoped>
    #word {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #word-letters {
        display: flex;
        height: 64px;
    }

    hr {
        width: 80vw;
    }
</style>