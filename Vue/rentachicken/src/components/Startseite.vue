<template>
  <div>
    
    <div class="Überschrift">
    <div>Rent a Chicken</div>
  </div>
<div class="Überschrift2">Deine Eier</div>
<div class="kasten"></div>
<div class="Eizahl">{{Eizahl}}</div>

<b-button class="button" v-b-modal.modal-1>ABHOLEN</b-button>

  <b-modal class="modal" id="modal-1" title="BootstrapVue">
    <p class="my-4">Abholung</p>
  </b-modal>

<div class="Überschrift3">Hühner</div>
<div class="Überschrift4">Live Cam</div>
<button class="kastenlive">LIVE</button>
<div class="Heute">Heute</div>
<div class="Abholbereit">Abholbereit</div>
<div class="Woche">pro Woche</div>
<div class="navigation"></div>
<button class="home">Home</button>
<button class="wissen">Wissen</button>
<button class="wecker">Wecker</button>


<button class="MeineHuehner">Meine Hühner</button>
<button class="VermieteteHuehner">Vermietete Hühner</button>
<button class="FreieHuehner">Freie Hühner</button>
  
<img class= "carla" src="@/assets/images/carla.jpg" alt="">
<img class= "frieda" src="@/assets/images/frieda.jpg" alt="">
<img class= "charlotte" src="@/assets/images/charlotte.jpg" alt="">
<img class= "egg" src="@/assets/images/chicken.png" alt="">
 
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {

data(){
  return{
    socket: undefined,
    Eizahl: undefined
  }
},
mounted(){
  this.socket = io('http://localhost:3333')
  this.socket.on('connect', () => {
      console.log('CONNECTED!')
    })
    this.socket.on('Eicounter', (Eizahl) => {
      //console.log(Eizahl)
      this.Eizahl = Eizahl
    })
},
methods:{},
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
top: 11.72%;
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

.Eizahl{
position: absolute;
width: 79px;
height: 61px;
left: calc(50% - 79px/2 - 0.5px);
top: calc(50% - 61px/2 - 232.5px);

font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 20px;
/* or 25% */

display: flex;
align-items: center;
letter-spacing: 0.15px;
justify-content: center;

/* orange1 */

color: #E58F4D;
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
width: 64px;
height: 36px;
left: 318px;
top: 623px;

background: #4A7140;
border-radius: 3px;
border: 0cm;



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
top: 377px;
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
top: 377px;
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
top: 377px;
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

background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 
}
.wissen{
position: absolute;
left: 44.2%;
right: 45.89%;
top: 96.65%;
bottom: 1.12%;

font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;


letter-spacing: 0.15px;

color: #C4C4C4;

background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 
}
.wecker{
position: absolute;
left: 78.74%;
right: 10.63%;
top: 96.65%;
bottom: 1.12%;

font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;

letter-spacing: 0.15px;

color: #C4C4C4;

background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 
}

.carla{
position: absolute;
width: 120px;
height: 120px;
left: calc(50% - 120px/2 - 129px);
top: calc(50% - 120px/2 + 19px);


border-radius: 3px;
}

.frieda{
position: absolute;
width: 120px;
height: 120px;
left: calc(50% - 120px/2 + 18px);
top: calc(50% - 120px/2 + 19px);


border-radius: 3px;
}

.charlotte{
position: absolute;
width: 120px;
height: 120px;
left: 312px;
top: 407px;


border-radius: 3px;
}

.egg{
position: absolute;
width: 24px;
height: auto;
left: 73.46px;
top: 842px;

/*transform: matrix(-1, 0, 0, 1, 0, 0);*/
}

.modal {
  position: absolute;
left: 4.11%;
right: 4.59%;
top: 33.93%;
bottom: 38.5%;

background: #FFFFFF;
border-radius: 6px;
}

</style>