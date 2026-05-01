import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductRow({ product, onAdd }) {
  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.nome}</Text>
        <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => onAdd(product)}>
        <Text style={styles.addText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3a3a3a',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#555',
  },
  info: {
    marginBottom: 12,
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    color: '#ff2d6f',
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#ff2d6f',
    paddingVertical: 10,
    borderRadius: 18,
    alignItems: 'center',
  },
  addText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
