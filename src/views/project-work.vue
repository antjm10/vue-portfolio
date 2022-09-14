<template>
  <div class="project">
    <h1>Project</h1>
    <p>Sed ac tellus mauris. Pellentesque non pharetra felis, non feugiat ipsum. Sed interdum et tellus in mollis. Duis egestas accumsan sem, varius ornare magna fermentum a. Maecenas aliquam sollicitudin quam eget aliquam. Suspendisse accumsan elit tristique tellus molestie sollicitudin. Mauris nec mattis dui, vitae semper turpis.</p>
    <div class="wrapper">
      <div class="one"><img :src="require('../assets/thumbnail_IMG_2746 (1).jpg')" alt="My photo"/></div>
      <div class="two">Deux</div>
      <div class="three">Trois</div>
      <div class="four">Quatre</div>
      <div class="five">Cinq</div>
      <div class="six">Six</div>
    </div>
  </div>
</template>





<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

</style>