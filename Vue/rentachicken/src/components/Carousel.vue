<template>
  <div>
    
  <carousel-3d :disable3d="true" :space="150" :autoplay="true" :autoplay-timeout="5000" :width="120" :height="120">
    <slide :index="0">
      <img src="@/assets/images/carla.jpg">
     <figure>
       <figcaption>
            Charlotte
        </figcaption>
      </figure>
    </slide>
    <slide :index="1">
      <img src="@/assets/images/charlotte.jpg"/>
      <figure>
       <figcaption>
            Antonia
        </figcaption>
      </figure>
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
.carousel-3d-container figcaption {
  position: absolute;
  bottom: 0;
left: 0;
margin-left: 6px;
margin-bottom: 6px ;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.4px;
color: #FFFFFF;
}
.carousel-3d-slide{
  border-radius: 5px;
  border-color:transparent;

}
</style>