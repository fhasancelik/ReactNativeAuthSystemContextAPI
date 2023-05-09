import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {initializeApp} from '@react-native-firebase/app';


const firebaseConfig = {

  apiKey: "AIzaSyCDMCiBX7NQB-uWjnvf49_WSZy3Afu7Qgg",
  authDomain: "ecommerce-57334.firebaseapp.com",
  projectId: "ecommerce-57334",
  storageBucket: "ecommerce-57334.appspot.com",
  messagingSenderId: "519606646098",
  appId: "1:519606646098:web:aa38c419463a83a591768b"

};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
const App = () => {


  return <AppNavigator />;
};

export default App;
