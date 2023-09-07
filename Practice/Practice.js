import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './CountAction';
const Practice = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter);
  // const incrementTheValue = () => {
  //   dispatch(increment());
  // };
  // const decremenmtTheValue = () => {
  //   dispatch(decrement());
  // };
  return (
    <View>
      <Text
        onPress={() => {
          dispatch(decrement());
        }}>
        Decrese the value
      </Text>
      <Text>{count}</Text>
      <Text
        onPress={() => {
          dispatch(increment());
        }}>
        Increse the value
      </Text>
    </View>
  );
};
export default Practice;
