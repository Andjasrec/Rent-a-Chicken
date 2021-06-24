<template>
  <div>
      <div class="kasten"></div>
 
  </div>
</template>
<script>
import router from './../router'

export default {
    props: {
  },
  methods: {
    changeToA: function () {
      router.push({ name: 'Temperatur' })
    },
    changeToB: function () {
      router.push({ name: 'Feuchtigkeit' })
    }
  }

}
</script>

<style>
.kasten{
    position: absolute;
left: 4.11%;
right: 4.59%;
top: 33.93%;
bottom: 38.5%;

background: #FFFFFF;
border-radius: 6px;
}
</style>
