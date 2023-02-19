import { combineReducers } from 'redux';
import reducerTraffic from './reducerTraffic';
import reducerCar from './reducerCar';

const rootReducer = combineReducers({
  reducerTraffic,
  reducerCar,
});

export default rootReducer;
