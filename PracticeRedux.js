import React from 'react';
import {Provider} from 'react-redux';
import Practice from './Practice/Practice';
import PracticeStore from './Practice/PracticeStore';

const PracticeRedux = () => {
  return (
    <Provider store={PracticeStore}>
      <Practice />
    </Provider>
  );
};
export default PracticeRedux;
