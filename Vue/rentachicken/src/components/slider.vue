<template>
<!-- Make a div wrapped slider,set height and width -->
 <div style="width:100%;height:100vh">
      <slider ref="slider" :options="options">
          <slideritem>
            <eins></eins>
          </slideritem>
          <slideritem>
            <zwei></zwei>
          </slideritem>
          <slideritem>
            <drei></drei>
          </slideritem>
          <slideritem>
            <vier></vier>
          </slideritem>

          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
import eins from '../components/Indruction/1.vue'
import zwei from '../components/Indruction/2.vue'
import drei from '../components/Indruction/3.vue'
import vier from '../components/Indruction/4.vue'

export default {
   el: '#app',
   data () {
      return {
        //Slider configuration [obj]
        options: {
          currentPage: 0
        }
      }
    },
    components: {
      slider,
      slideritem,
      eins,
      zwei,
      drei,
      vier,
    }
}
</script>

<style scoped>
.slider-item{
    background-color:#E58F4D;
}
</style>