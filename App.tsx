import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './src/context/CartContext';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import HomeRealProductScreen from './src/screens/HomeRealProductScreen';
import CartScreen from './src/screens/CartScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProductsDetailsScreen from './src/screens/ProductDetailsScreen'; 
import CartReviewScreen from './src/screens/CartReviewScreen';         
import ConfirmationScreen from './src/screens/ConfirmationScreen';    

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HomeRealData" component={HomeRealProductScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetails" component={ProductsDetailsScreen} />
          <Stack.Screen name="CartReviewScreen" component={CartReviewScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}