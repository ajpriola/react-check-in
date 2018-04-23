import { populatePatientList, servingPatient, finishPatient } from '../actions';
import { convertPatientWithDate } from '../util';
import { PATIENT_LIST, SERVING_PATIENT, FINISH_PATIENT } from '../constants/ActionTypes';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8081');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case PATIENT_LIST:
        dispatch(
          populatePatientList(data.patients.map(patient => convertPatientWithDate(patient)))
        );
        break;
      case SERVING_PATIENT:
        dispatch(servingPatient(convertPatientWithDate(data.patient)));
        break;
      case FINISH_PATIENT:
        dispatch(finishPatient(data.patient));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
