import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddProductScreen({ navigation, addProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    if (name && description) {
      addProduct(name, description); // Llama a la función para agregar un nuevo producto
      navigation.goBack(); // Vuelve a la lista de productos
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Product" onPress={handleAddProduct} color="#ff5c5c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
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
