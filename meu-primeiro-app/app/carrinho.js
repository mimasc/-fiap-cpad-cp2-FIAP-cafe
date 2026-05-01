import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import { CartContext } from '../contexts/CartContext';
import PrimaryButton from '../components/PrimaryButton';

export default function Carrinho() {
  const { cart, total, removeFromCart, clearCart } = useContext(CartContext);
  const router = useRouter();

  const [successMessage, setSuccessMessage] = useState('');

  async function handleCheckout() {
    if (cart.length === 0) return;

    await clearCart();
    setSuccessMessage('Pedido finalizado com sucesso! Retire na cantina em alguns minutos.');
  }

  return (
    <ScrollView style={styles.body} contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
        <Text style={styles.textoVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.h2}>Seu Carrinho</Text>

      {!!successMessage && (
        <View style={styles.successBox}>
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      )}

      {cart.length === 0 ? (
        <Text style={styles.vazio}>O carrinho está vazio.</Text>
      ) : (
        cart.map(item => (
          <View key={item.cartId} style={styles.itemCart}>
            <View>
              <Text style={styles.nomeItem}>{item.nome}</Text>
              <Text style={styles.precoItem}>R$ {item.preco.toFixed(2)}</Text>
            </View>

            <TouchableOpacity onPress={() => removeFromCart(item.cartId)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      <View style={styles.linha} />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
      </View>

      <PrimaryButton
        title="Finalizar Compra"
        onPress={handleCheckout}
        disabled={cart.length === 0}
      />

      {cart.length > 0 && (
        <PrimaryButton
          title="Limpar carrinho"
          onPress={clearCart}
          variant="secondary"
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
  btnVoltar: {
    marginBottom: 20,
  },
  textoVoltar: {
    color: '#ff2d6f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h2: {
    color: '#ff2d6f',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  successBox: {
    backgroundColor: '#1f8f4d',
    padding: 14,
    borderRadius: 16,
    marginBottom: 18,
  },
  successText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vazio: {
    color: '#cfcfcf',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  itemCart: {
    backgroundColor: '#3a3a3a',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#555',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nomeItem: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  precoItem: {
    color: '#cfcfcf',
    fontSize: 16,
    marginTop: 4,
  },
  remover: {
    color: '#ff4d4d',
    fontWeight: 'bold',
  },
  linha: {
    width: '100%',
    height: 2,
    backgroundColor: '#ff2d6f',
    marginVertical: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  totalLabel: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalValue: {
    color: '#ff2d6f',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
