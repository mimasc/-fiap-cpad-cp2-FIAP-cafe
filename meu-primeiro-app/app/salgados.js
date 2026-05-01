import React from 'react';

import CategoryScreen from '../components/CategoryScreen';
import { productsByCategory } from '../data/products';

export default function Salgados() {
  const category = productsByCategory.salgados;

  return (
    <CategoryScreen
      title={category.title}
      description={category.description}
      products={category.products}
    />
  );
}

