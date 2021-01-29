/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar, Image, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // bottom navbar
import {createStackNavigator} from '@react-navigation/stack'; // header
import logo from './src/assets/images/logo.png';
// bottom navbar Screen routers
import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import ProfileScreen from './src/screens/ProfileScreen';
//import NotificationScreen from './src/screens/NotificationScreen';
import Shop from './src/screens/Shop';

// bottom navbar Icons from react-native-vector-icons directory
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePicture from './src/components/ProfilePicture';
// header navbar Icons from react-native-vector-icons directory
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const App: () => React$Node = () => {
  // tab navbar
  const Tab = createBottomTabNavigator();
  // header
  const HomeStack = createStackNavigator();
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerRight: () => (
              <>
                <EvilIcons name={'heart'} size={30} />
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
            headerLeft: () => (
              <Image
                source={logo}
                resizeMode="contain"
                style={{width: 135, marginHorizontal: 10}}
              />
            ),
          }}
        />
      </HomeStack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Foundation name={'home'} size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name={'search'} size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return (
                <FontAwesome name={'plus-square-o'} size={size} color={color} />
              );
            }
            if (route.name === 'Shop') {
              return (
                <MaterialCommunityIcons
                  name={'shopping-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'Profile') {
              return (
                <ProfilePicture
                  color={'#fff'}
                  size={25}
                  uri="https://avatars.githubusercontent.com/u/59163273?s=460&u=242f615145270e055608d4ddd65fc9981dfb0785&v=4"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
