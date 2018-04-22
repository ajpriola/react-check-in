import { populatePatientList, servingPatient } from '../actions';
import { convertPatientWithDate } from '../util';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8081');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'PATIENT_LIST':
        dispatch(
          populatePatientList(data.patients.map(patient => convertPatientWithDate(patient)))
        );
        break;
      case 'SERVING_PATIENT':
        dispatch(servingPatient(convertPatientWithDate(data.patient)));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
