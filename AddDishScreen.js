import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

export default function AddDishScreen({ navigation, addDish }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [course, setCourse] = useState('Starters');
  const [rating, setRating] = useState(1); 

  const handleAddDish = () => {
    const newDish = {
      name: dishName,
      description: description,
      price: price,
      image: imageUri,
      course: course,
      rating: rating,
    };

    addDish(newDish);

    navigation.navigate('MainMenu');

    setDishName('');
    setDescription('');
    setPrice('');
    setImageUri('');
    setCourse('Starters'); 
    setRating(1); 
  };

  return (
    <View style={styles.container}>
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
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
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
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <Text style={styles.label}>Rating:</Text>
      <Picker
        selectedValue={rating}
        style={styles.picker}
        onValueChange={(itemValue) => setRating(itemValue)}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <Picker.Item key={num} label={`${num} Star${num > 1 ? 's' : ''}`} value={num} />
        ))}
      </Picker>
      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7C6A9', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
