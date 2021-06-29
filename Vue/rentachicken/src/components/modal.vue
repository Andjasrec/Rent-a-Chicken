<template>
<div class="wrapper">
  <div class="h1">Abholung</div>
  <div class="h2">Wie viele Eier hast du abgeholt?</div>
  
  <input class="inputfield" type="number" step="1" min="1" max="10" maxlength="2" v-model="eier">
  <br>
  <button class="ABBRECHEN" v-on:click="abbrechen">ABBRECHEN</button>
  <button class="ABHOLEN" v-on:click="Eierabgeholt">ABHOLEN</button>
  </div>
</template>

<script>
import io from "socket.io-client";

  export default {
    data() {
      return {
      eier: undefined
      }
    },
    mounted() {
    this.socket = io("http://localhost:3333");
  },
    methods: {
    abbrechen (){
        //console.log(this.modaldata)
        this.$emit('changemodal')
    },
    Eierabgeholt(){
        this.socket.emit('eierabgeholt',this.eier)
        this.$emit('changemodal')
    }

  },
  props: [
        'modaldata',
    ]
  }
</script>
<style>
.wrapper{
background: #ffffff;
border-radius: 6px;
 z-index: 500;
}
.h1 {
  margin:18px;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 16px;

letter-spacing: 0.4px;


color: #E58F4D;
}
.h2 {
margin:18px;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.4px;

color: #000000;

}
.inputfield {
  
  width: 40%;
  margin:18px;
background: #FFFFFF;
border: 1px solid #4A7140;
box-sizing: border-box;
border-radius: 4px;
display: block;
  -webkit-appearance: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  display: block;
  margin : 0 auto;
  font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.4px;

color: #000000;

}

.ABBRECHEN {
  margin:18px;
border: 1px solid #4D6A45;
box-sizing: border-box;
border-radius: 4px;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
background-color: white;

letter-spacing: 1.25px;
text-transform: uppercase;

color: #4D6A45;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.ABHOLEN {
background: #4A7140;
border-radius: 4px;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;

color: #FFFFFF;
 border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>