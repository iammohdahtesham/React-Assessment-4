import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from '../Redux/Reducers/counterReducer';
import {applyMiddleware, createStore, combineReducers} from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
});
// export default createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
