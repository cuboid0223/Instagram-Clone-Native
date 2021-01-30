/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
// bottom navbar Screen routers

const App = () => {
  // header

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default App;
