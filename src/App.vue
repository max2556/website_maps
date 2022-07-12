<template>
  <Header></Header>
  <Center></Center>
  <!--<Map />-->
</template>

<script>
import Header from './components/Header.vue'
import Center from './components/Center.vue';

export default {
  name: 'App',
  components: {
    Header,
    Center
  }
}
</script>

<style>
@import './styles/main_style.css';
</style>
