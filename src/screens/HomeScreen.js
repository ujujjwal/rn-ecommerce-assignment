import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { banners, products } from '../data/mockProducts';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>🏠 Welcome to ShopEase</Text>

      {/* 🔼 Banners */}
      <FlatList
        horizontal
        data={banners}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.banner} />
        )}
        contentContainerStyle={{ paddingHorizontal: 10, marginBottom: 16 }}
      />

      <Text style={styles.sectionTitle}>🔥 Featured Products</Text>

      {/* 🛍️ Product Carousel */}
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
              <Text style={styles.tags}>{item.tags.join(', ')}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  banner: {
    width: "100%",
    borderRadius: 12,
    marginRight: 12,
    resizeMode:"stretch"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  card: {
    width: 160,
    marginRight: 12,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontWeight: '600',
    marginTop: 8,
    fontSize: 14,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#444',
    marginTop: 4,
  },
  tags: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});