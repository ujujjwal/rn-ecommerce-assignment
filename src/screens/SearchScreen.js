import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { products } from '../data/mockProducts';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handlePress = (item) => {
    navigation.navigate('ProductDetails', { product: item });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 10 },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    margin: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#666' },
});
