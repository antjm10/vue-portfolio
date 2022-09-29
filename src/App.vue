
<template>
  <div id="nav">

          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/project" class="nav-item nav-link">Project</router-link>
          <router-link to="/contact" class="nav-link">Careers</router-link>

  </div>
  <router-view/>



  <FooterPage />


</template>

<script>
import FooterPage from './components/Footer-page.vue';

export default {
  components: {
    FooterPage

  }
}

</script>

<style>

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}


body{
  margin: 0;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(39,35,112,1) 100%, rgba(23,23,23,1) 100%);
}

.bar {
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: lightblue;
  margin-top: 60px;
  max-height: 100%;
}

.nav {
  color: #42b983;
  text-decoration: none;
  text-align: center;
}

</style>
