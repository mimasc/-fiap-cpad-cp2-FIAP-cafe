import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { CartProvider } from '../contexts/CartContext';
import { AuthContext, AuthProvider } from '../contexts/AuthContext';

function BotaoFlutuanteCarrinho() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => router.push('/carrinho')}
    >
      <Ionicons name="cart" size={28} color="white" />
    </TouchableOpacity>
  );
}

function AuthGate() {
  const { isAuthenticated, loadingAuth } = useContext(AuthContext);
  const router = useRouter();
  const segments = useSegments();

  const currentRoute = segments[0];
  const isAuthRoute = currentRoute === 'login' || currentRoute === 'cadastro';

  useEffect(() => {
    if (loadingAuth) return;

    if (!isAuthenticated && !isAuthRoute) {
      router.replace('/login');
    }

    if (isAuthenticated && isAuthRoute) {
      router.replace('/');
    }
  }, [isAuthenticated, loadingAuth, isAuthRoute]);

  if (loadingAuth) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#ff2d6f" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      {isAuthenticated && !isAuthRoute && <BotaoFlutuanteCarrinho />}
    </View>
  );
}

export default function Layout() {
  return (
    <AuthProvider>
      <CartProvider>
        <AuthGate />
      </CartProvider>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#2b2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#ff2d6f',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
