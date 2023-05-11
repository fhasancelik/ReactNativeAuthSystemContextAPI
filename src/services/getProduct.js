

import { axiosInstance } from "../utils.js/utils";

import { ProductsContext } from "../context/ProductsProvider";
import { useContext } from "react";

const fetchProducts = async () => {

  const{setProducts}=useContext(ProductsContext)
  try {
    const response = await axiosInstance.get(`products`);
    setProducts(response.data)
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export default fetchProducts;
