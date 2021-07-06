<template>
  <div class="fläche">
      {{Eizahl}}
      <h2>
          Deine Eier
      </h2>
      <b-container class="border">
          <b-row class="abstand">
              <b-col>
                  Heute
              </b-col>
              <b-col>
                  Abholbereit
              </b-col>
              <b-col>
                    pro Woche
              </b-col>
          </b-row>
          <b-row>
              <b-col class="nebenzahl">
                Ø 1
              </b-col>
              <b-col class="wert">
              <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
      ></ICountUp>
              </b-col>
              <b-col class="nebenzahl">
                Ø 7
              </b-col>
          </b-row>
      </b-container>
      <br>
      <b-button
      v-on:click="modalclick" 
      ref="my-modal">
          Abholen
      </b-button>
      <modal v-if="modaldata" class="modal" :modaldata="modaldata" v-on:changemodal="updatemodal"></modal>
  </div>
</template>

<script>
import io from "socket.io-client";
import modal from '../modal.vue';
import ICountUp from 'vue-countup-v2';

export default {
  components: { 
    modal,
    ICountUp
  },
    data(){
        return{
        Eizahl: '...',
        modaldata:false,

        delay: 1000,
        endVal: 0,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        }
    },
mounted() {



    this.modaldata= false
    this.socket = io("http://localhost:3333");
    this.socket.on("connect", () => {
      console.log("CONNECTED!");
    });
    this.socket.emit('Eiabfrage')
    this.socket.on("Eicounter", (Eizahl) => {
      //console.log(Eizahl)

      this.Eizahl = Eizahl;
      
      //instance.update(this.Eizahl);
    });
  },
  methods:{
    onReady: function(instance,) {
        instance.update(this.Eizahl);
      },
    modalclick(){
      this.modaldata = true
    },
    updatemodal(){
      this.modaldata= undefined
    },
  },
  watch: {
    Eizahl:  function(instance,) {
      //console.log(instance)
        instance.update(this.Eizahl);
  }
}
}
</script>

<style scoped>
.border{
border: 1px solid #4A7140;
box-sizing: border-box;
border-radius: 6px;
}
.col{

align-items: center;
text-align: center;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.15px;
color: #434343;
}
.btn{
    
  width:100%;
  height: 50px;
  left: 18px;
  top: 276px;

  background: #4a7140;
  border-radius: 3px;
  border: 0cm;

  font-style: normal;
  font-weight: normal;
  color: white;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wert{
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 20px;
/* or 25% */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15px;

/* orange1 */
justify-content: center;
color: #E58F4D;
height: 61px;
margin-bottom: 11px;
margin-top:11px;
}
.abstand{
  margin-top: 14px;
}
.nebenzahl{
  justify-content: center;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 20px;
/* or 25% */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15px;

/* orange1 */
color: #434343;

height: 61px;
margin-bottom: 11px;
margin-top:11px;

}
</style>
