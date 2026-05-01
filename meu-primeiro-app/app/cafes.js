import React from 'react';

import CategoryScreen from '../components/CategoryScreen';
import { productsByCategory } from '../data/products';

export default function Cafes() {
  const category = productsByCategory.cafes;

  return (
    <CategoryScreen
      title={category.title}
      description={category.description}
      products={category.products}
    />
  );
}
