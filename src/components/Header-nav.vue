<!--Page Header-->

<template>
<div>
  <nav class="navbar">
    <div class="nav_logo">
    <p>Anthony Miéville | Portfolio</p>
    </div>
    <div class="link">
    <router-link to="/" class="nav-item nav-link Home">Home</router-link>
    <router-link to="/project" class="nav-item nav-link Project">Project</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
  </nav>
</div>
</template>

<script>

</script>

<style scoped>
.navbar {
  padding-top: 2vh;
  padding-bottom: 1vh;
  padding-left: 20vw;
  background-color: #1c1721;
  align-items: center;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

}

/*apply the following style if the display resolution reaches 1020 : move the navigation*/
@media screen and (min-device-width: 1020px)
{
  .navbar
  {
    padding-left: 22vw;

  }

}

/*apply the following style if the display resolution reaches maximum 800px : move the navigation*/
@media screen and (max-device-width: 800px)
{
  .navbar
  {
    padding-left: 12vw;

  }

}

/*apply the following style if the display resolution reaches maximum 500px : move the navigation*/
@media screen and (max-device-width: 500px)
{
  .navbar
  {
    padding-left: 12vw;

  }

}


a {
  color: lightblue;
  text-decoration: none;
  margin-left: 6vw;
  font-weight: bold;
  font-size: 17px;
}

/*apply the following style if the display resolution reaches maximum 500px : move the navigation*/
@media screen and (max-device-width: 500px)
{
  a
  {
    font-size: 12px;
  }

}





.link {
  display: flex;
  margin-left: 12vw;
}

/*apply the following style if the display resolution reaches maximum 500px : move the navigation*/
@media screen and (max-device-width: 500px)
{
  .link
  {
    margin-left: 0;
  }

}

.nav_logo {
  margin-left: 3vw;
  color: lightblue;
}

/*apply the following style if the display resolution reaches maximum 500px : move the navigation*/
@media screen and (max-device-width: 500px)
{
  .nav_logo
  {
    font-size: 12px;
  }

}

.navbar router-link {
  grid-template-columns: 50%;

}




</style>