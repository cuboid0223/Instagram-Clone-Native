import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; // header navigation

import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png';
// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerRight: () => (
            <>
              <AntDesign name={'hearto'} size={25} />
              <MaterialCommunityIcons name={'facebook-messenger'} size={25} />
            </>
          ),
          headerRightContainerStyle: {
            marginRight: 15,
            width: 80,
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'space-around',
          },
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 135, height: 50, marginHorizontal: 10}}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
