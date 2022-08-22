import { CHANGE_SIGNAL } from './actionsCreator';

const initialState = {
  signal: { color: 'red' },
}

function reducerTraffic(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {
        ...state,
        signal: { ...state.signal, color: action.payload }
      };
    default:
      return state;
  }
}

export default reducerTraffic;
