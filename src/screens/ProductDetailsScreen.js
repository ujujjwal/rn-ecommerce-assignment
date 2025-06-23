import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useCart();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.tags}>{product.tags?.join(', ')}</Text>

        <Text style={styles.description}>
          {product.description || 'No detailed description available.'}
        </Text>

        <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => addToCart(product)} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Buy Now"
            color="green"
            onPress={() => navigation.navigate('Cart')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
  },
  details: {},
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 20, color: '#444', marginBottom: 8 },
  tags: { color: '#888', marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 20, marginBottom: 16 },
  buttonContainer: { marginBottom: 10 },
});
