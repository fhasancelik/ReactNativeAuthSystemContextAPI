import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import MyButton from '../components/MyButton';
import {ProductsContext} from '../context/ProductsProvider';
import {useNavigation} from '@react-navigation/native';
import { colors } from '../utils.js/colors';


colors
const Profile = () => {
  const navigation = useNavigation();

  const {user} = useContext(ProductsContext);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,

          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            marginLeft: 15,
          }}>
          Profile
        </Text>

        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon size={30} name="settings-outline" />
        </TouchableOpacity>
      </View>

      <Icon
        name="person"
        size={80}
        style={{
          alignSelf: 'center',
          marginTop: 30,
        }}
      />

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 18,
        }}>
        {user.name}
      </Text>

      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('MyAddress')}>
        <Text style={{}}>My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{}}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{}}>Offers</Text>
      </TouchableOpacity>


<MyButton
            onPress={() =>{

              auth().signOut()
            }}
            title={'Logout'}
            bgColor={colors.black}
            textColor={colors.white}
          />

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
