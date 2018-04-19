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

export const removePatient = patient => ({
  type: 'REMOVE_PATIENT',
  patient
});

export const populatePatientList = patients => ({
  type: 'PATIENT_LIST',
  patients
});
