import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Main = () => {
  return (
    <View>
    <Header/>
    <Image style={{width:'95%',height:200,borderRadius:10,
    
    marginTop:10,

    alignSelf:'center'}} source={{uri:'https://picsum.photos/200'}}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})