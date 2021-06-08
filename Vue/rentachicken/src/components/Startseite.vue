<template>
  <div>
    <div class="Überschrift">
    <div>Rent a Chicken</div>
  </div>
<div class="Überschrift2">Deine Eier</div>
<div class="kasten"></div>
<div>{{Eizahl}}</div>
<button class="button">ABHOLEN</button>
<div class="Überschrift3">Hühner</div>
<div class="Überschrift4">Live Cam</div>
<button class="kastenlive">LIVE</button>
<div class="Heute">Heute</div>
<div class="Abholbereit">Abholbereit</div>
<div class="Woche">pro Woche</div>
<div class="navigation"></div>
<div class="Home">Home</div>
<hr>
<hr>
<button class="MeineHuehner">Meine Hühner</button>
<button class="VermieteteHuehner">Vermietete Hühner</button>
<button class="FreieHuehner">Freie Hühner</button>
  </div>
</template>

<script>
export default {
  props:[
    'Eizahl'
  ]
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/airbnb-cereal-app');
body {
  font-family: Airbnb Cereal App;
}
.Überschrift{
position: absolute;
left: 3.86%;
right: 31.4%;
top: 4.39%;
bottom: 92.78%;

font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 31px;
letter-spacing: 0.4px;

color: #E58F4D;
}
.Überschrift2{
position: absolute;
left: 4.11%;
right: 48.07%;
top: 8.24%;
bottom: 89.88%;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;

letter-spacing: 0.4px;

color: #E58F4D;
}
.kasten{
position: absolute;
left: 4.35%;
right: 4.35%;
top: 15.62%;
bottom: 70.42%;


border: 1px solid #4A7140;
box-sizing: border-box;
border-radius: 6px;
}
.button{
position: absolute;
width: 378px;
height: 50px;
left: 18px;
top: 276px;

background: #4A7140;
border-radius: 3px;
border: 0cm;

font-style: normal;
font-weight: normal;
color: white;
font-size: 18px;
line-height: 23px;

letter-spacing: 0.4px;
}
.Überschrift3{
  position: absolute;
width: 63px;
height: 23px;
left: 18px;
top: 349px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.4px;

color: #E58F4D;
}
.Überschrift4{
position: absolute;
left: 4.35%;
right: 47.83%;
top: 63.84%;
bottom: 33.48%;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;

letter-spacing: 0.4px;

color: #E58F4D;
}
.kastenlive{
position: absolute;
left: 76.57%;
right: 7.97%;
top: 50.12%;
bottom: 47.06%;


background: #4A7140;
border-radius: 3px;

font-style: normal;
font-weight: normal;
color: white;
font-size: 14px;
line-height: 16px;
text-align: center;

letter-spacing: 0.4px;
}
.Heute{
  position: absolute;
width: 41px;
height: 20px;
left: 59px;
top: 154px;

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;


letter-spacing: 0.15px;

color: #434343;
}

.FreieHuehner {
position: absolute;
width: 87px;
height: 16px;
left: 294px;
top: 396px;
text-align:left;
padding: 0;


font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.4px;
white-space: nowrap;
color: #C4C4C4;
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 

}

.VermieteteHuehner {
position: absolute;
width: 133px;
height: 17px;
left: 135px;
top: 396px;
text-align:left;
padding: 0;


font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.4px;
white-space: nowrap;
color: #C4C4C4;
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 

}

.MeineHuehner {
position: absolute;
width: 95px;
height: 17px;
left: 18px;
top: 396px;
text-align:left;
padding: 0;

font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.4px;
white-space: nowrap;
color: #4A7140;
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 

}

.Abholbereit{
  position: absolute;
width: 79px;
height: 20px;
left: 167px;
top: 154px;

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;

letter-spacing: 0.15px;

color: #434343;
}
.Woche{
position: absolute;
width: 72px;
height: 20px;
left: 299px;
top: 154px;

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
white-space: nowrap;
letter-spacing: 0.15px;
white-space: nowrap;
color: #434343;
}
hr{
position: absolute;
left: 90.58%;
right: 4.35%;
top: 7.25%;
bottom: 92.75%;

border: 1.5px solid #000000;
}

.navigation{
position: absolute;
width: 414px;
height: 65px;
left: 0px;
top: 831px;


background: #F9F8F6;
}
.home{
position: absolute;
left: 11.84%;
right: 79.95%;
top: 96.65%;
bottom: 1.12%;

font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;


letter-spacing: 0.15px;

color: #C4C4C4;
}

</style>