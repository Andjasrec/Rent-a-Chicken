<template>
  <div>
      <div>
          Deine Eier
      </div>
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

<style>
.container{
    border: 1px solid #4A7140;
    box-sizing: border-box;
    border-radius: 6px;
}
.col{
    display: block;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.row {
    display: flex;
    flex-wrap: nowrap;
}

</style>