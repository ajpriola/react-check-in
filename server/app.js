const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 1014 });

const patients = [];

const broadcast = (data, ws) => {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

server.on('connection', (ws) => {
  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_PATIENT': {
        index = patients.length;
        patients.push({ name: data.name, id: index + 1 });
        ws.send(
          JSON.stringify({
            type: 'PATIENT_LIST',
            patients
          })
        );
        broadcast(
          {
            type: 'PATIENT_LIST',
            patients
          },
          ws
        );
        break;
      }
    }
  });
});
