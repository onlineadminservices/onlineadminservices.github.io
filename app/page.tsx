import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { categories } from '@/data/categories';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Categoría 20 */}
      <section id="clase-20" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                Muebles y Decoración
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl">
                Piezas atemporales para espacios únicos.
              </p>
            </div>
            <a href="/catalog?category=class20" className="text-sm text-gray-500 hover:text-gray-900 border-b border-gray-200 pb-1">
              Ver todos →
            </a>
          </div>
          <ProductGrid category="class20" limit={4} />
        </div>
      </section>
      
      {/* Categoría 21 */}
      <section id="clase-21" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                Hogar y Cocina
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl">
                Funcionalidad y estilo para tu día a día.
              </p>
            </div>
            <a href="/catalog?category=class21" className="text-sm text-gray-500 hover:text-gray-900 border-b border-gray-200 pb-1">
              Ver todos →
            </a>
          </div>
          <ProductGrid category="class21" limit={4} />
        </div>
      </section>
      
      {/* Sección de valores */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Diseño atemporal</h3>
              <p className="text-gray-500 text-sm">Productos pensados para durar en el tiempo.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Materiales sostenibles</h3>
              <p className="text-gray-500 text-sm">Comprometidos con el medio ambiente.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Garantía de calidad</h3>
              <p className="text-gray-500 text-sm">Fabricación propia + respaldo Amazon.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}