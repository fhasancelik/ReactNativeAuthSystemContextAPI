import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {axiosInstance} from '../utils.js/utils';
import {axiosInstanceLocal} from '../utils.js/utils';
import {Alert} from 'react-native';
import axios from 'axios';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [categories, setCategories] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [selectedTab, setSelectedTab] = useState(4);

  const [user, setUser] = useState({});

  const [useraddres, setUseraddres] = useState({
    city: '',
    building: '',
    pin: '',
  });

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const val = await JSON.parse(jsonValue);
      //console.log(val);
      setUser(val);
      console.log(user);
    } catch (e) {
      // error reading value
    }
  };

  const deleteCartItem = id => {
    axiosInstanceLocal.delete(`cart/${id}`);
    fetchCarts();
  };

  const deleteAddres = id => {
    axiosInstanceLocal.delete(`address/${id}`);
    fetchAddress();
  };

  const addCart = item => {
    axiosInstanceLocal
      .post('cart', item)
      .then(res => {
        fetchCarts();
        Alert.alert('complated');
      })
      .catch(err => Alert.alert('Product already avaible in your basket'));
  };

  const addAddress = item => {
    axiosInstanceLocal
      .post('address', item)
      .then(res => {
        fetchAddress();
        Alert.alert('complated');
      })
      .catch(err => Alert.alert('Product already avaible in your basket'));
  };

  const fetchAddress = () => {
    axiosInstanceLocal.get('address').then(response => {
      const {status, data} = response;
      if (status === 200) {
        setUseraddres(data);
      }
    });
  };

  const deletewish = async productId => {
    try {
      const response = await axiosInstanceLocal.delete(`wish/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  const addWish = item => {
    axiosInstanceLocal
      .post('wish', item)
      .then(res => {
        fetchWish();
        Alert.alert('complated');
      })
      .catch(err =>
        Alert.alert('Remove WishLish', 'Are You Sure', [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              {
                deletewish(item.id);
                fetchWish();
              }
            },
          },
        ]),
      );
  };
  const fetchWish = () => {
    axiosInstanceLocal.get('wish').then(response => {
      const {status, data} = response;
      if (status === 200) {
        setWish(data);
      }
    });
  };

  const fetchCarts = () => {
    axiosInstanceLocal.get('cart').then(response => {
      const {status, data} = response;
      if (status === 200) {
        setCart(data);
      }
    });
  };

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const [upproduct, setUpproduct] = useState({
    id: '',
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  const fetchcCategories = async () => {
    try {
      const response = await axiosInstance.get('products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  const fetchSmartphones = async () => {
    try {
      const response = await axiosInstance.get('products/category/smartphones');
      setSmartphones(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  const fetchLaptops = async () => {
    try {
      const response = await axiosInstance.get('products/category/laptops');
      setLaptops(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    fetchWish();
  }, []);

  useEffect(() => {
    fetchCarts();
  }, []);
  useEffect(() => {
    fetchSmartphones();
  }, []);
  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    fetchLaptops();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchcCategories();
  }, []);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        laptops,
        smartphones,
        products,
        setProducts,
        product,
        setProduct,
        upproduct,
        setUpproduct,
        categories,
        cart,
        setCart,
        addCart,
        wish,
        setWish,
        addWish,
        deleteCartItem,
        selectedTab,
        setSelectedTab,
        user,
        setUser,
        useraddres,
        setUseraddres,
        addAddress,
        deleteAddres,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
