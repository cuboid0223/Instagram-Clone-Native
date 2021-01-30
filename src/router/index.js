import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // bottom navbar library

// Screens
import HomeStackScreen from './home.routes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';
//import NotificationScreen from './src/screens/NotificationScreen';
import ShopScreen from '../screens/ShopScreen';

// bottom navbar Icons from react-native-vector-icons directory
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfilePicture from '../components/ProfilePicture'; // avatar in tab navbar
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// tab navbar
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
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
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Router;
