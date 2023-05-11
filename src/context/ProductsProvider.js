import React, {createContext, useEffect, useState} from 'react';

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
  const [selectedTab,setSelectedTab]=useState(2)

  const deleteCartItem = id => {
    axiosInstanceLocal.delete(`cart/${id}`);
    fetchCarts()
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

  const deletewish = async (productId) => {
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
          {text: 'OK', onPress: () => {
            {
              deletewish(item.id)
              fetchWish()
                 }
          }},
        ]))
    
  };
  const fetchWish = () => {
    axiosInstanceLocal.get('wish').then(response => {
      const {status, data} = response;
      if (status === 200) {
        setWish(data);
      }
    });
  };

  useEffect(()=>{
    
  fetchWish()
  
  },[])

  const fetchCarts = () => {
    axiosInstanceLocal.get('cart').then(response => {
      const {status, data} = response;
      if (status === 200) {
        setCart(data);
      }
    });
  };

  useEffect(() => {
    fetchCarts();
  }, []);

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

  useEffect(() => {
    fetchSmartphones();
  }, []);

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
    fetchLaptops();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchcCategories();
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
        wish,setWish,addWish,
        deleteCartItem,
        selectedTab,setSelectedTab
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
