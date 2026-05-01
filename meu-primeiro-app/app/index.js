import React, { useContext } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Link } from 'expo-router';

import { AuthContext } from '../contexts/AuthContext';

const categories = [
  { title: 'Cafés', href: '/cafes' },
  { title: 'Bebidas', href: '/bebidas' },
  { title: 'Salgados', href: '/salgados' },
  { title: 'Doces', href: '/doces' },
  { title: 'Outros', href: '/outros' },
];

export default function Index() {
  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require('../assets/logoFiap.png')} style={styles.logo} />

      <View style={styles.headerBox}>
        <Text style={styles.h1}>Olá, {user?.name?.split(' ')[0]}!</Text>
        <Text style={styles.h3}>Escolha uma categoria para pedir.</Text>

        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryList}>
        {categories.map(category => (
          <Link key={category.href} href={category.href} asChild>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Fiap-Café • pedidos rápidos para reduzir filas na cantina
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  logo: {
    height: 140,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 36,
    marginBottom: 18,
  },
  headerBox: {
    backgroundColor: '#3a3a3a',
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ff2d6f',
  },
  h1: {
    color: '#ff2d6f',
    fontSize: 28,
    fontWeight: 'bold',
  },
  h3: {
    color: '#cfcfcf',
    fontSize: 15,
    marginTop: 6,
  },
  logoutButton: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ff2d6f',
  },
  logoutText: {
    color: '#ff2d6f',
    fontWeight: 'bold',
  },
  categoryList: {
    gap: 14,
  },
  categoryButton: {
    backgroundColor: '#ff2d6f',
    padding: 20,
    borderRadius: 22,
    elevation: 3,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.45)',
    textAlign: 'center',
  },
});
