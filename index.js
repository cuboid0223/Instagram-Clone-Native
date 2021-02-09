/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './src/App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify'; // 2021/2/06
import config from './src/aws-exports'; // 2021/2/06
Amplify.configure(config); // 2021/2/06

AppRegistry.registerComponent(appName, () => App);
