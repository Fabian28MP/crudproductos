import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, Alert, StyleSheet } from 'react-native';
import { getProducts, deleteProduct } from '../api';
import { useFocusEffect } from '@react-navigation/native';

export default function ProductsList({ navigation }) {
  const [products, setProducts] = useState([]);

  // Función para cargar los productos desde la API
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

  // useFocusEffect se asegura de que los productos se carguen cada vez que la pantalla recibe foco
  useFocusEffect(
    React.useCallback(() => {
      loadProducts();
    }, [])
  );

  // Función para eliminar un producto
  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      loadProducts(); // Vuelve a cargar los productos después de eliminar
      Alert.alert('Producto eliminado', 'El producto ha sido eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      Alert.alert('Error', 'Hubo un problema al eliminar el producto.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Button
              title="Eliminar"
              onPress={() => handleDelete(item.product_id)}
            />
          </View>
        )}
      />
      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  product: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});
