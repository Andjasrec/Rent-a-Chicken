<template>
  <div>
    <div class="Überschrift">Willkommen bei Rent a Chicken!</div>
    <div><img src="@/assets/illutyp.png" alt=""></div>
    <div class="fließtext"  >Sobald Dein Huhn Eier gelegt hat, kannst du diese ganz einfach und bequem bei uns abholen</div>
    <button>LOS GEHT´S</button>

  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body{
background: #E19962;
color: #FFFFFF;
font-family: Roboto;
}


.Überschrift{
position: absolute;
left: 3.86%;
right: 34.54%;
top: 12.17%;
bottom: 78.91%;

font-style: normal;
font-weight: 500;
font-size: 34px;
line-height: 40px;
letter-spacing: 0.15px;
}
.fließtext{
position: absolute;
left: 20.53%;
right: 21.5%;
top: 59.71%;
bottom: 26.23%;

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
/* or 171% */

text-align: center;
letter-spacing: 0.15px;}
button{
position: absolute;
left: 38.65%;
right: 32.85%;
top: 84.04%;
bottom: 11.94%;

background: #54704C;
border-radius: 4px;
border: 0cm;

box-shadow: 0cm;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */
letter-spacing: 1.25px;
text-transform: uppercase;
color: #FFFFFF;
}
img{
position: absolute;
width: 205px;
height: 391px;
left: 117px;
top: 230px;
}
</style>