import {View, Text, Image,Button} from 'react-native';




import React, {useEffect,useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import fetchProducts from '../services/getProduct';
const Splash = () => {
const navigation = useNavigation();
useEffect(() => {
  const unsubscribe = auth().onAuthStateChanged(user => {
    if (user) {
      fetchProducts()
      console.log('Kullanıcı oturum açtı:', user.email);
    setTimeout(()=>{
      navigation.navigate('Home')
    },3000)
    } else {
      console.log('Kullanıcı oturum açmadı.');
    
      setTimeout(()=>{
        navigation.navigate('Login')
      },3000)
    }
  });

  return () => unsubscribe();
}, []);



  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
        <Image style={{height:100,width:100,borderRadius:50}} source={require('../assets/FCoder.png')}/>
   
      </View>
    </SafeAreaView>
  );
};

export default Splash;
