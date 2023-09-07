import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import ReduxCounter from './Components/ReduxCounter';

const ReduxFunctionBased = () => {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
};
export default ReduxFunctionBased;
