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
  
  // Filtrar por categoría si se especifica
  if (category) {
    products = products.filter(p => p.category === category);
  }
  
  // Filtrar por subcategoría si se especifica
  if (subcategory) {
    products = products.filter(p => p.subcategory === subcategory);
  }
  
  // Limitar cantidad si se especifica
  if (limit) {
    products = products.slice(0, limit);
  }
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">😕</div>
        <h3 className="text-xl font-bold mb-2">No hay productos disponibles</h3>
        <p className="text-gray-600">
          En la versión final, aquí verás tus productos reales.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}