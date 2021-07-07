<template>
  <div>
      <h2>Live Cam</h2>
      <div class="video-container">
      <iframe class="video" src="https://www.youtube.com/embed/jBlH6ckHEwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  </div> 
</template>

<script>
export default {
    data (){
        return{

        }
    },
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
.video {
  margin-bottom: 61px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
    margin-bottom: 61px;
}
.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

</style>