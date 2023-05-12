import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProductsContext } from '../context/ProductsProvider'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils.js/colors'
import MyButton from '../components/MyButton'

const MyAddress = () => {
  const {setSelectedTab,useraddres,deleteAddres}=useContext(ProductsContext)
  const navigation=useNavigation()
  console.log(useraddres)
  return (
    <SafeAreaView style={{flex:1}}>
        <View
        style={{
          width: '100%',
          height: 70,

          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
     <TouchableOpacity
     
     onPress={()=>{


setSelectedTab(4)
      navigation.navigate('Home')


     }}
     >
     <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            marginLeft: 15,
          }}>
          My Address
        </Text>
     </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('AddAddress')}
          style={{
          
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:1,
            padding:5,
            borderRadius:10
          }}>
        <Text>Add Address</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      data={useraddres}
      renderItem={({item})=>{

        return(
          <View
       style={{
        width:'100%',
       
        borderWidth:0.2,
        borderColor:colors.white,
        
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
       }}
          
          
          
          
          
          
          >
     <View>
     <Text style={{marginLeft:20}}>
            City :  {item.city}
            </Text>
            <Text style={{marginLeft:20}}>
            Apartman :  {item.building}
            </Text>
            <Text style={{marginLeft:20}}>
            PostCode:   {item.pin}
            </Text>
     </View>
<TouchableOpacity

style={{
  padding:7
  ,
  borderWidth:0.7
,
marginRight:20}}


onPress={()=>{
  deleteAddres(item.id)
}}

>

  <Text>Delete Addres</Text>

</TouchableOpacity>

          </View>
        )
      }}
      
      />
   
    </SafeAreaView>
  )
}

export default MyAddress

const styles = StyleSheet.create({})