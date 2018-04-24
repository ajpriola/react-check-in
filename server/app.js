const express = require('express');
const app = express();
const socket = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

const Patient = require('./patient');

mongoose.Promise = global.Promise;

const port = process.env.PORT || 3000;

let patients = [];
let currentlyServing = null;

const mapPatient = (patient) => {
  return {
    id: patient._id,
    firstName: patient.firstName,
    lastName: patient.lastName,
    email: patient.email,
    description: patient.description,
    date: patient.createdAt
  }
};

mongoose.connect(process.env.DB);
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');

  Patient.find({}).then((results) => {
    patients = results.map(mapPatient);
    broadcastList();
  });
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => res.send('Check In Server is running'));
app.get('/patients', (req, res) => {
  Patient.find({}).then(result => res.json(result));
});

io = socket(server);

io.on('connection', (socket) => {
  broadcastState();

  socket.on('ADD_PATIENT', (data) => {
    addNewPatient(data);
  });

  socket.on('SERVE_PATIENT', (data) => {
    console.log(`SERVE_PATIENT with ${JSON.stringify(data)}`);
    servePatient(data);
  });

  socket.on('FINISH_PATIENT', (data) => {
    finishPatient(data);
  });

  socket.on('error', (error) => {
    console.log(error);
  })
});

function finishPatient(data) {
  if (currentlyServing.id == data.id) {
    currentlyServing = null;
    broadcastCurrent();
  }
}

function servePatient(data) {
  Patient.findByIdAndRemove(data.id).then((result) => {
    if (!result) return;
    currentlyServing = mapPatient(result);
    patients = patients.filter((patient) => {
      return !patient.id.equals(currentlyServing.id);
    });
    broadcastState();
  }).catch((error) => {
    console.log(error);
  });
}

function addNewPatient(data) {
  let newPatient = new Patient({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    description: data.description
  });

  newPatient.save().then((result) => {
    patients.push(mapPatient(result));
    broadcastList();
  }).catch((error) => {
    console.log(error);
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
