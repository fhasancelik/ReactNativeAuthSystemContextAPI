import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../utils.js/colors'
import Icon from 'react-native-vector-icons/Ionicons'

const MyProductItem = ({item}) => {

    const[heart,setHeart]=useState(false)
  return (
    <View style={{
        width:200,
        height:230,
        borderRadius:10,
        justifyContent:'space-between',
        backgroundColor:colors.white,
        marginLeft:20,
        marginBottom:10
    }}>
     <Image   source={{
          uri:`${item.thumbnail}`,
        }} style={{width:'100%',height:'50%',borderTopLeftRadius:10,borderTopRightRadius:10,}}/> 
        <Text style={{marginLeft:10,marginTop:10,fontSize:18,fontWeight:'600'}}>{item.title}</Text>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
    alignItems:'center'
}}>



<Text style={{fontSize:18,fontWeight:'600'}}>{item.price} $</Text>
<TouchableOpacity style={{borderWidth:1,borderRadius:10,paddingVertical:5,paddingHorizontal:10}}>
    <Text>Add To Basket</Text>
</TouchableOpacity>

</View>

<TouchableOpacity onPress={()=>setHeart(!heart)} style={{
width:40,
height:40,
backgroundColor:colors.white,
borderRadius:20,
position:'absolute',
top:10,
right:10,
alignItems:'center',
justifyContent:'center'





}}>
<Icon name={heart?'heart':'heart-outline'} color={heart?'red':'black'} size={35}/>
</TouchableOpacity>
    </View>
  )
}

export default MyProductItem

const styles = StyleSheet.create({})