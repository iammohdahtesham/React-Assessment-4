import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Data1 from '../screens/Data1';
import Data2 from '../screens/Data2';
import HomeIcon from '../navigation/HomeIcon.svg';
import Profile from '../navigation/Profile.svg';
import ReduxClassBased from '../../ReduxClassBased';
import ReduxFunctionBased from '../../ReduxFunctionBased';
import PracticeRedux from '../../PracticeRedux';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Class Based"
        component={ReduxClassBased}
        options={{tabBarIcon: () => <HomeIcon />}}
      />
      <Tab.Screen
        name="Function Based"
        component={ReduxFunctionBased}
        options={{tabBarIcon: () => <Profile />}}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeRedux}
        options={{tabBarIcon: () => <Profile />}}
      />
    </Tab.Navigator>
  );
};
export default TabNav;
