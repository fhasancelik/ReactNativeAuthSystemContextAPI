import {View, Text, Image,Button} from 'react-native';




import React, {useContext, useEffect,useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import {ProductsContext} from '../context/ProductsProvider'

const Splash = () => {
const navigation = useNavigation();


const {userAvaible,setuserAvaible}=useContext(ProductsContext)

if(userAvaible==true ){
  setTimeout(()=>{
    navigation.navigate('Profile')
  },3000)


}else{
  setTimeout(()=>{
    navigation.navigate('SignUp')
  },2000)
}



  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
        <Image style={{height:100,width:100,borderRadius:50}} source={require('../assets/FCoder.png')}/>
   
      </View>
    </SafeAreaView>
  );
};

export default Splash;
