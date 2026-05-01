import React, { useContext, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import { CartContext } from '../contexts/CartContext';
import ProductRow from './ProductRow';

export default function CategoryScreen({ title, description, products }) {
  const router = useRouter();
  const { addToCart, feedback, setFeedback } = useContext(CartContext);

  useEffect(() => {
    if (!feedback) return;

    const timer = setTimeout(() => {
      setFeedback('');
    }, 2200);

    return () => clearTimeout(timer);
  }, [feedback]);

  return (
    <ScrollView style={styles.body} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={require('../assets/logoFiap.png')} style={styles.logo} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {!!feedback && (
        <View style={styles.feedback}>
          <Text style={styles.feedbackText}>{feedback}</Text>
        </View>
      )}

      <View style={styles.list}>
        {products.map(product => (
          <ProductRow
            key={product.nome}
            product={product}
            onAdd={addToCart}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  backButton: {
    marginTop: 30,
    marginBottom: 10,
  },
  backText: {
    color: '#ff2d6f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    height: 120,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#ff2d6f',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: '#cfcfcf',
    marginTop: 6,
    marginBottom: 18,
    fontSize: 15,
  },
  feedback: {
    backgroundColor: '#1f8f4d',
    padding: 12,
    borderRadius: 14,
    marginBottom: 16,
  },
  feedbackText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 8,
  },
});
