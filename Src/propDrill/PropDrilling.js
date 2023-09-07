import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Component1 from './Component1';

const PropDrill = () => {
  const name1 = 'danish';
  return (
    <SafeAreaView>
      <Text>PropDrill</Text>
      <Component1 name={name1}/>
    </SafeAreaView>
  );
};
export default PropDrill;
