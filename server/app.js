const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8081 });

let patients = [];
let currentlyServing = null;

const broadcast = (data, ws) => {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

server.on('connection', (ws) => {
  ws.send(
    JSON.stringify({
      type: 'PATIENT_LIST',
      patients
    })
  );

  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_PATIENT': {
        index = patients.length;
        data.patient.id = index + 1;
        patients.push(data.patient);
        console.log(`Adding new patient: ${JSON.stringify(data.patient)}`);
        broadcast({
          type: 'PATIENT_LIST',
          patients
        });
        break;
      }
      case 'SERVE_PATIENT':
        currentlyServing = data.patient;
        patients = patients.filter(patient => patient.id !== currentlyServing.id);
        broadcast({
          type: 'SERVING_PATIENT',
          currentlyServing
        });
        broadcast({
          type: 'PATIENT_LIST',
          patients
        });
        break;
    }
  });

  ws.on('close', () => {
    console.log('connection closed');
  });

  ws.on('error', (error) => {
    console.error(error);
  });
});
