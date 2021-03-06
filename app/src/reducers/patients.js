import { PATIENT_LIST } from '../constants/ActionTypes';

const patients = (state = [], action) => {
  switch (action.type) {
    case PATIENT_LIST:
      return action.patients;
    default:
      return state;
  }
};

export default patients;
