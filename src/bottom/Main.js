import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import {ProductsContext} from '../context/ProductsProvider';

import {axiosInstance} from '../utils.js/utils';
import {colors} from '../utils.js/colors';
import MyProductItem from '../components/MyProductItem';
import { ScrollView } from 'react-native-gesture-handler';

const Main = () => {
  const {laptops, categories,smartphones} = useContext(ProductsContext);

  useEffect(() => {}, []);

 //console.log(namecategories[0].thumbnail)

  return (
  <ScrollView style={{flex:1,marginBottom:80}}>
      <View style={{backgroundColor:'gray'}}>
      <Header />
      <Image
        style={{
          width: '95%',
          height: 150,
          borderRadius: 10,

          marginTop: 10,

          alignSelf: 'center',
        }}
        source={{uri: 'https://picsum.photos/200'}}
      />

      <View style={{marginTop: 20}}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                  backgroundColor:colors.white
                }}>
                <Text
                  style={{color: colors.black, textTransform: 'capitalize'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text    style={{
          marginTop:20,
          marginLeft:20,
          color:colors.black,
          fontSize:16,
          fontWeight:'600'
        }}>
     Smart Phones
      </Text>
      <View style={{marginTop: 10}}>
        <FlatList
          data={smartphones}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
             <MyProductItem item={item}/>
            );
          }}
        />
      </View>

      <Text    style={{
          marginTop:20,
          marginLeft:20,
          color:colors.black,
          fontSize:16,
          fontWeight:'600'
        }}>
     Laptops
      </Text>
      <View style={{marginTop: 10}}>
        <FlatList
          data={laptops}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
             <MyProductItem item={item}/>
            );
          }}
        />
      </View>

      <Text    style={{
          marginTop:20,
          marginLeft:20,
          color:colors.black,
          fontSize:16,
          fontWeight:'600'
        }}>
     Tops
      </Text>
      <View style={{marginTop: 10}}>
        <FlatList
          data={smartphones}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
             <MyProductItem item={item}/>
            );
          }}
        />
      </View>
    </View>
  </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({});
