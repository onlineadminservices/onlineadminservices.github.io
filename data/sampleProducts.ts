// Datos de muestra para Clase 20 y 21
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  amazonUrl: string;
  category: 'class20' | 'class21';
  subcategory: string;
  features: string[];
  specs: {
    material: string;
    color: string;
    dimensions?: string;
    capacity?: string;
    weight?: string;
  };
  price: {
    current: number;
    original?: number;
  };
  rating: number;
  reviewCount: number;
  tags: string[];
  badge?: 'bestseller' | 'new' | 'amazon-choice';
}

export const sampleProducts: Product[] = [
  // ========== CLASE 20 - MUEBLES Y DECORACIÓN ==========
  {
    id: 'prod-001',
    name: 'Mesa de Centro Moderna',
    description: 'Mesa de centro de diseño contemporáneo con acabado en madera de nogal',
    image: '/images/products/coffee-table.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C1D2E3F4',
    category: 'class20',
    subcategory: 'muebles',
    features: [
      'Madera maciza de nogal',
      'Diseño minimalista',
      'Fácil ensamblaje',
      'Resistente a rayaduras'
    ],
    specs: {
      material: 'Madera de nogal',
      color: 'Marrón natural',
      dimensions: '120 x 60 x 45 cm',
      weight: '18 kg'
    },
    price: {
      current: 189.99,
      original: 249.99
    },
    rating: 4.7,
    reviewCount: 342,
    tags: ['living', 'moderno', 'madera'],
    badge: 'bestseller'
  },
  {
    id: 'prod-002',
    name: 'Estantería Flotante de Roble',
    description: 'Estantería flotante de roble para libros y decoración',
    image: '/images/products/floating-shelf.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C2D3E4F5',
    category: 'class20',
    subcategory: 'almacenamiento',
    features: [
      'Roble sostenible certificado',
      'Sistema de montaje oculto',
      'Capacidad 25 kg por estante',
      'Acabado natural con protección UV'
    ],
    specs: {
      material: 'Roble macizo',
      color: 'Claro natural',
      dimensions: '80 x 20 x 15 cm',
      weight: '4.5 kg'
    },
    price: {
      current: 79.99
    },
    rating: 4.5,
    reviewCount: 156,
    tags: ['estantería', 'roble', 'flotante']
  },
  {
    id: 'prod-003',
    name: 'Espejo Decorativo Hexagonal',
    description: 'Espejo decorativo en forma hexagonal con marco de resina',
    image: '/images/products/hexagonal-mirror.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C3D4E5F6',
    category: 'class20',
    subcategory: 'espejos',
    features: [
      'Marco de resina de alta densidad',
      'Espejo sin distorsión',
      'Sistema de fijación oculto',
      'Resistente a la humedad'
    ],
    specs: {
      material: 'Resina + Vidrio',
      color: 'Oro mate',
      dimensions: '60 cm (diámetro)',
      weight: '3.2 kg'
    },
    price: {
      current: 49.99
    },
    rating: 4.8,
    reviewCount: 89,
    tags: ['espejo', 'decorativo', 'hexagonal'],
    badge: 'new'
  },
  {
    id: 'prod-004',
    name: 'Figura Decorativa de Resina - Árbol de la Vida',
    description: 'Escultura decorativa de resina con diseño del árbol de la vida',
    image: '/images/products/resin-tree.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C4D5E6F7',
    category: 'class20',
    subcategory: 'decoracion-resina',
    features: [
      'Resina epoxi de alta calidad',
      'Pigmentos resistentes a la luz',
      'Acabado brillante profesional',
      'Incluye base de madera'
    ],
    specs: {
      material: 'Resina epoxi',
      color: 'Azul turquesa con dorado',
      dimensions: '25 x 25 x 40 cm',
      weight: '2.8 kg'
    },
    price: {
      current: 69.99
    },
    rating: 4.9,
    reviewCount: 67,
    tags: ['resina', 'decoración', 'escultura']
  },

  // ========== CLASE 21 - HOGAR Y COCINA ==========
  {
    id: 'prod-005',
    name: 'Juego de Cuchillos de Chef Profesional',
    description: 'Set de 6 cuchillos profesionales de acero inoxidable alemán',
    image: '/images/products/chef-knives.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C5D6E7F8',
    category: 'class21',
    subcategory: 'utensilios-cocina',
    features: [
      'Acero inoxidable X50CrMoV15',
      'Filo cortante preciso 15°',
      'Mangos ergonómicos anti-deslizantes',
      'Resistentes al lavavajillas'
    ],
    specs: {
      material: 'Acero inoxidable',
      color: 'Plateado',
      weight: '3.5 kg (set completo)'
    },
    price: {
      current: 159.99,
      original: 199.99
    },
    rating: 4.6,
    reviewCount: 421,
    tags: ['cuchillos', 'profesional', 'acero'],
    badge: 'amazon-choice'
  },
  {
    id: 'prod-006',
    name: 'Jarra de Agua con Infusor de Vidrio',
    description: 'Jarra de vidrio borosilicato con infusor para frutas y hierbas',
    image: '/images/products/infuser-jug.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C6D7E8F9',
    category: 'class21',
    subcategory: 'cristaleria',
    features: [
      'Vidrio borosilicato resistente al calor',
      'Tapa de bambú natural',
      'Infusor extraíble de acero inoxidable',
      'Capacidad 1.5 litros'
    ],
    specs: {
      material: 'Vidrio borosilicato',
      color: 'Transparente',
      capacity: '1.5 litros',
      weight: '0.9 kg'
    },
    price: {
      current: 34.99
    },
    rating: 4.7,
    reviewCount: 189,
    tags: ['jarra', 'vidrio', 'infusor']
  },
  {
    id: 'prod-007',
    name: 'Tabla de Cortar de Bambú con Canal',
    description: 'Tabla de cortar de bambú sostenible con canal para jugos',
    image: '/images/products/cutting-board.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C7D8E9F0',
    category: 'class21',
    subcategory: 'utensilios-cocina',
    features: [
      'Bambú de crecimiento rápido',
      'Canal perimetral para líquidos',
      'Tratamiento antibacteriano natural',
      'Resistente a marcas de cuchillos'
    ],
    specs: {
      material: 'Bambú macizo',
      color: 'Natural',
      dimensions: '40 x 30 x 2.5 cm',
      weight: '1.8 kg'
    },
    price: {
      current: 29.99
    },
    rating: 4.4,
    reviewCount: 234,
    tags: ['tabla', 'bambú', 'cortar']
  },
  {
    id: 'prod-008',
    name: 'Set de Tazas de Porcelana Premium',
    description: 'Juego de 4 tazas de porcelana de alta calidad con platillos',
    image: '/images/products/porcelain-cups.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C8D9F0G1',
    category: 'class21',
    subcategory: 'cristaleria',
    features: [
      'Porcelana de alta resistencia',
      'Acabado brillante profesional',
      'Aptas para microondas y lavavajillas',
      'Diseño atemporal'
    ],
    specs: {
      material: 'Porcelana',
      color: 'Blanco mate',
      capacity: '300 ml cada una',
      weight: '2.2 kg (set completo)'
    },
    price: {
      current: 45.99
    },
    rating: 4.8,
    reviewCount: 156,
    tags: ['tazas', 'porcelana', 'set'],
    badge: 'bestseller'
  },
  {
    id: 'prod-009',
    name: 'Cepillo para Limpieza Multiusos',
    description: 'Cepillo con cerdas naturales y mango de madera para limpieza general',
    image: '/images/products/cleaning-brush.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C9E0G1H2',
    category: 'class21',
    subcategory: 'limpieza',
    features: [
      'Cerdas naturales de Tampico',
      'Mango de madera de haya',
      'Resistente al agua y productos químicos',
      'Diseño ergonómico'
    ],
    specs: {
      material: 'Madera + Cerdas naturales',
      color: 'Natural',
      dimensions: '35 x 8 x 4 cm',
      weight: '0.3 kg'
    },
    price: {
      current: 14.99
    },
    rating: 4.3,
    reviewCount: 89,
    tags: ['cepillo', 'limpieza', 'natural']
  },
  {
    id: 'prod-010',
    name: 'Recipientes Herméticos de Vidrio',
    description: 'Set de 5 recipientes herméticos de vidrio para almacenamiento',
    image: '/images/products/glass-containers.jpg',
    amazonUrl: 'https://www.amazon.com/dp/B0C0F1G2H3',
    category: 'class21',
    subcategory: 'recipientes',
    features: [
      'Vidrio templado resistente',
      'Tapa de silicona BPA-free',
      'Aptos para congelador, microondas y lavavajillas',
      'Sistema de cierre hermético'
    ],
    specs: {
      material: 'Vidrio + Silicona',
      color: 'Transparente',
      capacity: 'Variada (200ml-1000ml)',
      weight: '3.0 kg (set completo)'
    },
    price: {
      current: 39.99
    },
    rating: 4.6,
    reviewCount: 278,
    tags: ['recipientes', 'vidrio', 'hermético']
  }
];

export const getProductsByCategory = (category: 'class20' | 'class21') => {
  return sampleProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string) => {
  return sampleProducts.filter(product => product.subcategory === subcategory);
};

export const getFeaturedProducts = (limit: number = 4) => {
  return sampleProducts.slice(0, limit);
};

export const getProductById = (id: string) => {
  return sampleProducts.find(product => product.id === id);
};