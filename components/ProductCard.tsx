'use client';

import { Product } from '@/data/sampleProducts';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderBadge = () => {
    if (!product.badge) return null;
    const badges = {
      bestseller: 'Más vendido',
      new: 'Nuevo',
      'amazon-choice': "Amazon's Choice",
    };
    return (
      <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        {badges[product.badge]}
      </span>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="aspect-square bg-gray-50 flex items-center justify-center">
        <span className="text-gray-300 text-sm font-medium">Imagen</span>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          {renderBadge()}
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-400">
            {product.reviewCount}
          </span>
        </div>
        
        <div className="mb-5">
          <span className="text-2xl font-semibold text-gray-900">
            ${product.price.current.toFixed(2)}
          </span>
          {product.price.original && (
            <>
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.price.original.toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-green-600">
                -{Math.round((1 - product.price.current / product.price.original) * 100)}%
              </span>
            </>
          )}
        </div>
        
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          onClick={(e) => {
            e.preventDefault();
            alert(`Enlace a Amazon: ${product.amazonUrl}`);
          }}
        >
          Ver en Amazon →
        </a>
      </div>
    </div>
  );
}