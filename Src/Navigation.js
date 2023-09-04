import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data1 from './screens/Data1';
import Data2 from './screens/Data2';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Data1" component={Data1} />
      <Tab.Screen name="Data2" component={Data2} />
    </Tab.Navigator>
  );
};
const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;
