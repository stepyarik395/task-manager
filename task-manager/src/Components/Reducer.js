const INITIAL_STATE = {};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN__MODAL':
      return {};
    default:
      return state;
  }
}

export default reducer;
