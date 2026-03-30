'use client';

import { Product } from '@/data/sampleProducts';
import { Star, Tag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderBadge = () => {
    if (!product.badge) return null;
    
    const badgeConfig = {
      bestseller: {
        text: 'Más Vendido',
        color: 'bg-red-500',
        icon: '🔥'
      },
      new: {
        text: 'Nuevo',
        color: 'bg-green-500',
        icon: '🆕'
      },
      'amazon-choice': {
        text: "Amazon's Choice",
        color: 'bg-blue-500',
        icon: '🏆'
      }
    };
    
    const config = badgeConfig[product.badge];
    
    return (
      <div className={`${config.color} text-white px-3 py-1 rounded-full text-xs font-bold inline-flex items-center mb-3`}>
        <span className="mr-1">{config.icon}</span>
        {config.text}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Imagen del producto */}
      <div className="relative h-64 overflow-hidden">
        {/* Placeholder para imagen - puedes usar un servicio como placeholder.com */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm font-medium">
            Imagen de {product.name}
          </span>
        </div>
        
        {/* Etiquetas */}
        <div className="absolute top-3 left-3">
          {renderBadge()}
        </div>
        
        {/* Categoría */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
          {product.category === 'class20' ? 'Clase 20' : 'Clase 21'}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviewCount} reseñas)
          </span>
        </div>
        
        {/* Precio */}
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.current.toFixed(2)}
            </span>
            {product.price.original && (
              <>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.price.original.toFixed(2)}
                </span>
                <span className="ml-2 text-sm font-bold text-green-600">
                  {Math.round((1 - product.price.current / product.price.original) * 100)}% OFF
                </span>
              </>
            )}
          </div>
        </div>
        
        {/* Características principales */}
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Especificaciones */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-6">
          <div className="flex flex-col">
            <span className="text-gray-500">Material:</span>
            <span className="font-medium">{product.specs.material}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Color:</span>
            <span className="font-medium">{product.specs.color}</span>
          </div>
        </div>
        
        {/* Botón de Amazon */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-4 rounded-lg text-center transition-all shadow-md hover:shadow-lg group/btn"
          onClick={(e) => {
            e.preventDefault();
            alert(`Este enlace te llevaría a Amazon. Cuando tengas tu cuenta, el enlace será: ${product.amazonUrl}`);
          }}
        >
          <span className="flex items-center justify-center group-hover/btn:scale-105 transition-transform">
            <span className="mr-2">Ver en Amazon</span>
            <span>→</span>
          </span>
        </a>
        
        {/* Aviso demo */}
        <p className="text-xs text-gray-500 mt-3 text-center">
          🛒 Demo - En producción esto redirige a Amazon
        </p>
      </div>
    </div>
  );
}