const checkin = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return state.concat([
        action.patient
      ]);
    default:
      return state;
  }
};

export default checkin;
