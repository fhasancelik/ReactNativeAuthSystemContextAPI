

import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
  });
  
  export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }