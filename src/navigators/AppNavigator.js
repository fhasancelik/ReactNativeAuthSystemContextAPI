import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import { ProductsProvider } from '../context/ProductsProvider'
import MyAddress from '../Screens/MyAddress'
import AddAddress from '../Screens/AddAddress'

const Stack =createStackNavigator()
const AppNavigator = () => {
  return (
<ProductsProvider>
<NavigationContainer>
    <Stack.Navigator>
           <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}/>  
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />   
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />  
         <Stack.Screen name='AddAddress' component={AddAddress} options={{headerShown:false}} />
        <Stack.Screen name='MyAddress' component={MyAddress} options={{headerShown:false}} />
    </Stack.Navigator>
   </NavigationContainer>
</ProductsProvider>
  )
}

export default AppNavigator