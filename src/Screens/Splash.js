import {View, Text, Image,Button} from 'react-native';




import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
const Splash = () => {
const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 9000);
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
