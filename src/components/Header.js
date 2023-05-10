import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils.js/colors'

const Header = () => {
  return (
    <View style={{
        width:'100%',
        height:70,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:0.2,
        borderBottomColor:'#8e8e8e',
        backgroundColor:colors.white
    }}>
      <Text style={{

        fontWeight:'600',
        fontSize:20,
        color:colors.black,
        marginLeft:20
      }}>FCoder</Text>

<TouchableOpacity
   style={{
    marginRight:20,
    justifyContent:'center'
    ,alignItems:'center',
}}>
 <Text>
    Mode
 </Text>
</TouchableOpacity>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({})