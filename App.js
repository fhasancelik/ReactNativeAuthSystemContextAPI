import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {initializeApp} from '@react-native-firebase/app';


const firebaseConfig = {



};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
const App = () => {


  return <AppNavigator />;
};

export default App;
