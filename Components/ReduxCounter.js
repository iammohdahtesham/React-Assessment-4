/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increase, decrease} from '../Redux/Actions/counterAction';
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);

  const decreseTheValue = () => {
    dispatch(decrease());
  };
  const increaseTheValue = () => {
    dispatch(increase());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={decreseTheValue}>
        -
      </Text>
      <Text style={styles.text}>{value}</Text>

      <Text style={styles.text} onPress={increaseTheValue}>
        +
      </Text>
    </View>
  );
};
export default ReduxCounter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 60,
  },
});
