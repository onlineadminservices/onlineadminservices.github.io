import HeroSection from '@/components/HeroSection';

export default function HomePage() {

  const kitPieces = [
    {
      label: '5 Tappetini silicone + fibra di vetro',
      detail: '2× Ø22cm · 1× Ø24cm · 1× Ø26cm · 1 rettangolare 25×35cm',
    },
    {
      label: '2 Presine in silicone',
      detail: 'Per spostare pentole calde in sicurezza',
    },
    {
      label: '2 Sottopentola a nido d’ape',
      detail: '1 rotondo · 1 quadrato — texture antiscivolo',
    },
  ];

  const features = [
    {
      img: '/listing-preview/imagenes_finales/04_300c_booster.png',
      title: 'Calore sotto controllo',
      desc: 'Silicone + fibra di vetro con resistenza dichiarata fino a 260°C, secondo le specifiche del materiale. Un set pensato per l’uso quotidiano sul piano a induzione.',
    },
    {
      img: '/listing-preview/imagenes_finales/05_antiscivolo.png',
      title: 'Controllo in ogni gesto',
      desc: 'La superficie antiscivolo favorisce stabilità mentre mescoli, giri o cucini con una mano, sul piano a induzione.',
    },
    {
      img: '/listing-preview/imagenes_finales/06_cottura.png',
      title: 'Dalla cucina alla tavola',
      desc: 'Tappetini, presine e sottopentola inclusi per accompagnare ogni passaggio — dal piano cottura all’impiattamento.',
    },
  ];

  const gallery = [
    { img: '/listing-preview/imagenes_finales/03_prima_dopo.png',           alt: 'Senza protezione / Con BAZIMART' },
    { img: '/listing-preview/imagenes_finales/07_manipolazione_tavola.png', alt: 'Dalla cucina alla tavola' },
    { img: '/listing-preview/imagenes_finales/08_pinze_trivet.png',         alt: 'Presine e sottopentola a nido d’ape' },
    { img: '/listing-preview/imagenes_finales/AP_modulo5_checklist.png',    alt: 'Tutto quello che serve — checklist BAZIMART' },
  ];

  return (
    <>
      <HeroSection />

      {/* IL KIT */}
      <section id="kit" className="py-28 bg-[#F8F4EE]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Immagine — niente shadow pesante, bordo sottile */}
            <div className="order-2 md:order-1">
              <img
                src="/listing-preview/imagenes_finales/02_inventario.png"
                alt="Contenuto del kit BAZIMART — 9 pezzi"
                className="w-full rounded-xl"
                style={{ border: '1px solid #E8DDD0' }}
              />
            </div>

            {/* Testo */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#8B6E4F]"></span>
                <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Kit 9 pezzi</span>
              </div>
              <h2
                className="font-light text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', letterSpacing: '-0.01em' }}
              >
                Ogni pezzo ha il suo posto.<br />In un solo kit.
              </h2>
              <p className="text-[#7A6550] text-lg mb-10 leading-relaxed font-light">
                BAZIMART ha progettato ogni elemento per lavorare in sinergia &mdash;
                dalla protezione del piano all&apos;impiattamento sicuro.
              </p>

              {/* Lista con numerazione premium */}
              <ul className="space-y-0 mb-12">
                {kitPieces.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 py-5 border-b border-[#EAE0D4] first:border-t">
                    <span
                      className="flex-shrink-0 text-xs font-medium tracking-widest mt-0.5"
                      style={{ color: '#8B6E4F', minWidth: '1.5rem' }}
                    >
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
                href="https://www.amazon.it/dp/B0GYG3DBHB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-medium tracking-wide rounded-full hover:bg-[#8B6E4F] transition-all duration-300 text-sm hover:-translate-y-0.5"
              >
                Compra su Amazon &mdash; &euro;24,90 &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CARATTERISTICHE */}
      <section id="caratteristiche" className="py-28 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block w-10 h-px bg-[#8B6E4F]"></span>
              <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Qualit&agrave;</span>
              <span className="block w-10 h-px bg-[#8B6E4F]"></span>
            </div>
            <h2
              className="font-light text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.01em', lineHeight: 1.25 }}
            >
              Materiali selezionati con cura.<br />Protezione reale.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feat, i) => (
              <div key={i} className="group">
                <div className="rounded-2xl overflow-hidden mb-7 bg-[#252525]" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-white text-base font-medium mb-2.5 tracking-wide">{feat.title}</h3>
                <p className="text-[#907860] text-sm leading-relaxed font-light">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER A+ */}
      <section className="overflow-hidden">
        <img
          src="/listing-preview/imagenes_finales/AP_modulo4_mercato.png"
          alt="BAZIMART &mdash; Pensato per la cucina di ogni giorno"
          className="w-full object-cover"
          style={{ maxHeight: '480px', objectPosition: 'center' }}
        />
      </section>

      {/* GALLERIA */}
      <section className="py-28 bg-[#F8F4EE]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-10 h-px bg-[#C8B8A0]"></span>
              <span className="text-[#8B7355] text-xs tracking-[0.38em] uppercase font-medium">Galleria</span>
              <span className="block w-10 h-px bg-[#C8B8A0]"></span>
            </div>
            <h2
              className="font-light text-[#1A1A1A]"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '0.02em' }}
            >
              Il kit in azione
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((item, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-[#E8DDD0]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-28 bg-[#1E1208]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-10 h-px bg-[#6B5040]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.38em] uppercase font-medium">Disponibile ora</span>
            <span className="block w-10 h-px bg-[#6B5040]"></span>
          </div>
          <h2
            className="font-light text-white mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}
          >
            Kit BAZIMART &mdash; 9 pezzi
          </h2>
          <p className="text-[#C8B8A0] text-xl mb-2.5 font-light">Solo &euro;24,90 su Amazon.it</p>
          <p className="text-[#5A4030] text-sm mb-12 font-light tracking-wide">
            Spedizione Prime &middot; Lavabile in lavastoviglie &middot; Manuale incluso
          </p>
          <a
            href="https://www.amazon.it/dp/B0GYG3DBHB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-all duration-300 text-base shadow-2xl hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          >
            Compra su Amazon.it &mdash; &euro;24,90
          </a>
          <p className="mt-8 text-[#3A2818] text-xs tracking-widest uppercase">
            ASIN: B0GYG3DBHB &middot; Casa e cucina &rsaquo; Utensili da cucina &rsaquo; Sottopentola
          </p>
        </div>
      </section>

      {/* Accesso interno */}
      <a
        href="/listing-preview/"
        title="Anteprima listing Amazon (uso interno)"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg opacity-40 hover:opacity-100 transition-opacity duration-200"
      >
        Listing Preview
      </a>
    </>
  );
}
