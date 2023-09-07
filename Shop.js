import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
const Shop = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>count</Text>
      <TouchableOpacity>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Shop;
