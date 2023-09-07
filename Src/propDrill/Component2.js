import React from 'react';
import {View, Text} from 'react-native';
import Component3 from './Componenet3';

const Component2 = ({name}) => {
  return (
    <>
      <View>
        <Text>Component2</Text>
        <Component3 name={name} />
      </View>
    </>
  );
};
export default Component2;
