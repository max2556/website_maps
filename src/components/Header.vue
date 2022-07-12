<template>
    <header class="header" :class="{ enable: !isHidden, disable: isHidden }">
        <a href="" class="a"><img class="icon" src="../assets/logo.svg" alt="Sorry!"></a>
        <div class="buttons-block">
            <div class="button">
                <a href="" class="a">
                    <p class="about">О НАС</p>
                </a>
            </div>
            <div class="button">
                <a href="" class="a">
                    <p class="about">Благодарности</p>
                </a>
            </div>
            <div class="button">
                <a href="" class="a">
                    <p class="about">Что-то</p>
                </a>
            </div>
            <div class="button">
                <a href="" class="a">
                    <p class="about">что-то</p>
                </a>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isHidden: true
        }
    },
    created() {
        window.addEventListener('scroll', this.scrollCheck);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollCheck);
    },
    methods: {
        scrollCheck: function (e) {
            const target = 400;
            this.isHidden = (window.scrollY >= target) ? false : true;
            console.log(`Window.scroll = ${window.scrollY}; target = ${target}; isHidden will be ${this.isHidden}`)
        }
    }
}
</script>

<style>
@import '../styles/header.css';
</style>