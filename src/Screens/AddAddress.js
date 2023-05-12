import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import React,{useState,useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import { colors } from '../utils.js/colors';
import { ProductsContext } from '../context/ProductsProvider';
const AddAddress = () => {
  const navigation = useNavigation();
const {useraddres,setUseraddres,addAddress}=useContext(ProductsContext)
const onChangeText = (key, value) => {
  setUseraddres({...useraddres, [key]: value});
};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,

          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View>
        <MyTextInput
          value={useraddres.city}
          onChangeText={text => onChangeText('city', text)}
          placeholder="Enter Email"
          iconname="map"
          iconsize={25}
          style={{marginTop: 20}}
        />

        <MyTextInput
          value={useraddres.building}
          onChangeText={text => onChangeText('building', text)}
          placeholder="Enter Email"
          iconname="business"
          iconsize={25}
          style={{marginTop: 20}}
        />

        <MyTextInput
          value={useraddres.pin}
          onChangeText={text => onChangeText('pin', text)}
          placeholder="Enter Email"
          iconname="location"
          iconsize={25}
          style={{marginTop: 20}}
        />

<MyButton textColor={colors.white
} title={'Save Addres'} bgColor={colors.black} onPress={()=>{
if(useraddres.city!==''&&useraddres.building!==''&&useraddres.pin!==''){
addAddress(useraddres)
navigation.goBack()
}else{
  Alert.alert('k')
}


}}/>

      </View>
    </SafeAreaView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
