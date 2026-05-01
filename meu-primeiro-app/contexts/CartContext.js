import React, { createContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const CART_KEY = '@fiap_cafe:cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cart]);

  async function loadCart() {
    try {
      const savedCart = await AsyncStorage.getItem(CART_KEY);

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.log('Erro ao carregar carrinho:', error);
    }
  }

  async function saveCart() {
    try {
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.log('Erro ao salvar carrinho:', error);
    }
  }

  function addToCart(product) {
    const item = {
      ...product,
      cartId: Date.now().toString(),
    };

    setCart(previousCart => [...previousCart, item]);
    setFeedback(`${product.nome} adicionado ao carrinho.`);
  }

  function removeFromCart(cartId) {
    setCart(previousCart =>
      previousCart.filter(item => item.cartId !== cartId)
    );
  }

  async function clearCart() {
    setCart([]);
    await AsyncStorage.removeItem(CART_KEY);
  }

  const total = useMemo(() => {
    return cart.reduce((soma, item) => soma + item.preco, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        feedback,
        setFeedback,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
