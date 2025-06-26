import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { items, removeFromCart, updateQty } = useCart();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        items.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => updateQty(item.id, item.qty - 1)}
              >
                <Text style={styles.qtyText}>➖</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{item.qty}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => updateQty(item.id, item.qty + 1)}
              >
                <Text style={styles.qtyText}>➕</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() =>
                Alert.alert(
                  'Remove Item',
                  'Are you sure you want to remove this item?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Remove', onPress: () => removeFromCart(item.id) },
                  ]
                )
              }
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {items.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('CartReviewScreen')}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  emptyText: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 100 },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#888', marginBottom: 10 },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  qtyButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  qtyText: { fontSize: 18 },
  qty: { marginHorizontal: 12, fontSize: 16, fontWeight: '600' },
  removeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffe5e5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  removeText: { color: '#d00', fontWeight: '600' },
  checkoutButton: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
