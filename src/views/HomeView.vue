<template>
        <h1 >Home {{ counter }}</h1>
        <div class="text-center  w-25 d-flex ">
                <Button @click="increaseHandler">Increment</Button>
                <Button @click="decreaseHandler">Decrement</Button>
        </div>
</template>

<script>
import { computed } from 'vue'
export default {
        methods: {
                increaseHandler() {
                        this.$store.commit('increment')
                },
                decreaseHandler() {
                        this.$store.commit('decrement')
                }
        },
        computed: {
                counter() {
                        return this.$store.state.count
                }
        }
}
</script>

<style>

</style>