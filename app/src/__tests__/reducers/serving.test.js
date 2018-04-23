import serving from '../../reducers/serving';

describe('Serving reducer', () => {
  it('should return the initial empty state', () => {
    expect(serving(undefined, {})).toEqual(null);
  });

  it('should handle SERVING_PATIENT and store the patient', () => {
    const patient = {
      firstName: 'First',
      lastName: 'Tester',
      email: 'test@email.com',
      description: 'Test single',
      id: '0',
      date: new Date()
    };
    expect(
      serving(undefined, {
        type: 'SERVING_PATIENT',
        patient
      })
    ).toEqual(patient);
  });
});
