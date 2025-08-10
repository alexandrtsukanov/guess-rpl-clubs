<template>
        <!-- <div>Count: 
            {{ state.count }}
        </div>
        <div>
            Doubled: {{ state.double }}
        </div> -->
        <button @click="handleClick">Increment</button>
</template>

<script lang="ts">
import { useCounterStore } from '@/store'
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Mobx1',
    data() {
        return {
            state: useCounterStore(),
        }
    },
    methods: {
        handleClick() {            
            console.log('AAA')
            this.state.increment();
            console.log('BBB')
        }
    }
})
</script>