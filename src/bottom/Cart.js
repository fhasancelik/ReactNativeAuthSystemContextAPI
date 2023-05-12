import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {ProductsContext} from '../context/ProductsProvider';
import {axiosInstanceLocal} from '../utils.js/utils';
import MyCartItem from '../components/MyCartItem';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../utils.js/colors';
import {useNavigation} from '@react-navigation/native';
import MyButton from '../components/MyButton';

const Cart = () => {
  const {cart, setCart, wish, addWish, deleteCartItem, setSelectedTab} =
    useContext(ProductsContext);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginBottom: 60}}>
      <FlatList
        ListEmptyComponent={
          <TouchableOpacity
            style={{
             marginTop:300,
              justifyContent: 'center',
              alignItems: 'center',
            
            }}
            onPress={() => setSelectedTab(0)}>
            <Text>Go To Products</Text>
          </TouchableOpacity>
        }
        data={cart}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => console.log('card')}
              style={{
                width: '94%',
                height: 230,
                borderRadius: 10,
                justifyContent: 'space-between',
                backgroundColor: colors.white,
                marginHorizontal: 20,
                marginBottom: 10,
              }}>
              <Image
                source={{
                  uri: `${item.thumbnail}`,
                }}
                style={{
                  width: '100%',
                  height: '50%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                {item.title}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginBottom: 10,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  {item.price} $
                </Text>
                <TouchableOpacity
                  onPress={() => deleteCartItem(item.id)}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}>
                  <Text>Remove Basket</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() =>
                  addWish({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    amount: 1,
                    discountPercentage: item.discountPercentage,
                    rating: item.rating,
                    stock: item.stock,
                    brand: item.brand,
                    category: item.category,
                    thumbnail: item.thumbnail,
                    images: item.images,
                  })
                }
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: colors.white,
                  borderRadius: 20,
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={
                    wish.some(obje => obje.id === item.id) == true
                      ? 'heart'
                      : 'heart-outline'
                  }
                  color={
                    wish.some(obje => obje.id === item.id) == true
                      ? 'red'
                      : 'black'
                  }
                  size={35}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
      <MyButton
      
      onPress={()=>console.log('slem')}
      
      
      title={'Checkout'} bgColor={'green'} textColor={colors.white
      }
      
      style={{
        marginBottom:20
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Cart;
