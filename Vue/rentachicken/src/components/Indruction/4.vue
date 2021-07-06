<template>
<div>
<b-container>
  <b-col>
    <b-row>
      <h1>Ei Abholung</h1>
    </b-row>
  </b-col>
  <b-col>
    <b-row>
      <div class="größe">
      <img src="@/assets/images/fahrrad.svg"/>
      </div>
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
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* or 171% */

text-align: center;
letter-spacing: 0.15px;

color: #FFFFFF;
}
.btn{   
  width:100%;
  height: 36px;
  left: 18px;
  top: 276px;

  background: #4a7140;
  border-radius: 3px;
  border: 0cm;

  font-style: normal;
  font-weight: normal;
  color: white;
  font-size: 18px;

  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col{
  padding:0;
}
.größe{

  height: 365px;
  width: 303px;
}
</style>