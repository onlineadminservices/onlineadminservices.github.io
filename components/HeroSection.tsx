'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fondo sutil con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
            BAZIMART
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-8 leading-relaxed">
            Calidad y diseño para tu hogar y cocina.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#clase-20"
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition shadow-sm"
            >
              Explorar Muebles
            </a>
            <a
              href="#clase-21"
              className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition"
            >
              Ver Hogar
            </a>
          </div>
          <p className="mt-12 text-sm text-gray-400">
            🛍️ Versión demo · Productos de muestra
          </p>
        </div>
      </div>
    </section>
  );
}