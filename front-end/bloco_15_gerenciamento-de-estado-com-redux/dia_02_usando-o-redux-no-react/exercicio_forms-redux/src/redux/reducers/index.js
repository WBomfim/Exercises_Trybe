import { combineReducers } from 'redux';
import pessoalReducer from './pessoalReducer';
import professionalReducer from './professionalReducer';

const rootReducer = combineReducers({
  pessoalReducer,
  professionalReducer,
});

export default rootReducer;
