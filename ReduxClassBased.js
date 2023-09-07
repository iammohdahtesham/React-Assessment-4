import React from 'react';
import Counter from './Components/Counter';
import {Provider} from 'react-redux';
import store from './Redux/store';
export default class ReduxClassBased extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
