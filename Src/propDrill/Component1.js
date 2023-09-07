import React from 'react';
import {View, Text} from 'react-native';
import Component2 from './Component2';

const Component1 = ({name}) => {
  return (
    <>
      <View>
        <Text>Component1 </Text>
        <Component2 name={name} />
      </View>
    </>
  );
};
export default Component1;
