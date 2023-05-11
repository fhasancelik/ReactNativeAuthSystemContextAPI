import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
const Profile = () => {
  return (
    <View>
   <TouchableOpacity onPress={()=>{
    auth()
    .signOut()
    .then(() => {
      console.log('Oturum kapatıldı.');
    })
    .catch((error) => {
      console.log('Oturum kapatma hatası:', error);
    });
   }}>
   <Text>Profile</Text>
   </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})