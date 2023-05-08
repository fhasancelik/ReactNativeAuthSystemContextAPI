import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'


const MyButton = ({onPress,title,bgColor,textColor,style}) => {
  return (
   <TouchableOpacity
   onPress={()=>onPress()}
   style={[{
    backgroundColor:bgColor,
    justifyContent:'center',
    alignItems:'center',
    width:'85%',
    height:50,
    borderRadius:10,
    alignSelf:'center',
    marginTop:50
   },style]}
   
   
   >
    <Text style={{color:textColor}}>
{title}
    </Text>
   </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({})
