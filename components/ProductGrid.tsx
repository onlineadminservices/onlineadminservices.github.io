'use client';

import { sampleProducts } from '@/data/sampleProducts';
import ProductCard from './ProductCard';

interface ProductGridProps {
  category?: 'class20' | 'class21';
  subcategory?: string;
  limit?: number;
}

export default function ProductGrid({ category, subcategory, limit }: ProductGridProps) {
  let products = sampleProducts;
  if (category) products = products.filter(p => p.category === category);
  if (subcategory) products = products.filter(p => p.subcategory === subcategory);
  if (limit) products = products.slice(0, limit);

  if (products.length === 0) {
    return <div className="text-center py-12 text-gray-500">No hay productos disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}