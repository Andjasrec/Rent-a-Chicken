<template>
  <div>
    
  <carousel-3d :disable3d="true" :space="365" :autoplay="true" :autoplay-timeout="5000">
    <slide :index="0">
     <figure>
       <figcaption>
            Charlotte
        </figcaption>
        <img src="@/assets/images/carla.jpg">
        
      </figure>
    </slide>
    <slide :index="1">
      <img src="@/assets/images/charlotte.jpg"/>
    </slide>
    <slide :index="2">
      <img src="@/assets/images/frieda.jpg"/>
    </slide>
    <slide :index="3">
      <img src="@/assets/images/mee-2179-2.jpg"/>
    </slide>
    <slide :index="4">
      <img src="@/assets/images/carla.jpg"/>
    </slide>
  </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style>
.figcaption{
  position: absolute;
}
.slide{
  border-radius: 5px;
}
</style>