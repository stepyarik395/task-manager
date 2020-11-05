const INITIAL_STATE = {
  nametask: '',
  arrtask:["slim","spik","spik"]
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HANDLE__NAME__TASK':
      return {
        ...state,
        nametask: action.payload
      };
      case 'ADD__NEW__TASK':
      return {
        ...state,
        arrtask: state.arrtask.concat(state.nametask)
      };
    default:
      return state;
  }
}

export default reducer;
