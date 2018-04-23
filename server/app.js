const express = require('express');
const app = express();
const socket = require('socket.io');

const port = 8081;

let patients = [];
let currentlyServing = null;

server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

io = socket(server);

io.on('connection', (socket) => {
  broadcastState();

  socket.on('ADD_PATIENT', (data) => {
    addNewPatient(data);
    broadcastList();
  });

  socket.on('SERVE_PATIENT', (data) => {
    currentlyServing = data;
    patients = patients.filter(patient => patient.id !== currentlyServing.id);
    broadcastState();
  });

  socket.on('FINISH_PATIENT', (data) => {
    if (currentlyServing.id === data.id) {
      currentlyServing = null;
      broadcastCurrent();
    }
  });

  socket.on('error', (error) => {
    console.log(error);
  })
});

function addNewPatient(data) {
  const id = patients.length;
  patients.push({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    description: data.description,
    id: id,
    date: Date.now()
  });
}

function broadcastState() {
  broadcastCurrent();
  broadcastList();
}

function broadcastList() {
  io.sockets.emit('PATIENT_LIST', patients);
}

function broadcastCurrent() {
  io.sockets.emit('SERVING_PATIENT', currentlyServing);
}
