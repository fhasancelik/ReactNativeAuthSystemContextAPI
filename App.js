import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {initializeApp} from '@react-native-firebase/app';

import { ProductsProvider } from './src/context/ProductsProvider';


const App = () => {





  return (
  <ProductsProvider>
      
      < AppNavigator />
  </ProductsProvider>
    
  )
};

export default App;
