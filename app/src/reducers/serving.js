import { SERVING_PATIENT, FINISHED_PATIENT } from '../constants/ActionTypes';

const serving = (state = null, action) => {
  switch (action.type) {
    case SERVING_PATIENT:
      return action.patient;
    case FINISHED_PATIENT:
      return state.id === action.patient.id ? null : state;
    default:
      return state;
  }
};

export default serving;
