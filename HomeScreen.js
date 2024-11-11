import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation, menuItems }) {
  const calculateAveragePrice = (course) => {
    const courseItems = menuItems.filter(item => item.course === course);
    if (courseItems.length === 0) return '0.00';
    const total = courseItems.reduce((sum, item) => sum + item.price, 0);
    return (total / courseItems.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://chef-art.net/wp-content/uploads/2023/06/woocommerce-placeholder.png' }} 
        style={styles.chefImage}
      />

      <Text style={styles.title}>Welcome to the Chef's Art Menu!</Text>

      {}
      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>Average Price of Starters: ${calculateAveragePrice('Starters')}</Text>
        <Text style={styles.averageText}>Average Price of Main Course: ${calculateAveragePrice('Main Course')}</Text>
        <Text style={styles.averageText}>Average Price of Dessert: ${calculateAveragePrice('Dessert')}</Text>
      </View>

      {}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddDish')}
        >
          <Text style={styles.buttonText}>Add a New Dish</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Filter')}
        >
          <Text style={styles.buttonText}>Filter Menu</Text>
        </TouchableOpacity>
      </View>

      {}
      <Text style={styles.subtitle}>Complete Menu:</Text>
      <FlatList
        data={menuItems}
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
    backgroundColor: '#000',
  },
  chefImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff', 
  },
  averageContainer: {
    marginBottom: 20,
  },
  averageText: {
    fontSize: 16,
    marginVertical: 2,
    fontWeight: '500',
    color: '#fff', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#8B4513', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', 
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff', 
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
