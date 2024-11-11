import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddMenuItemScreen({ navigation, addDish }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [course, setCourse] = useState('Starters');
  const [rating, setRating] = useState(1);

  const handleAddDish = () => {
    if (!dishName || !description || !price || !imageUri) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newDish = {
      name: dishName,
      description: description,
      price: parseFloat(price),
      imageUri: imageUri,
      course: course,
      rating: rating,
    };

    addDish(newDish);

    navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Add a New Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUri}
        onChangeText={setImageUri}
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text style={styles.label}>Rating:</Text>
      <Picker
        selectedValue={rating}
        onValueChange={(itemValue) => setRating(itemValue)}
        style={styles.picker}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <Picker.Item key={num} label={`${num} Star${num > 1 ? 's' : ''}`} value={num} />
        ))}
      </Picker>

      <Button title="Save Dish" onPress={handleAddDish} color="#8B4513" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D7C6A9', 
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
  },
  backButtonText: {
    color: '#8B4513',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#fff', 
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
});
