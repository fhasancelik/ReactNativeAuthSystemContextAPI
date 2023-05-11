import React, {createContext, useEffect, useState} from 'react';


import { axiosInstance } from '../utils.js/utils';
import {Alert} from 'react-native';
import axios from 'axios';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]); 

  const [categories, setCategories] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);


  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });



  const [upproduct, setUpproduct] = useState({
    id:'',
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
  });

  const fetchProducts = async () => {

   

    try {
      const response = await axiosInstance.get(`products`);
     setProducts(response.data)

 

     
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };


  const fetchcCategories = async () => {

   

    try {
      const response = await axiosInstance.get('products/categories')
     setCategories(response.data)

 

     
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  const fetchSmartphones = async () => {

   

    try {
      const response = await axiosInstance.get('products/category/smartphones')
     setSmartphones(response.data.products)

 

     
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

useEffect(()=>{
  fetchSmartphones()
},[])



const fetchLaptops = async () => {

   

  try {
    const response = await axiosInstance.get('products/category/laptops')
   setLaptops(response.data.products)



   
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

useEffect(()=>{
  fetchLaptops()
},[])


  useEffect(()=>{

fetchProducts()

  },[])

   

         
  useEffect(()=>{

    fetchcCategories()
    
      },[])


  
  return (
    <ProductsContext.Provider
      value={{laptops,smartphones,products,setProducts,product,setProduct,upproduct,setUpproduct,categories}}>
      {children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
