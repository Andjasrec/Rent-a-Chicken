<template>
<div>
<b-container>
  <b-col>
    <b-row>
      <h1> Willkommen bei Rent a Chicken</h1>
    </b-row>
  </b-col>
  <b-col>
    <b-row>
      <img src="@/assets/images/illutyp.png"/>
    </b-row>
  </b-col>
  <b-col>
    <b-row>
      <h2>Sobald Dein Huhn Eier gelegt hat, kannst du diese ganz einfach und bequem bei uns abholen</h2>
    </b-row>
  </b-col>
  <b-col>

        <b-button class="btn" v-on:click="Los">LOS GEHTS</b-button>
  </b-col>
</b-container>
</div>
</template>

<script>
import router from "./../../router"

export default{
  methods:{
    Los(){
      router.push({name:"Start"})
    }
  }
}
</script>
<style scoped>

h1 {
  font-style: normal;
font-weight: 500;
font-size: 34px;
line-height: 44px;
letter-spacing: 0.4px;

color: #FFFFFF;
width: 270px;
height: 88px;
margin-top: 0;
}
img {
  width: 303px;
height: auto;
    display: flex; 
    justify-content: center; 
    align-items: center;
}
h2{
  width: 303px;
height: 48px;
  font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

text-align: center;
letter-spacing: 0.15px;

color: #FFFFFF;
}
.btn{
    justify-content: center; 
    align-items: center;
    width: 118px;
height: 36px;
}
.col{
  padding:0;
}
</style>