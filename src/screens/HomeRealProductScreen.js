import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// This screen is just to showcase the ability to fetch data from API

export default function HomeRealProductScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{marginTop: 50}} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>🛒 Products</Text>

      <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetails', {product: item})
            }>
            <View style={styles.card}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <Text numberOfLines={1} style={styles.productName}>
                {item.title}
              </Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  sectionTitle: {fontSize: 18, fontWeight: '600', margin: 16},
  card: {
    width: 160,
    marginRight: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 10,
  },
  productImage: {width: '100%', height: 100, borderRadius: 8},
  productName: {fontWeight: '600', marginTop: 8},
  productPrice: {fontWeight: 'bold', color: '#444'},
});
