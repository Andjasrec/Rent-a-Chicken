<template>
  <div>
      <h1>Rent a Chicken</h1>
      <div>
          <DeineEier></DeineEier>  
      </div> 
        <div>
        <Hühner></Hühner>
        </div>
<div>
    <LiveCam></LiveCam>
</div>
  </div>
</template>

<script>
import DeineEier from '../Startseite/DeineEier.vue'
import Hühner from '../Startseite/Hühner.vue'
import LiveCam from '../Startseite/LiveCam.vue'
export default {
components: {
    DeineEier,
    Hühner,
    LiveCam
}
}
</script>

<style>

</style>