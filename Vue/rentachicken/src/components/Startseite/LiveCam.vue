<template>
  <div>
      <h2>Live Cam</h2>
      <b-button v-on:click="Live">LIVE</b-button>
      <img src="@/assets/images/Chicks.jpg">
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

</style>