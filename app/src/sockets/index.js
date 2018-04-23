import io from 'socket.io-client';
import { populatePatientList, servingPatient, finishPatient } from '../actions';
import { convertPatientWithDate } from '../util';
import { PATIENT_LIST, SERVING_PATIENT, FINISH_PATIENT } from '../constants/ActionTypes';

const setupSocket = (dispatch) => {
  const socket = io('localhost:8081');

  socket.on(PATIENT_LIST, (data) => {
    dispatch(populatePatientList(data.map(patient => convertPatientWithDate(patient))));
  });

  socket.on(SERVING_PATIENT, (data) => {
    dispatch(servingPatient(convertPatientWithDate(data)));
  });

  socket.on(FINISH_PATIENT, (data) => {
    dispatch(finishPatient(data));
  });

  return socket;
};

export default setupSocket;
