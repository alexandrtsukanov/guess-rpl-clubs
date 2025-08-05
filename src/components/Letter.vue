<template>
    <span
        v-on:click="$emit('push-letter', letter)"
        v-bind:class="{
            invisible: !letter.isVisible,
            space: letter.isSpace,
        }"
    >
        {{letter.title}}
    </span>
</template>

<script lang="ts">
import { ILetter } from '@/types';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'Letter',
    props: {
        letter: {
            type: Object as PropType<ILetter>,
            required: true,
        }
    },
})
</script>

<style scoped>
    span {
        display: inline-block;
        height: 48px;
        width: 48px;
        border: .5px solid #111;
        border-radius: 8px;
        background: gainsboro;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 4px;
    }

    .invisible {
        opacity: 0;
    }

    .space {
        width: 104px;
    }
</style>
