import io from 'socket.io-client';
import { populatePatientList, servingPatient } from '../actions';
import { convertPatientWithDate } from '../util';
import { PATIENT_LIST, SERVING_PATIENT } from '../constants/ActionTypes';

const setupSocket = (dispatch) => {
  const url = process.env.REACT_APP_SOCKET_URL;
  const socket = io(url);

  socket.on(PATIENT_LIST, (data) => {
    dispatch(populatePatientList(data.map(patient => convertPatientWithDate(patient))));
  });

  socket.on(SERVING_PATIENT, (data) => {
    dispatch(servingPatient(convertPatientWithDate(data)));
  });

  return socket;
};

export default setupSocket;
