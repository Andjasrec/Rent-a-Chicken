<template>
  <div>
      <h2>Live Cam</h2>
      <iframe class="video-container" src="https://www.youtube.com/embed/iJQbSvO15vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.video-container {
    margin-bottom: 61px;
    position: relative;
    padding-top: 0;
    overflow: hidden;
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
.ytp-title-channel-logo {
    background-image: none;
    
    width: 0%;
    height: 0%;
}
</style>