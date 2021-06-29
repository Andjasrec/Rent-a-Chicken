var mqtt = require('mqtt')
var mqttclient  = mqtt.connect('mqtt://mqtt.hfg.design')
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3333;
const cors = require('cors');
// Variablen
baseTopic = "/RentaChicken/Eicounter"
Eizahl = 0

mqttclient.on('connect', function () {
    mqttclient.subscribe('/RentaChicken/Eicounter', function (err) {
    if (!err) {
        console.log("Verbunden mit Mqtt");
    }
  })
})

io.on('connection', function (socket) {
  console.log("Connected to Client: " + socket.id);

  socket.on("eierabgeholt",(message) => {
    Eizahl = Eizahl - message
    io.emit("Eicounter", Eizahl)
  })

  socket.on("Eiabfrage", function (){
    io.emit("Eicounter", Eizahl)
  })
}
)

mqttclient.on('message', function (topic, message) {
  //console.log(topic+": "+message.toString())
  if(topic === baseTopic) {
        //console.log(JSON.parse(message.toString())) 
        Eizahl++
        //console.log(Eizahl)
        io.emit("Eicounter", Eizahl)
      
  }
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

