import { populatePatientList, servingPatient } from '../actions';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8081');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'PATIENT_LIST':
        dispatch(populatePatientList(data.patients));
        break;
      case 'SERVING_PATIENT':
        dispatch(servingPatient(data.patient));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
