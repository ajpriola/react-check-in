const serving = (state = null, action) => {
  switch (action.type) {
    case 'SERVING_PATIENT':
      return action.patient;
    default:
      return state;
  }
};

export default serving;
