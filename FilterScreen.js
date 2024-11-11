// FilterScreen.js

import React, { useState } from 'react';
import { View, Text, Picker, FlatList, StyleSheet } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';

export default function FilterScreen({ navigation, menuItems }) {
  const [selectedCourse, setSelectedCourse] = useState('Starters');

  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      <RNPicker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <RNPicker.Item label="Starters" value="Starters" />
        <RNPicker.Item label="Main Course" value="Main Course" />
        <RNPicker.Item label="Dessert" value="Dessert" />
      </RNPicker>

      <Text style={styles.subtitle}>Filtered Menu:</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemText}>
              {item.course}: {item.name} - ${item.price} - Rating: {item.rating}★
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D7C6A9', 
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  menuItemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  menuItemText: {
    fontSize: 16,
  },
});
