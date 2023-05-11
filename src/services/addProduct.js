import {axiosInstance} from '../utils.js/utils';

const addProduct = async productData => {
  try {
    const response = await axiosInstance.post(`products`, productData);
    const newProduct = response.data;
    return newProduct;
  } catch (error) {
    throw new Error('Ürün eklenirken bir hata oluştu.');
  }
};

export default addProduct;
