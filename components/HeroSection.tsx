'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden" style={{ minHeight: '88vh' }}>

      {/* Sfondo — gradiente radiale sottile */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 20% 60%, #221510 0%, #1A1A1A 65%)' }}
      />
      {/* Gradient overlay destra */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, #1A1A1A 38%, rgba(26,26,26,0.6) 60%, rgba(26,26,26,0.08) 100%)' }}
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

        {/* Immagine destra desktop — lifestyle con sfondo scuro, integrata */}
        <div className="hidden lg:flex flex-1 items-center justify-end py-12">
          <div className="relative overflow-hidden rounded-2xl" style={{ height: '72vh', width: '420px' }}>
            {/* Sfumatura sinistra per fusione con il hero */}
            <div
              className="absolute inset-y-0 left-0 w-28 z-10"
              style={{ background: 'linear-gradient(to right, #1A1A1A, transparent)' }}
            />
            {/* Sfumatura in alto e in basso */}
            <div
              className="absolute inset-x-0 top-0 h-20 z-10"
              style={{ background: 'linear-gradient(to bottom, #1A1A1A, transparent)' }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-20 z-10"
              style={{ background: 'linear-gradient(to top, #1A1A1A, transparent)' }}
            />
            <img
              src="/listing-preview/imagenes_finales/07_manipolazione_tavola.png"
              alt="Kit BAZIMART — in uso sulla tavola"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
