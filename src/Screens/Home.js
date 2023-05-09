import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import auth from '@react-native-firebase/auth';
import MyButton from '../components/MyButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../components/Loader';

const Home = () => {

const navigation=useNavigation()




  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Kullanıcı oturum açtı:', user.email);
      
      } else {
        console.log('Kullanıcı oturum açmadı.');
        navigation.navigate('Login')
      }
    });

    return () => unsubscribe();
  }, []);

  return (
<SafeAreaView>
<View>
      <Text>Home</Text>
     
      <MyButton title={'signout'} onPress={()=>{
        auth()
        .signOut()
        .then(() => {
          console.log('Oturum kapatıldı.');
        })
        .catch((error) => {
          console.log('Oturum kapatma hatası:', error);
        });
      }}/>
    </View>
</SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})