<template>
    <section class="welcome background-gradient">
        <div class="wrapper chain-load">
            {{content}}
        </div>
    </section>
</template>

<script>
import { get_welcome_content } from '../scripts/get-welcome-content.js';
export default {
    name: 'Welcome',
    data: () => ({
        content: get_welcome_content()
    })
}
</script>

<style>
@import '../styles/welcome_section.css';
</style>
