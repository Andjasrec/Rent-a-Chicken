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
              <b-col>
                {{Eizahl}}
              </b-col>
              <b-col>

              </b-col>
          </b-row>
      </b-container>
      <br>
      <b-button>
          Abholen
      </b-button>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
    data(){
        return{
            Eizahl: undefined
        }
    },
mounted() {
    this.socket = io("http://localhost:3333");
    this.socket.on("connect", () => {
      console.log("CONNECTED!");
    });
    this.socket.on("Eicounter", (Eizahl) => {
      //console.log(Eizahl)
      this.Eizahl = Eizahl;
    });
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
</style>
