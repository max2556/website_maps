<template>
    <section class="main">
        <Welcome></Welcome>
        <Map></Map>
    </section>
</template>

<script>
/* TODO:
    Сделать прыгающие буквы

*/
import Map from './Map.vue';
import Welcome from './Welcome.vue'
import { display_on_load, element_chain_load } from '../scripts/transition-load.js'
window.addEventListener('DOMContentLoaded', element_chain_load);

export default {
    name: 'Center',
    components: {
        Map,
        Welcome
    }
}
</script>

<style>

</style>


