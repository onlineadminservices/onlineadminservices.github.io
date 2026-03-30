'use client';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bienvenido a <span className="text-yellow-400">Nuestra Tienda</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Descubre nuestra exclusiva colección de productos para el hogar y la cocina.
            <span className="block text-lg mt-2 text-blue-200">
              🛍️ <strong>Versión DEMO</strong> - Datos de muestra
            </span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <a 
              href="#clase-20" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Muebles y Decoración
            </a>
            <a 
              href="#clase-21" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              Ver Hogar y Cocina
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm opacity-80">Productos Demo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-sm opacity-80">Categorías</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">8</div>
              <div className="text-sm opacity-80">Subcategorías</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">💯</div>
              <div className="text-sm opacity-80">Listo para Producción</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}