'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden" style={{ minHeight: '88vh' }}>

      {/* Imagen de fondo — opacidad baja para evitar texto fantasma */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/listing-preview/imagenes_finales/AP_modulo1_hero.png')",
          opacity: 0.10,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, #1A1A1A 42%, rgba(26,26,26,0.72) 65%, rgba(26,26,26,0.18) 100%)' }}
      />

      <div
        className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center"
        style={{ minHeight: '88vh' }}
      >
        {/* Testo sinistra */}
        <div className="flex-1 py-28 lg:py-0 max-w-xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-[#8B6E4F]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Piano a Induzione</span>
          </div>

          <h1
            className="font-light text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 3.75rem)', letterSpacing: '-0.01em' }}
          >
            Il sistema<br />
            completo per<br />
            <span style={{ color: '#C8B8A0' }}>la tua cucina.</span>
          </h1>

          <p className="text-[#A08870] text-lg mb-12 leading-relaxed font-light">
            9 pezzi studiati per lavorare insieme &mdash;<br />
            dal piano cottura alla tavola.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.amazon.it/dp/B0GYG3DBHB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-all duration-300 shadow-xl text-sm hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Scopri su Amazon &mdash; &euro;24,90
            </a>
            <a
              href="#kit"
              className="px-8 py-4 text-white/55 font-light tracking-wide rounded-full hover:text-white/90 transition-all duration-300 text-sm border border-white/15 hover:border-white/30"
            >
              Vedi il kit &darr;
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex items-center gap-8">
            <div className="text-[#564030] text-xs tracking-wide">
              <span className="text-white font-medium text-sm block mb-0.5">9</span>
              pezzi inclusi
            </div>
            <div className="w-px h-7 bg-[#2C2C2C]"></div>
            <div className="text-[#564030] text-xs tracking-wide">
              <span className="text-white font-medium text-sm block mb-0.5">260&deg;C</span>
              dichiarati
            </div>
            <div className="w-px h-7 bg-[#2C2C2C]"></div>
            <div className="text-[#564030] text-xs tracking-wide">
              <span className="text-white font-medium text-sm block mb-0.5">&euro;24,90</span>
              su Amazon.it
            </div>
          </div>
        </div>

        {/* Immagine destra desktop — mask per dissolvere lo sfondo bianco */}
        <div className="hidden lg:flex flex-1 items-center justify-end py-16">
          <img
            src="/listing-preview/imagenes_finales/01_main.png"
            alt="Kit BAZIMART — 9 pezzi protezione piano induzione"
            className="w-auto select-none"
            style={{
              maxHeight: '74vh',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.95))',
              WebkitMaskImage: 'radial-gradient(ellipse 76% 80% at 54% 48%, black 38%, transparent 80%)',
              maskImage: 'radial-gradient(ellipse 76% 80% at 54% 48%, black 38%, transparent 80%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
