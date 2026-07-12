import HeroSection from '@/components/HeroSection';

export default function HomePage() {

  const kitPieces = [
    { label: '5 Tappetini silicone + fibra di vetro', detail: '2× Ø22cm · 1× Ø24cm · 1× Ø26cm · 1 rettangolare 25×35cm' },
    { label: '2 Presine in silicone',                 detail: 'Per spostare pentole calde in sicurezza' },
    { label: "2 Sottopentola a nido d'ape",           detail: '1 rotondo · 1 quadrato — texture antiscivolo' },
  ];

  const features = [
    {
      img: '/listing-preview/imagenes_finales/04_300c_booster.png',
      tag: '01 — Il calore',
      desc: "Silicone + fibra di vetro con resistenza dichiarata fino a 260°C. Progettato per la cucina quotidiana sul piano a induzione.",
    },
    {
      img: '/listing-preview/imagenes_finales/05_antiscivolo.png',
      tag: '02 — Il controllo',
      desc: "La superficie antiscivolo favorisce stabilità mentre mescoli, giri o cucini con una mano. Ogni gesto, sotto controllo.",
    },
    {
      img: '/listing-preview/imagenes_finales/07_manipolazione_tavola.png',
      tag: '03 — La tavola',
      desc: "Tappetini, presine e sottopentola inclusi per accompagnare ogni passaggio — dal piano cottura all’impiattamento.",
    },
  ];

  const gallery = [
    { img: '/listing-preview/imagenes_finales/03_prima_dopo.png',    alt: 'Prima e dopo — con e senza BAZIMART',   pos: 'center center', label: 'Prima — Dopo'  },
    { img: '/listing-preview/imagenes_finales/06_cottura.png',       alt: 'Cottura sul piano a induzione',             pos: 'center',        label: 'In cottura'      },
    { img: '/listing-preview/imagenes_finales/08_pinze_trivet.png',  alt: "Presine e sottopentola a nido d’ape",  pos: 'center',        label: 'Il dettaglio'    },
    { img: '/listing-preview/imagenes_finales/01_main.png',          alt: 'Kit BAZIMART — 9 pezzi',               pos: 'center',        label: 'Il sistema'      },
  ];

  return (
    <>
      <HeroSection />

      {/* IL SISTEMA */}
      <section id="kit" className="py-16 md:py-24 lg:py-28 bg-[#F8F4EE]">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

            <div className="order-2 md:order-1 relative">
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center bg-[#1A1A1A]/90 text-[#8B6E4F] text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1.5 rounded-full border border-[#8B6E4F]/25">
                  Componenti del kit
                </span>
              </div>
              <img
                src="/listing-preview/imagenes_finales/02_inventario.png"
                alt="Sistema BAZIMART — 9 componenti"
                className="w-full rounded-xl"
                style={{ border: '1px solid #E8DDD0', background: '#F0E8DE' }}
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="block w-6 md:w-8 h-px bg-[#8B6E4F]"></span>
                <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Il sistema &middot; 9 pezzi</span>
              </div>
              <h2
                className="font-light text-[#1A1A1A] mb-5 md:mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', letterSpacing: '-0.01em' }}
              >
                Non accessori.<br />Un sistema pensato<br />per chi cucina davvero.
              </h2>
              <p className="text-[#7A6550] text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light">
                Ogni elemento risponde a un momento preciso &mdash;
                nessun compromesso, nessun dettaglio lasciato al caso.
              </p>

              <ul className="space-y-0 mb-10 md:mb-12">
                {kitPieces.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 md:gap-5 py-4 md:py-5 border-b border-[#EAE0D4] first:border-t">
                    <span className="flex-shrink-0 text-xs font-medium tracking-widest mt-0.5" style={{ color: '#8B6E4F', minWidth: '1.5rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[#1A1A1A] font-medium text-sm tracking-wide">{item.label}</p>
                      <p className="text-[#8B7355] text-sm font-light mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="/listing-preview/"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#1A1A1A] text-white font-medium tracking-wide rounded-full hover:bg-[#8B6E4F] transition-all duration-300 text-sm hover:-translate-y-0.5 w-full sm:w-auto justify-center sm:justify-start"
              >
                Compra su Amazon &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OGNI MOMENTO */}
      <section id="caratteristiche" className="py-16 md:py-24 lg:py-28 bg-[#1A1A1A]">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block w-8 md:w-10 h-px bg-[#8B6E4F]"></span>
              <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Ogni momento</span>
              <span className="block w-8 md:w-10 h-px bg-[#8B6E4F]"></span>
            </div>
            <h2
              className="font-light text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', letterSpacing: '-0.01em', lineHeight: 1.25 }}
            >
              Ogni momento della cucina<br />ha la sua risposta.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feat, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="block w-4 h-px bg-[#8B6E4F]"></span>
                  <span className="text-[#8B6E4F] text-[10px] tracking-[0.3em] uppercase font-medium">{feat.tag}</span>
                </div>
                <div className="rounded-2xl overflow-hidden mb-5 md:mb-6 bg-[#252525]" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={feat.img}
                    alt={feat.tag}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <p className="text-[#907860] text-sm leading-relaxed font-light">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER BRAND */}
      <section className="overflow-hidden">
        <img
          src="/listing-preview/imagenes_finales/AP_modulo4_mercato.png"
          alt="BAZIMART — Pensato per la cucina di ogni giorno"
          className="w-full object-cover"
          style={{ maxHeight: '420px', objectPosition: 'center' }}
        />
      </section>

      {/* IN USO */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#F8F4EE]">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-8 md:w-10 h-px bg-[#C8B8A0]"></span>
              <span className="text-[#8B7355] text-xs tracking-[0.38em] uppercase font-medium">In uso</span>
              <span className="block w-8 md:w-10 h-px bg-[#C8B8A0]"></span>
            </div>
            <h2
              className="font-light text-[#1A1A1A]"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '0.02em' }}
            >
              Il sistema in cucina, ogni giorno.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {gallery.map((item, i) => (
              <div key={i} className="relative rounded-lg md:rounded-xl overflow-hidden bg-[#E8DDD0] group" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: item.pos }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2.5"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}
                >
                  <span className="text-white/80 text-[10px] tracking-[0.2em] uppercase font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA SCELTA */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#1E1208]">
        <div className="container mx-auto px-5 md:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">
            <span className="block w-8 md:w-10 h-px bg-[#6B5040]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">La scelta</span>
            <span className="block w-8 md:w-10 h-px bg-[#6B5040]"></span>
          </div>
          <p className="text-[#C8A878] text-sm tracking-[0.15em] uppercase font-light mb-4 md:mb-5">
            Per chi ama cucinare davvero.
          </p>
          <h2
            className="font-light text-white mb-4 md:mb-5"
            style={{ fontSize: 'clamp(1.9rem, 7vw, 3.5rem)', letterSpacing: '-0.01em' }}
          >
            Kit BAZIMART &mdash; 9 pezzi
          </h2>
          <p className="text-[#5A4030] text-sm mb-10 md:mb-12 font-light tracking-wide">
            Spedizione Prime &middot; Lavabile in lavastoviglie &middot; Manuale incluso
          </p>
          <a
            href="/listing-preview/"
            className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-all duration-300 text-sm md:text-base shadow-2xl hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] w-full sm:w-auto"
          >
            Compra su Amazon.it &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
