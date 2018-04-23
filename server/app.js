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

  ws.send(
    JSON.stringify({
      type: 'SERVING_PATIENT',
      patient: currentlyServing
    })
  );

  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_PATIENT': {
        if (!data.patient) break;
        index = patients.length;
        data.patient.id = index + 1;
        data.patient.date = Date.now();
        patients.push(data.patient);
        broadcast({
          type: 'PATIENT_LIST',
          patients
        });
        break;
      }
      case 'SERVE_PATIENT':
        if (!data.patient) break;
        currentlyServing = data.patient;
        patients = patients.filter(patient => patient.id !== currentlyServing.id);
        broadcast({
          type: 'SERVING_PATIENT',
          patient: currentlyServing
        });
        broadcast({
          type: 'PATIENT_LIST',
          patients
        });
        break;
      case 'FINISH_PATIENT':
        if (!currentlyServing || !data.patient) break;
        if (currentlyServing.id === data.patient.id) {
          currentlyServing = null;
          broadcast({
            type: 'SERVING_PATIENT',
            patient: null
          });
        }
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
