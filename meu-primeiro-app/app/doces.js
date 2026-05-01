import React from 'react';

import CategoryScreen from '../components/CategoryScreen';
import { productsByCategory } from '../data/products';

export default function Doces() {
  const category = productsByCategory.doces;

  return (
    <CategoryScreen
      title={category.title}
      description={category.description}
      products={category.products}
    />
  );
}
