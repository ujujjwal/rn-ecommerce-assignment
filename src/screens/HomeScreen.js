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
    <ScrollView style={styles.container}>
      {/* 🔼 Banners */}
      <FlatList
        horizontal
        data={banners}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.banner} />
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      <Text style={styles.sectionTitle}>🔥 Featured Products</Text>

      {/* 🛍️ Product Carousel */}
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
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
  banner: { width: 300, height: 120, borderRadius: 10, marginRight: 10 },
  sectionTitle: { fontSize: 18, fontWeight: '600', margin: 16 },
  card: {
    width: 160,
    marginRight: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 10,
  },
  productImage: { width: '100%', height: 100, borderRadius: 8 },
  productName: { fontWeight: '600', marginTop: 8 },
  productPrice: { fontWeight: 'bold', color: '#444' },
  tags: { fontSize: 12, color: '#888', marginTop: 4 },
});
