import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.text}>Order placed successfully!</Text>
      <Button title="Return to Home" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  icon: {
    fontSize: 60, marginBottom: 20,
  },
  text: {
    fontSize: 20, marginBottom: 20,
  },
});
