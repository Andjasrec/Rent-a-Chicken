<template>
  <div>
      <h2>
          Deine Eier
      </h2>
      <b-container class="border">
          <b-row>
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
              <b-col>
                
              </b-col>
              <b-col class="wert">
                {{Eizahl}}
              </b-col>
              <b-col>

              </b-col>
          </b-row>
      </b-container>
      <br>
      <b-button
      v-on:click="modalclick" 
      v-on:changeBackground="changeBackground"
      ref="my-modal">
          Abholen
      </b-button>
      <modal v-if="modaldata" class="modal" :modaldata="modaldata" v-on:changemodal="updatemodal"></modal>
  </div>
</template>

<script>
import io from "socket.io-client";
import modal from '../modal.vue';

export default {
  components: { modal },
    data(){
        return{
            Eizahl: '...',
            modaldata:false
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
    });
  },
  methods:{
    modalclick(){
      this.modaldata = true
    },
    updatemodal(){
      this.modaldata= undefined
    },
    changeBackground(){
      this.$emit('changeBackgroundcolor')
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
.modal{
  position: absolute;
width: 378px;
height: 247px;
left: calc(50% - 378px/2 - 1px);
top: calc(50% - 247px/2 - 20.5px);

background: #FFFFFF;
border-radius: 6px;
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

color: #E58F4D;
width: 79px;
height: 61px;
margin-bottom: 11px;
margin-top:11px;
}
</style>
