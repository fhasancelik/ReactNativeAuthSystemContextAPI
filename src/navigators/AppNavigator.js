import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Profile from '../Screens/Profile'




const Stack =createStackNavigator()
const AppNavigator = () => {
  return (

<NavigationContainer>
    <Stack.Navigator>
           <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}/>  
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />   
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}} />  

    
    </Stack.Navigator>
   </NavigationContainer>

  )
}

export default AppNavigator