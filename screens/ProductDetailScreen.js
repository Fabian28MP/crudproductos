import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductDetailScreen({ route, navigation, deleteProduct }) {
  const { product } = route.params; // Obtenemos el producto desde las rutas

  const handleDelete = () => {
    deleteProduct(product.id); // Llamamos a la función de eliminación
    navigation.goBack(); // Volvemos a la lista de productos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <Button title="Delete Product" onPress={handleDelete} color="#ff5c5c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo gris claro
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Color del texto
  },
  productDescription: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666', // Color del texto
  },
});
