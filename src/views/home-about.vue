
<template>
  <div id="home">
    <h1><strong>
      Hi,
      <br>
      I'am Anthony
      <br>
      Apprentice developer</strong></h1>
    <img :src="require('../assets/thumbnail_IMG_2746 (1).jpg')" alt="My photo"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisl porttitor, mattis nunc sit amet, iaculis massa. Phasellus fringilla luctus lectus. Curabitur eu nisl a urna laoreet lacinia. Fusce id fringilla nulla. Aenean lobortis, arcu non egestas porta, ligula nunc ornare justo, eu sollicitudin odio odio tempor neque. Pellentesque libero libero, hendrerit quis sem id, aliquam consectetur neque. Vestibulum eleifend purus ex, in facilisis eros faucibus quis. Nam efficitur a elit nec accumsan. Phasellus tincidunt sed nisl et tincidunt. Nunc vitae magna quis mauris maximus malesuada. Morbi varius sodales accumsan. Praesent ultrices sagittis maximus.</p>
  </div>
</template>

<script>

</script>


<style scoped>



img {
  margin-left: 40vw;
  margin-top: -15px;
  width: 300px;

  animation-duration: 2s;
  animation-name: slideimg;


}
h1 {
  margin-top: 15vh;
  font-size: 40px;
  margin-right: 20vw;

  animation-duration: 2s;
  animation-name: slidein;
}

/* animation */

@keyframes slideimg {
  from {
    margin-left: 300%;
  }

  to {
    margin-right: 0;
  }
}



@keyframes slidein {
  from {
    margin-left: 300%;
  }

  to {
    margin-left: 0;
    width: 100%;
  }
}



/*
@keyframes slidein {
  from {
    margin-top: 100%;
    width: 300%;
  }

  to {
    margin-left: -10%;
    width: 100%;
  }
}
 */


/* general */


p {
  max-width: 65%;
  /*margin-left: 25vw;*/
  font-size: 20px;
  margin-bottom: 100px;
  margin-top: 15vh;

  animation-duration: 2s;
  animation-name: slideimg;
}

#home {
  max-width: 85%;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 1rem;
  margin-top: 1rem;
  margin-left: 444px;
}


</style>
