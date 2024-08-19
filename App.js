import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsList from './screens/ProductListScreen';
import ProductDetail from './screens/ProductDetailScreen';
import AddProduct from './screens/AddProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsList">
        <Stack.Screen name="ProductsList" component={ProductsList} options={{ title: 'Lista de Productos' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Detalle del Producto' }} />
        <Stack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Agregar Producto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
