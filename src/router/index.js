import React from 'react';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // bottom navbar library
import {createStackNavigator} from '@react-navigation/stack'; // bottom navbar library
import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';
// tab navbar
const RootStack = createStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={'Home'}
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={'Story'}
        component={StoryScreen}
        // options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default Router;
