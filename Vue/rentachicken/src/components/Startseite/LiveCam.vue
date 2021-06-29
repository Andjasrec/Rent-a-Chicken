<template>
  <div>
      <h2>Live Cam</h2>
      <div class="special"><b-button v-on:click="Live" >LIVE</b-button></div>
      <img src="@/assets/images/Chicks.jpg" class="image" v-if="bild">
      <Video v-if="video" class="video"></Video>
  </div> 
</template>

<script>
import Video from '../Video.vue'
export default {
    data (){
        return{
            video: undefined,
            bild: true,
        }
    },
    components: { Video },
    methods:{
    Live(){
        this.bild = undefined
        this.video = true
    }
}
}
</script>

<style>
.image{
    position: relative;
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
.special{
    z-index: 1;
left: 318px;
top: 623px;
    position: fixed;
}

</style>