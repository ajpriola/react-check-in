export const addPatient = patient => ({
  type: 'ADD_PATIENT',
  patient
});

export const servingPatient = patient => ({
  type: 'SERVING_PATIENT',
  patient
});

export const servePatient = patient => ({
  type: 'SERVE_PATIENT',
  patient
});

export const populatePatientList = patients => ({
  type: 'PATIENT_LIST',
  patients
});

export const finishPatient = patient => ({
  type: 'FINISH_PATIENT',
  patient
});
