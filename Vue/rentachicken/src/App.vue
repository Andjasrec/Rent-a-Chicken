<template>
  <div>
   <!--<Huhnseite></Huhnseite>-->
    {{Eizahl}}
   <!--<Test></Test>-->
    
  </div>
</template>

<script>
// import von anderen Seiten
//import Test from './components/Test.vue'
//import Huhnseite from './components/Huhnseite.vue'

//import von libraries
import io from 'socket.io-client'

export default {

components:{
  //Test,
  //Huhnseite,
},
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
      console.log(Eizahl)
      this.Eizahl = Eizahl
    })
},
methods:{},
}
</script>

<style>

</style>
