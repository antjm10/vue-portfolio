<!--Page Home-->

<template>
  <div id="home">
    <h1><strong>
      Hi,
      <br>
      I'am <span class="home_title-color">Anthony</span>
      <br>
      Apprentice developer</strong>
    </h1>
    <img :src="require('../assets/thumbnail_IMG_2746 (1).jpg')" alt="My photo"/>
    <p>{{ about }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      about: 'Hey! How are you doing? As presented above, my name is Anthony and I\'m an apprentice IT developer. Methodical, analytical and having a team spirit, I like the idea that everyone has a role to play to achieve a common goal. Faced with the challenges that I may encounter in my career, both personal and professional, I rely on my perseverance to propose viable solutions. '
    }
  }
}
</script>


<style scoped>

/* general */

img {
  margin-left: 40vw;
  margin-top: -25px;
  width: 300px;

  animation-duration: 2s;
  animation-name: slideimg;
}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  img {
    width: 200px;
    margin-top: 5vh;
    margin-right: 10vw;
  }
}

h1 {
  margin-top: 15vh;
  font-size: 40px;
  margin-right: 20vw;

  animation-duration: 2s;
  animation-name: slidein;
}

.home_title-color {
  color: slateblue;
}

p {
  max-width: 65%;
  /*margin-left: 25vw;*/
  font-size: 20px;
  margin-bottom: 100px;
  margin-top: 15vh;
  line-height: 1.6;

  animation-duration: 2s;
  animation-name: slideimg;
}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
p {
  max-width: 80%;
}
}

#home {
  max-width: 85%;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 1rem;
  margin-top: 1rem;
  margin-left: 444px;
}

/*apply the following style if the display resolution reaches 2000px : move the navigation*/
@media screen and (min-device-width: 2000px)
{
  #home
  {
    margin-left: 23vw;

  }

}
/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  #home
  {
    margin-left: 15vw;

  }

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


</style>
