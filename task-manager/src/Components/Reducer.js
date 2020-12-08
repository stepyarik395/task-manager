const INITIAL_STATE = {};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HANDLE__NAME__TASK':
      return {
        ...state,
        nametask: action.payload,
      };
    case 'ADD__NEW__TASK':
      return {
        ...state,
        arrtask: state.arrtask.concat(action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
