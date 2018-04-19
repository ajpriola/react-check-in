import { populatePatientList } from '../actions';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8081');

  socket.onmessage = (event) => {
    console.log(`got data from server: ${JSON.stringify(event.data)}`);
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'PATIENT_LIST':
        dispatch(populatePatientList(data.patients));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
