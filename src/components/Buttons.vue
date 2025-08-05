<template>
    <div>
        <button @click="$emit('check-club')">
            CHECK CLUB
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Buttons',
})
</script>
