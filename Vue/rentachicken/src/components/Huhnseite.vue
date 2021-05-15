<template>
  <div>
      <div class="Überschrift">Hallo ich bin Frieda!</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="charakter">Charakter</div>
    <div class="fließtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.</div>







  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body{
    overflow-y: scroll;
    font-family: Roboto;
}
.Überschrift{
position: absolute;
left: 3.86%;
right: 31.4%;
top: 21.24%;
bottom: 77.22%;

font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 16px;
/* or 67% */

letter-spacing: 0.4px;

color: #E58F4D;
}
.charakter{
position: absolute;
left: 3.86%;
right: 75.12%;
top: 35.33%;
bottom: 63.64%;

font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 16px;
/* identical to box height, or 89% */

letter-spacing: 0.4px;

color: #E58F4D;

}
.fließtext{
position: absolute;
left: 4.35%;
right: 8.7%;
top: 37%;
bottom: 51.16%;

/* Body */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
/* or 114% */

letter-spacing: 0.4px;

color: #000000;
}
</style>