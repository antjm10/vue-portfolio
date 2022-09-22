<template>
  <div class="contact">
    <p>Proin rutrum vel dolor et malesuada. Etiam venenatis eget massa sit amet lobortis. In vel ante sed arcu auctor aliquet sit amet ac justo. Nulla accumsan sem ut velit finibus, at aliquam magna vestibulum. Sed fringilla metus in quam bibendum, eget facilisis ipsum facilisis. Mauris et vulputate felis. Ut et tempor justo, et iaculis libero. Nulla aliquam fringilla turpis at maximus.</p>
      <div class="logo">
        <div><a href="https://github.com/antjm10" target="_blank"><img :src="require('../assets/GitHub-Mark-64px.png')" alt="My photo" height="100" width="100"/></a><p></p></div>
        <div><a href="https://www.linkedin.com/in/anthony-mi%C3%A9ville-3a8248199/" target="_blank"><img :src="require('../assets/linkedin-icon-logo-05B2880899-seeklogo.com.png')" alt="My photo" height="100" width="100"/></a><p></p></div>
        <div><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img :src="require('../assets/6244710.png')" alt="My photo" height="100" width="100"/></a><p></p></div>

      </div>
  </div>

</template>






<style scoped>

.logo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 15vh;
  margin-bottom: 15vh;
  text-align: center;
}

.contact {
  margin-left: 15vw;
  max-width: 65%;

}

p {
  text-align: center;
}


</style>

