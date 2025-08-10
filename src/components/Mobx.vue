<template>
    <Observer>
        <div>
            <Mobx1/>
            <Mobx2/>
        </div>
    </Observer>
</template>

<script lang="ts">
import Mobx1 from '@/components/Mobx1.vue'
import Mobx2 from '@/components/Mobx2.vue'
import { defineComponent } from 'vue'
import { Observer } from 'mobx-vue-lite';

export default defineComponent({
    name: 'Mobx',
    components: {
        Mobx1,
        Mobx2,
        Observer,
    }
})
</script>