import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { items, removeFromCart, updateQty } = useCart();

  return (
    <ScrollView style={{ padding: 20 }}>
      {items.map(item => (
        <View key={item.id} style={{ marginBottom: 15 }}>
          <Text>{item.name}</Text>
          <Text>Qty: {item.qty}</Text>
          <Button title="➖" onPress={() => updateQty(item.id, item.qty - 1)} />
          <Button title="➕" onPress={() => updateQty(item.id, item.qty + 1)} />
          <Button title="Remove" onPress={() => removeFromCart(item.id)} />
        </View>
      ))}
      <Button title="Checkout" onPress={() => navigation.navigate('CartReviewScreen')} />
    </ScrollView>
  );
}
