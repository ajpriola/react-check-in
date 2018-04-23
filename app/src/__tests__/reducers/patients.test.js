import patients from '../../reducers/patients';

describe('Patients reducer', () => {
  it('should return the initial empty state', () => {
    expect(patients(undefined, {})).toEqual([]);
  });

  it('should handle PATIENT_LIST and store the list', () => {
    const singlePatientList = [
      {
        firstName: 'First',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test single',
        id: '0',
        date: new Date()
      }
    ];

    expect(
      patients([], {
        type: 'PATIENT_LIST',
        patients: singlePatientList
      })
    ).toEqual(singlePatientList);

    const multiplePatientList = [
      {
        firstName: 'First',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test single',
        id: '0',
        date: new Date()
      },
      {
        firstName: 'Second',
        lastName: 'Tester',
        email: 'test@email.com',
        description: 'Test second element',
        id: '1',
        date: new Date()
      }
    ];

    expect(
      patients([], {
        type: 'PATIENT_LIST',
        patients: multiplePatientList
      })
    ).toEqual(multiplePatientList);
  });
});
