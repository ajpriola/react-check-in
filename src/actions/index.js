export const addPatient = patient => ({
  type: 'ADD_PATIENT',
  patient
});

export const removePatient = patient => ({
  type: 'REMOVE_PATIENT',
  patient
});
