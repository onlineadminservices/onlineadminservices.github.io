import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ─────────────────────────────────────────
          IL KIT
          Terminologia dal Documento Maestro v2:
          - "presine in silicone" (non "pinze")
          - "sottopentola a nido d'ape" (non "trivet honeycomb")
          - dimensioni corrette dal doc
      ───────────────────────────────────────── */}
      <section id="kit" className="py-24 bg-[#F8F4EE]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="order-2 md:order-1">
              <img
                src="/listing-preview/imagenes_finales/02_inventario.png"
                alt="Contenuto del kit BAZIMART — 9 pezzi"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#8B6E4F]"></span>
                <span className="text-[#8B6E4F] text-xs tracking-[0.35em] uppercase font-medium">Kit 9 pezzi</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6 leading-tight tracking-tight">
                Ogni pezzo ha il suo posto.<br />In un solo kit.
              </h2>

              <p className="text-[#6B5744] text-lg mb-8 leading-relaxed font-light">
                BAZIMART ha progettato ogni elemento per lavorare in sinergia —
                dalla protezione del piano all&apos;impiattamento sicuro.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  {
                    label: '5 Tappetini silicone + fibra di vetro',
                    detail: '2× Ø22cm · 1× Ø24cm · 1× Ø26cm · 1 rettangolare 25×35cm'
                  },
                  {
                    label: '2 Presine in silicone',
                    detail: 'Per spostare pentole calde in sicurezza'
                  },
                  {
                    label: '2 Sottopentola a nido d'ape',
                    detail: '1 rotondo · 1 quadrato — texture antiscivolo'
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 pb-5 border-b border-[#E8DDD0] last:border-0">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1A1A1A] flex-shrink-0"></span>
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-medium tracking-wide rounded-full hover:bg-[#8B6E4F] transition-colors text-sm"
              >
                Compra su Amazon — €24,90 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CARATTERISTICHE
          Frasi ufficiali dal Documento Maestro v2:
          - "Calore sotto controllo" (non "Resistente a 300°C")
          - "260°C, secondo le specifiche del materiale"
          - "sul piano a induzione" (non "qualsiasi piano")
          - "Più stabilità" (non claim assoluti tipo "mai", "sempre")
      ───────────────────────────────────────── */}
      <section id="caratteristiche" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#8B6E4F]"></span>
              <span className="text-[#8B6E4F] text-xs tracking-[0.35em] uppercase font-medium">Qualità</span>
              <span className="block w-8 h-px bg-[#8B6E4F]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Materiali selezionati con cura.<br />Protezione reale.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/listing-preview/imagenes_finales/04_300c_booster.png',
                title: 'Calore sotto controllo',
                desc: 'Silicone + fibra di vetro con resistenza dichiarata fino a 260°C, secondo le specifiche del materiale. Un set pensato per l'uso quotidiano sul piano a induzione.',
              },
              {
                img: '/listing-preview/imagenes_finales/05_antiscivolo.png',
                title: 'Controllo in ogni gesto',
                desc: 'La superficie antiscivolo favorisce stabilità mentre mescoli, giri o cucini con una mano, sul piano a induzione.',
              },
              {
                img: '/listing-preview/imagenes_finales/06_cottura.png',
                title: 'Dalla cucina alla tavola',
                desc: 'Tappetini, presine e sottopentola inclusi per accompagnare ogni passaggio — dal piano cottura all'impiattamento.',
              },
            ].map((feat, i) => (
              <div key={i} className="group">
                <div className="rounded-2xl overflow-hidden mb-6 bg-[#2A2A2A]" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="text-white text-lg font-medium mb-2 tracking-wide">{feat.title}</h3>
                <p className="text-[#A89880] text-sm leading-relaxed font-light">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER A+ ── */}
      <section className="overflow-hidden">
        <img
          src="/listing-preview/imagenes_finales/AP_modulo4_mercato.png"
          alt="BAZIMART — Pensato per la cucina di ogni giorno"
          className="w-full object-cover"
          style={{ maxHeight: '480px', objectPosition: 'center' }}
        />
      </section>

      {/* ── GALLERIA ── */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-[#1A1A1A] tracking-[0.05em]">Il kit in azione</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: '/listing-preview/imagenes_finales/03_prima_dopo.png', alt: 'Senza protezione / Con BAZIMART' },
              { img: '/listing-preview/imagenes_finales/07_manipolazione_tavola.png', alt: 'Dalla cucina alla tavola' },
              { img: '/listing-preview/imagenes_finales/08_pinze_trivet.png', alt: 'Presine e sottopentola a nido d'ape' },
              { img: '/listing-preview/imagenes_finales/AP_modulo5_checklist.png', alt: 'Tutto quello che serve — checklist BAZIMART' },
            ].map((item, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-[#E8DDD0]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="py-24 bg-[#2D1F14]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#8B6E4F]"></span>
            <span className="text-[#8B6E4F] text-xs tracking-[0.35em] uppercase font-medium">Disponibile ora</span>
            <span className="block w-8 h-px bg-[#8B6E4F]"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Kit BAZIMART — 9 pezzi
          </h2>
          <p className="text-[#C8B8A0] text-xl mb-2 font-light">Solo €24,90 su Amazon.it</p>
          <p className="text-[#6B5744] text-sm mb-10 font-light">
            Spedizione Prime · Lavabile in lavastoviglie · Manuale incluso
          </p>

          <a
            href="https://www.amazon.it/dp/B0GYG3DBHB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1A1A1A] font-medium tracking-wide rounded-full hover:bg-[#F8F4EE] transition-colors text-base shadow-2xl"
          >
            🛒 Compra su Amazon.it — €24,90
          </a>

          <p className="mt-6 text-[#4A3428] text-xs tracking-widest uppercase">
            ASIN: B0GYG3DBHB · Casa e cucina › Utensili da cucina › Sottopentola
          </p>
        </div>
      </section>

      {/* Botón flotante — acceso interno listing preview */}
      <a
        href="/listing-preview/"
        title="Anteprima listing Amazon (uso interno)"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg opacity-40 hover:opacity-100 transition-opacity duration-200"
      >
        🛍️ Listing Preview
      </a>
    </>
  );
}
