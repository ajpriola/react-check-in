import * as Actions from '../constants/ActionTypes';

export const addPatient = patient => ({
  type: Actions.ADD_PATIENT,
  patient
});

export const servingPatient = patient => ({
  type: Actions.SERVING_PATIENT,
  patient
});

export const servePatient = patient => ({
  type: Actions.SERVE_PATIENT,
  patient
});

export const populatePatientList = patients => ({
  type: Actions.PATIENT_LIST,
  patients
});

export const finishPatient = patient => ({
  type: Actions.FINISH_PATIENT,
  patient
});
