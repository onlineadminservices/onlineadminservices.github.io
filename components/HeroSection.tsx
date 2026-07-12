'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden" style={{ minHeight: '88vh' }}>
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/listing-preview/imagenes_finales/AP_modulo1_hero.png')",
          opacity: 0.22,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, #1A1A1A 45%, rgba(26,26,26,0.7) 70%, rgba(26,26,26,0.3) 100%)' }} />

      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center" style={{ minHeight: '88vh' }}>
        {/* Texto izquierda */}
        <div className="flex-1 py-24 lg:py-0 max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[#8B6E4F]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.35em] uppercase font-medium">Piano a Induzione</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-6 tracking-tight">
            Il sistema<br />
            completo per<br />
            <span style={{ color: '#C8B8A0' }}>la tua cucina.</span>
          </h1>

          <p className="text-[#A89880] text-lg mb-10 leading-relaxed font-light">
            9 pezzi studiati per lavorare insieme —<br />
            dal piano cottura alla tavola.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.amazon.it/dp/B0GYG3DBHB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-colors shadow-xl text-sm"
            >
              Scopri su Amazon — €24,90
            </a>
            <a
              href="#kit"
              className="px-8 py-4 text-white/70 font-light tracking-wide rounded-full hover:text-white transition-colors text-sm border border-white/20 hover:border-white/40"
            >
              Vedi il kit ↓
            </a>
          </div>

          {/* Trust badges — terminología corretta dal Documento Maestro */}
          <div className="mt-12 flex items-center gap-6">
            <div className="text-[#6B5744] text-xs tracking-wide">
              <span className="text-white font-medium text-sm">9</span><br />pezzi inclusi
            </div>
            <div className="w-px h-8 bg-[#3A3A3A]"></div>
            <div className="text-[#6B5744] text-xs tracking-wide">
              <span className="text-white font-medium text-sm">260°C</span><br />dichiarati
            </div>
            <div className="w-px h-8 bg-[#3A3A3A]"></div>
            <div className="text-[#6B5744] text-xs tracking-wide">
              <span className="text-white font-medium text-sm">€24,90</span><br />su Amazon.it
            </div>
          </div>
        </div>

        {/* Imagen derecha (desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-center py-12">
          <img
            src="/listing-preview/imagenes_finales/01_main.png"
            alt="Kit BAZIMART — 9 pezzi protezione piano induzione"
            className="max-h-[70vh] w-auto object-contain"
            style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.8))' }}
          />
        </div>
      </div>
    </section>
  );
}
