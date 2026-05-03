import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductRow({ product, onAdd }) {
  function handleAddSingle() {
    onAdd({
      nome: product.nome,
      preco: product.preco,
      image: product.image || null,
    });
  }

  function handleAddSize(option) {
    onAdd({
      nome: `${product.nome} (${option.label})`,
      preco: option.preco,
      image: product.image || null,
    });
  }

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        {product.image && (
          <Image source={product.image} style={styles.image} />
        )}

        <View style={styles.info}>
          <Text style={styles.name}>{product.nome}</Text>

          {product.tamanhos ? (
            <Text style={styles.subtitle}>Escolha uma opção</Text>
          ) : (
            <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
          )}
        </View>
      </View>

      {product.tamanhos ? (
        <View style={styles.optionsContainer}>
          {product.tamanhos.map(option => (
            <TouchableOpacity
              key={option.label}
              style={styles.optionButton}
              onPress={() => handleAddSize(option)}
            >
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Text style={styles.optionPrice}>R$ {option.preco.toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={handleAddSingle}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3a3a3a',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#505050',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 14,
    marginRight: 12,
    backgroundColor: '#2b2a2a',
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  subtitle: {
    color: '#cfcfcf',
    marginTop: 4,
    fontSize: 13,
  },
  price: {
    color: '#ff2d6f',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
    gap: 8,
  },
  optionButton: {
    backgroundColor: '#ff2d6f',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    minWidth: 76,
    alignItems: 'center',
  },
  optionLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  optionPrice: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: '#ff2d6f',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});