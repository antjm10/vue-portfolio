<template>
  <div class="contact">
    <h1>{{title}}</h1>
    <p class="thank">{{messageMerci}}</p>
      <div class="logo">
        <div><a href="https://github.com/antjm10" target="_blank"><img :src="require('../assets/github-sociocon.webp')" alt="My photo" height="100" width="100"/></a><p></p></div>
        <div><a href="https://www.linkedin.com/in/anthony-mi%C3%A9ville-3a8248199/" target="_blank"><img :src="require('../assets/linkedin-icon-logo-05B2880899-seeklogo.com.png')" alt="My photo" height="100" width="100"/></a><p></p></div>
        <div><a href="mailto:anthony.mieville@jobtrek.ch" target="_blank"><img :src="require('../assets/Email-Logo-Transparent-Background.png')" alt="My photo" height="100" width="100"/></a><p></p></div>

      </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      messageMerci: 'I thank you for your time and interest in my portfolio. If you want to contact me, I put my different means of contact below.',
      title: 'Contact'
    }
  }
}
</script>



<style scoped>

.logo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  margin-top: 15vh;
  margin-bottom: 35vh;
  text-align: center;

}

.contact {
  margin-top: 15vh;

  animation-duration: 2s;
  animation-name: slidein;

}

h1 {
  margin-left: 47vw;

  animation-duration: 2s;
  animation-name: slidep;
}

@keyframes slidein {
  from {
    margin-left: 300%;
  }

  to {
    margin-right: 0;
    width: 100%;
  }
}

p {
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 1rem;
  max-width: 50%;
  margin-top: 5vh;

  margin-left: 25vw;
  line-height: 1.6;
}





</style>

