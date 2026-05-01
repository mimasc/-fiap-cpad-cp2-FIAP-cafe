import React from 'react';

import CategoryScreen from '../components/CategoryScreen';
import { productsByCategory } from '../data/products';

export default function Bebidas() {
  const category = productsByCategory.bebidas;

  return (
    <CategoryScreen
      title={category.title}
      description={category.description}
      products={category.products}
    />
  );
}
