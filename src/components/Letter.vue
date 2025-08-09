<template>
    <span
        v-if="!letter.isCross"
        v-on:click="$emit('click-letter', letter)"
        v-bind:class="{
            clicked: letter.isClicked,
            space: letter.isSpace,
        }"
    >
        {{letter.title}}
    </span>
    <span
        v-else
        v-on:click="$emit('delete-letter')"
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

    span:hover {
        background: lightgray;
    }

    .clicked, .clicked:hover {
        background: red;
        color: #fff;
    }

    .space {
        width: 104px;
    }
</style>
