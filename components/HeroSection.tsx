'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden" style={{ minHeight: '88vh' }}>

      {/* Sfondo — gradiente radiale */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 20% 60%, #221510 0%, #1A1A1A 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, #1A1A1A 38%, rgba(26,26,26,0.6) 60%, rgba(26,26,26,0.08) 100%)' }}
      />

      <div
        className="relative container mx-auto px-5 md:px-6 flex flex-col lg:flex-row items-center"
        style={{ minHeight: '88vh' }}
      >
        {/* Testo */}
        <div className="flex-1 py-16 sm:py-20 lg:py-0 max-w-xl">

          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="block w-6 md:w-8 h-px bg-[#8B6E4F]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.35em] uppercase font-medium">Piano a Induzione</span>
          </div>

          <h1
            className="font-light text-white leading-[1.1] mb-6 md:mb-8"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 3.75rem)', letterSpacing: '-0.01em' }}
          >
            Il sistema<br />
            completo per<br />
            <span style={{ color: '#C8B8A0' }}>la tua cucina.</span>
          </h1>

          <p className="text-[#A08870] text-base md:text-lg mb-10 md:mb-12 leading-relaxed font-light">
            9 pezzi studiati per lavorare insieme &mdash;
            dal piano cottura alla tavola.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/listing-preview/"
              className="px-7 py-4 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-all duration-300 shadow-xl text-sm hover:-translate-y-0.5 hover:shadow-2xl text-center"
            >
              Scopri su Amazon &rarr;
            </a>
            <a
              href="#kit"
              className="px-7 py-4 text-white/55 font-light tracking-wide rounded-full hover:text-white/90 transition-all duration-300 text-sm border border-white/15 hover:border-white/30 text-center"
            >
              Vedi il kit &darr;
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 md:mt-14 flex items-center gap-6 md:gap-8">
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
              <span className="text-white font-medium text-sm block mb-0.5">Lavastoviglie</span>
              compatibile
            </div>
          </div>
        </div>

        {/* Immagine — solo desktop lg+ */}
        <div className="hidden lg:flex flex-1 items-center justify-end py-12">
          <div className="relative overflow-hidden" style={{ height: '72vh', width: '440px', borderRadius: '1.5rem' }}>
            <div className="absolute inset-y-0 left-0 z-10" style={{ width: '120px', background: 'linear-gradient(to right, #1A1A1A, transparent)' }} />
            <div className="absolute inset-y-0 right-0 z-10" style={{ width: '80px', background: 'linear-gradient(to left, #1A1A1A, transparent)' }} />
            <div className="absolute inset-x-0 top-0 z-10" style={{ height: '100px', background: 'linear-gradient(to bottom, #1A1A1A, transparent)' }} />
            <div className="absolute inset-x-0 bottom-0 z-10" style={{ height: '100px', background: 'linear-gradient(to top, #1A1A1A, transparent)' }} />
            <img
              src="/listing-preview/imagenes_finales/07_manipolazione_tavola.png"
              alt="Kit BAZIMART — dalla cucina alla tavola"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.88)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
