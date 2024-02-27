import {combineReducers} from 'redux';
import modalSlice from './modal/modalSlice';

const rootReducers = combineReducers({
  modal: modalSlice,
});

export default rootReducers;
