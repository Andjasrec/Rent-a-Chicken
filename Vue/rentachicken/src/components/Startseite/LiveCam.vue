<template>
  <div>
      <h2>Live Cam</h2>
      <b-button v-on:click="Live">LIVE</b-button>
      <img src="@/assets/images/Chicks.jpg" class="image">
      <Video v-if="button"></Video>
  </div> 
</template>

<script>
import Video from '../Video.vue'
export default {
    data (){
        return{
            button : false
        }
    },
    components: { Video },
    methods:{
    Live(){
        this.button = true
    }
}
}
</script>

<style>
.image{
    width: 377px;
height: 210.44px;
    border-radius: 3px;
}
.btn{
    background: #4A7140;
border-radius: 3px;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;

color: #FFFFFF;
width: 64px;
height: 36px;
  border: 0cm;
}
</style>