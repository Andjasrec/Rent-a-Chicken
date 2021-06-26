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
.col{
    display: block;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.row {
    display: flex;
    flex-wrap: nowrap;
}
h1 {
color: #E58F4D;
font-weight: 500;
font-size: 24px;
line-height: 31px;
letter-spacing: 0.4px;
}
h2{
  font-weight: normal;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.4px;
color: #E58F4D;
}

</style>