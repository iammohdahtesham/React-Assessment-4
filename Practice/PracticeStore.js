import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {PracticeReducer} from './PracticeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter: PracticeReducer,
});

const PracticeStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default PracticeStore;
