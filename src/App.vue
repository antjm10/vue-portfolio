
<template>
  <HeaderNav />
  <div>
  </div>
  <router-view/>



  <FooterPage />


</template>

<script>
import FooterPage from './components/Footer-page.vue';
import HeaderNav from './components/Header-nav.vue';


export default {
  components: {
    FooterPage,
    HeaderNav
  }

}

</script>

<style>


body{
  margin: 0;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(39,35,112,1) 100%, rgba(23,23,23,1) 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: lightblue;
  max-height: 100%;
}

</style>
