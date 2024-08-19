import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID: {product.product_id}</Text>
      <Text style={styles.label}>Nombre: {product.name}</Text>
      <Text style={styles.label}>Descripción: {product.description}</Text>
      <Text style={styles.label}>Precio: {product.price} {product.currency}</Text>
      <Text style={styles.label}>Cantidad: {product.quantity}</Text>
      <Text style={styles.label}>Categoría: {product.category}</Text>
      <Text style={styles.label}>Marca: {product.brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
