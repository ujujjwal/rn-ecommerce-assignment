import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartReview({ navigation }) {
  const { items } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🧾 Order Summary</Text>

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} x {item.qty} = ₹{item.qty * item.price}
          </Text>
        )}
      />

      <View style={styles.summary}>
        <Text>Subtotal: ₹{subtotal.toFixed(2)}</Text>
        <Text>Tax (10%): ₹{tax.toFixed(2)}</Text>
        <Text style={styles.total}>Total: ₹{total.toFixed(2)}</Text>
      </View>

      <View style={{ marginVertical: 16 }}>
        <Text style={styles.paymentInfo}>💳 Payment Mode: UPI</Text>
      </View>

      <Button title="Place Order" onPress={() => navigation.navigate('Confirmation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
  summary: { marginTop: 20 },
  total: { fontWeight: 'bold', fontSize: 16, marginTop: 8 },
  paymentInfo: { fontSize: 16, marginBottom: 20 },
});
