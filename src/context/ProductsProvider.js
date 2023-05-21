import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {axiosInstance} from '../utils.js/utils';
import {axiosInstanceLocal} from '../utils.js/utils';
import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

  


  const [userAvaible,setuserAvaible]=useState(false)
  const [user, setUser] = useState({});

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log('Kullanıcı adı:', value);
  
        setuserAvaible(true)

        let newuser=JSON.parse(value)
        setUser(newuser)
    
  
      } else {
        console.log('Kullanıcı adı bulunamadı.');
        setuserAvaible(false)
    
      }
    } catch (error) {
      console.log('Veri okunamadı:', error);
    }
  };
  
  
  useEffect(()=>{
  readData()
  
  },[])
  
  console.log(userAvaible)


  return (
    <ProductsContext.Provider
      value={{
userAvaible,
setuserAvaible,
user,
readData
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
