import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addProduct } from '../api';

export default function AddProduct({ navigation }) {
  const [product, setProduct] = useState({
    product_id: '',
    name: '',
    description: '',
    price: '',
    currency: '',
    quantity: '',
    category: '',
    brand: '',
  });

  // Función para manejar cambios en los campos de texto
  const handleChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    console.log('Datos del producto a enviar:', product); // Verifica los datos que se van a enviar
    try {
      await addProduct(product);
      Alert.alert('Producto agregado', 'El producto se ha agregado correctamente.');
      navigation.navigate('ProductsList'); // Redirige a la lista de productos después de agregar
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      Alert.alert('Error', 'Hubo un problema al agregar el producto.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID del Producto"
        value={product.product_id}
        onChangeText={(value) => handleChange('product_id', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={product.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={product.description}
        onChangeText={(value) => handleChange('description', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={product.price}
        keyboardType="numeric"
        onChangeText={(value) => handleChange('price', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Moneda"
        value={product.currency}
        onChangeText={(value) => handleChange('currency', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        value={product.quantity}
        keyboardType="numeric"
        onChangeText={(value) => handleChange('quantity', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={product.category}
        onChangeText={(value) => handleChange('category', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={product.brand}
        onChangeText={(value) => handleChange('brand', value)}
      />
      <Button title="Agregar Producto" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
