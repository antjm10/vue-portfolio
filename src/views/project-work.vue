<!--Page Project-->

<template>
  <div class="project">
    <h1 class="title-project"><strong>{{title}}</strong></h1>
    <p class="description">{{messageProject}}</p>
    <div class="wrapper">
      <div class="end"><a href="https://github.com/antjm10/web-site" target="_blank"><img :src="require('../assets/image-website.jpg')" alt="My photo" height="350" width="500"/></a><p class="name_project">Web site</p></div>
      <div class="start"><a href="https://github.com/antjm10/JavaScript-games" target="_blank"><img :src="require('../assets/image-snake_game.png')" alt="My photo" height="350" width="500"/></a><p class="name_project">Snake game</p></div>
      <div class="end"><a href="https://github.com/antjm10/my-first-blog" target="_blank"><img :src="require('../assets/image-Blog.jpg')" alt="My photo" height="350" width="500"/></a><p class="name_project">Blog</p></div>
      <div class="start"><a href="https://github.com/antjm10/SQL_PHP" target="_blank"><img :src="require('../assets/image-login_php.webp')" alt="My photo" height="350" width="500"/></a><p class="name_project">Login system</p></div>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      title: 'Project Github',
      messageProject: 'Here are different projects that I realized during my year of apprenticeship or before that in an online formation to learn programming. Just click on the image and you will access the source code of the project on Github.'
    }
  }
}

</script>


<style scoped>

/* general */

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 15vh;
  margin-bottom: 15vh;


  animation-duration: 2s;
  animation-name: slidein;
}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

  }
}

.project {
  margin-left: 20vw;
  max-width: 65%;


  animation-duration: 2s;
  animation-name: slidp;
}

/*apply the following style if the display resolution reaches 2000px : move the navigation*/
@media screen and (min-device-width: 2000px) {
  .project {
    margin-right: 23vw;

  }

}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  .project
  {
    margin-left: 18vw;

  }
}


.project h1 {
  margin-left: 25vw;
}

/*apply the following style if the display resolution reaches 2000px : move the navigation*/
@media screen and (min-device-width: 2000px)
{
  .project h1 {
    margin-left: 22vw;
  }

}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  .project h1 {
    margin-right: 20vw;
  }

}


/* general */

.end {
  display: grid;
}

.start {
  display: grid;
}



.start .end p{
  text-align: center;
}

.description {
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 95%;
  grid-column-gap: 1rem;
  line-height: 1.6;

}

/*apply the following style if the display resolution reaches 2000px : move the navigation*/
@media screen and (min-device-width: 2000px)
{
  .description
  {
    grid-template-columns: 84%;

  }

}

h1 {
  margin-top: 15vh;
  margin-left: 23vw;

  animation-duration: 2s;
  animation-name: slidep;
}

.name_project {
  margin-top: -4px;
  padding: 15px;
  text-align: center;
  max-width: 470px;
  background-color: darkslateblue;
  color: lightskyblue;


}





/* animation */

@keyframes slidp {
  from {
    margin-left: 300%;
    width: 300%;
  }

  to {
    margin-right: 0;
    width: 100%;
  }
}

@keyframes slidein {
  from {
    margin-left: 300%;
    width: 300%;
  }

  to {
    margin-left: 0;
    width: 100%;
  }
}



</style>