import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { categories } from '@/data/categories';
import { Package, Shield, Truck, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos productos de calidad con la confianza de Amazon y la atención de fabricantes directos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"><Package className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-bold mb-3">Fabricantes Directos</h3>
              <p className="text-gray-600">Controlamos todo el proceso de producción.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"><Shield className="w-8 h-8 text-green-600" /></div>
              <h3 className="text-xl font-bold mb-3">Garantía Completa</h3>
              <p className="text-gray-600">Garantía del fabricante + 30 días de Amazon.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4"><Truck className="w-8 h-8 text-yellow-600" /></div>
              <h3 className="text-xl font-bold mb-3">Envío Rápido</h3>
              <p className="text-gray-600">Envío a través de Amazon Prime.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"><Zap className="w-8 h-8 text-purple-600" /></div>
              <h3 className="text-xl font-bold mb-3">Soporte Rápido</h3>
              <p className="text-gray-600">Atención al cliente directa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="clase-20" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div><h2 className="text-3xl font-bold mb-2"><span className="text-amber-600">🛋️ {categories.class20.title}</span></h2><p className="text-gray-600">{categories.class20.description}</p></div>
            <a href="/catalog?category=class20" className="text-blue-600 hover:text-blue-800 font-medium">Ver todo →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.class20.subcategories.map((subcat) => (
              <a key={subcat.id} href={`/catalog?subcategory=${subcat.id}`} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 text-center"><div className="text-3xl mb-2">{subcat.icon}</div><h3 className="font-bold mb-1">{subcat.name}</h3><p className="text-sm text-gray-500">{subcat.count} productos</p></a>
            ))}
          </div>
          <ProductGrid category="class20" limit={4} />
        </div>
      </section>

      <section id="clase-21" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div><h2 className="text-3xl font-bold mb-2"><span className="text-red-600">🏠 {categories.class21.title}</span></h2><p className="text-gray-600">{categories.class21.description}</p></div>
            <a href="/catalog?category=class21" className="text-blue-600 hover:text-blue-800 font-medium">Ver todo →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.class21.subcategories.map((subcat) => (
              <a key={subcat.id} href={`/catalog?subcategory=${subcat.id}`} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-300 text-center"><div className="text-3xl mb-2">{subcat.icon}</div><h3 className="font-bold mb-1">{subcat.name}</h3><p className="text-sm text-gray-500">{subcat.count} productos</p></a>
            ))}
          </div>
          <ProductGrid category="class21" limit={4} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ver todos nuestros productos?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Explora nuestro catálogo completo con más de 10 productos de muestra en diferentes categorías.</p>
          <a href="/catalog" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">Ver Catálogo Completo</a>
          <p className="mt-6 text-sm opacity-80">💡 <strong>Nota:</strong> Versión DEMO - Cuando actives tu cuenta, aquí estarán tus productos reales.</p>
        </div>
      </section>
    </div>
  );
}