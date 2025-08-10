<template>
        <div>Count: 
            {{ state.count }}
        </div>
        <!-- <button @click="state.increment">Increment</button> -->
</template>

<script lang="ts">
import { useCounterStore } from '@/store'
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Mobx2',
    data() {
        return {
            state: useCounterStore(),
        }
    }
})
</script>