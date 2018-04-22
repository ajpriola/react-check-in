import { populatePatientList, servingPatient } from '../../actions';

describe('servingPatient', () => {
  it('should create an action to serve a patient', () => {
    const patient = {
      firstName: 'First',
      lastName: 'Tester',
      email: 'test@email.com',
      description: 'Test single',
      id: 0,
      date: new Date()
    };
    const action = {
      type: 'SERVING_PATIENT',
      patient
    };
    expect(servingPatient(patient)).toEqual(action);
  });

  it('should create an action to serve no patient', () => {
    const patient = null;
    const action = {
      type: 'SERVING_PATIENT',
      patient
    };
    expect(servingPatient(patient)).toEqual(action);
  });
});

describe('populatePatientList', () => {
  it('should create an action to populate an empty patient list', () => {
    const patients = [];
    const action = {
      type: 'PATIENT_LIST',
      patients
    };
    expect(populatePatientList(patients)).toEqual(action);
  });

  it('should create an action to populate a list with one element', () => {
    const patients = [
      {
        firstName: 'First',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test single',
        id: 0,
        date: new Date()
      }
    ];
    const action = {
      type: 'PATIENT_LIST',
      patients
    };
    expect(populatePatientList(patients)).toEqual(action);
  });

  it('should create an action to populate a list with two elements', () => {
    const patients = [
      {
        firstName: 'First',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test first element',
        id: 0,
        date: new Date()
      },
      {
        firstName: 'Second',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test second element',
        id: 1,
        date: new Date()
      }
    ];
    const action = {
      type: 'PATIENT_LIST',
      patients
    };
    expect(populatePatientList(patients)).toEqual(action);
  });
});
