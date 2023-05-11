import { axiosInstance } from "../utils.js/utils";

const updateProduct = async (productId, updatedProduct) => {
  try {
    await axiosInstance.put(`products/${productId}`, updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProduct;
