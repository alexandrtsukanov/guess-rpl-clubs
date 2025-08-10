<template>
    <span
        v-if="!letter.isCross"
        v-on:click="$emit('push-letter', letter)"
        v-bind:class="{
            selected: letter.isSelected,
            space: letter.isSpace,
            gone: letter.isGone,
            hinted: letter.isHinted,
        }"
    >
        {{letter.title}}
    </span>
    <span
        v-else
        v-on:click="$emit('pop-letter')"
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
        font-size: 21px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 4px;
    }

    span:hover {
        background: lightgray;
    }

    .hinted, .hinted:hover {
        background: green;
        color: #fff;
    }

    .selected, .selected:hover {
        background: red;
        color: #fff;
    }

    .gone {
        opacity: 0;
        cursor: auto;
    }

    .space {
        width: 162px;
    }
</style>
