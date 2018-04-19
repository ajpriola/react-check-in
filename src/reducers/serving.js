const serving = (state = null, action) => {
  switch (action.type) {
    case 'SERVING_PATIENT':
      return action.currentlyServing;
    default:
      return state;
  }
};

export default serving;
