import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import AddProductScreen from './screens/AddProductScreen';

const Stack = createStackNavigator();

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'This is the first product.' },
    { id: 2, name: 'Product 2', description: 'This is the second product.' },
    { id: 3, name: 'Product 3', description: 'This is the third product.' },
  ]);

  // Función para eliminar un producto por su ID
  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  // Función para agregar un nuevo producto
  const addProduct = (name, description) => {
    const newProduct = {
      id: products.length + 1, // ID incremental basado en la longitud de la lista
      name: name,
      description: description,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" options={{ title: 'Product List' }}>
          {props => <ProductListScreen {...props} products={products} />}
        </Stack.Screen>
        <Stack.Screen name="ProductDetail" options={{ title: 'Product Detail' }}>
          {props => <ProductDetailScreen {...props} deleteProduct={deleteProduct} />}
        </Stack.Screen>
        <Stack.Screen name="AddProduct" options={{ title: 'Add Product' }}>
          {props => <AddProductScreen {...props} addProduct={addProduct} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
