const INITIAL_STATE = {
  nametask: ''
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD__NEW__TASK':
      return {
        nametask: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
