<template>
  <div class="project">
    <h1><strong>Project Github</strong></h1>
    <p class="description">Sed ac tellus mauris. Pellentesque non pharetra felis, non feugiat ipsum. Sed interdum et tellus in mollis. Duis egestas accumsan sem, varius ornare magna fermentum a. Maecenas aliquam sollicitudin quam eget aliquam. Suspendisse accumsan elit tristique tellus molestie sollicitudin. Mauris nec mattis dui, vitae semper turpis.</p>
    <div class="wrapper">
      <div class="end"><a href="https://github.com/antjm10/web-site" target="_blank"><img :src="require('../assets/make-a-website.jpg')" alt="My photo" height="350" width="500"/></a><p class="name_project">Web site</p></div>
      <div class="start"><a href="https://github.com/antjm10/JavaScript-games" target="_blank"><img :src="require('../assets/1_spTwLANfg8qPWZ0-5bt1pQ.png')" alt="My photo" height="350" width="500"/></a><p class="name_project">Snake game</p></div>
      <div class="end"><a href="https://github.com/antjm10/my-first-blog" target="_blank"><img :src="require('../assets/Web-Content-Blog.jpg')" alt="My photo" height="350" width="500"/></a><p class="name_project">Blog</p></div>
      <div class="start"><a href="https://github.com/antjm10/SQL_PHP" target="_blank"><img :src="require('../assets/awesome-html-login-form-layout.webp')" alt="My photo" height="350" width="500"/></a><p class="name_project">Login system</p></div>
    </div>
  </div>
</template>





<style scoped>

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

.project {
  margin-left: 20vw;
  max-width: 65%;


  animation-duration: 2s;
  animation-name: slidp;
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
  grid-template-columns: 100%;
  grid-column-gap: 1rem;
  line-height: 1.6;

}

h1 {
  margin-top: 15vh;
  margin-left: 23vw;

  animation-duration: 2s;
  animation-name: slidep;
}

.name_project {
padding: 15px;
  text-align: center;
max-width: 500px;
  background-color: darkslateblue;
color: lightskyblue;


}



</style>