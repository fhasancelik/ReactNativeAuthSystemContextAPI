
import { axiosInstance } from "../utils.js/utils";



const deleteProduct = async (productId) => {
    try {
      const response = await axiosInstance.delete(`products/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  export default deleteProduct