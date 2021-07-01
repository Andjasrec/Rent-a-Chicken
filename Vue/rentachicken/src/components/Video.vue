<template>
<div class="video-container">
  <iframe class="video" src="https://www.youtube.com/embed/mljc6iEXKx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  
</template>

<script>

export default {

}
</script>

<style>
/* .video{ 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
} */

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
    margin-bottom: 61px;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>