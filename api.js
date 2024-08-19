import axios from 'axios';

const API_URL = 'https://f2qmt601w8.execute-api.us-east-2.amazonaws.com/crudLambda';

// Función para obtener todos los productos desde la API
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

// Función para agregar un nuevo producto
export const addProduct = async (product) => {
  try {
    console.log('Enviando producto a la API:', product); // Verifica los datos antes de enviarlos
    const response = await axios.post(API_URL, product);
    console.log('Respuesta de la API al agregar producto:', response.data); // Verifica la respuesta de la API
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    throw error;
  }
};

// Función para eliminar un producto por ID
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/${productId}`);
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
};
