import { Image,StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../utils.js/colors'
import Icon from 'react-native-vector-icons'
import { ProductsContext } from '../context/ProductsProvider'
const MyCartItem = ({item,wish}) => {

    const {addCart,addWish}=useContext(ProductsContext)
  return (
    <TouchableOpacity onPress={()=>console.log('card')} style={{
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
<TouchableOpacity onPress={()=>addCart({
    "id": item.id,
    "title": item.title,
    "description": item.description,
    "price": item.price,
    "amount":1,
    "discountPercentage":item.discountPercentage,
    "rating": item.rating,
    "stock": item.stock,
    "brand": item.brand,
    "category": item.category,
    "thumbnail": item.thumbnail,
    "images": item.images
  })} style={{borderWidth:1,borderRadius:10,paddingVertical:5,paddingHorizontal:10}}>
    <Text>Add To Basket</Text>
</TouchableOpacity>

</View>

<TouchableOpacity  onPress={()=>addWish({
    "id": item.id,
    "title": item.title,
    "description": item.description,
    "price": item.price,
    "amount":1,
    "discountPercentage":item.discountPercentage,
    "rating": item.rating,
    "stock": item.stock,
    "brand": item.brand,
    "category": item.category,
    "thumbnail": item.thumbnail,
    "images": item.images
  })}  style={{
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
<Icon name={wish.some(obje => obje.id === item.id)==true?'heart':'heart-outline'} color={wish.some(obje => obje.id === item.id)==true?'red':'black'} size={35}/>
</TouchableOpacity>
    </TouchableOpacity>
  )
}

export default MyCartItem

const styles = StyleSheet.create({})