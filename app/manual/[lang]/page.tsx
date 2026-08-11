import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const MANUALS = {
  en: { language: 'English', back: 'Change language', eyebrow: 'User manual', title: 'Induction Hob Protection Kit', download: 'Download PDF', pageAlt: 'BAZIMART manual, page' },
  de: { language: 'Deutsch', back: 'Sprache ändern', eyebrow: 'Bedienungsanleitung', title: 'Schutzset für Induktionskochfelder', download: 'PDF herunterladen', pageAlt: 'BAZIMART Anleitung, Seite' },
  fr: { language: 'Français', back: 'Changer de langue', eyebrow: "Mode d'emploi", title: 'Kit de protection pour plaque à induction', download: 'Télécharger le PDF', pageAlt: 'Manuel BAZIMART, page' },
  es: { language: 'Español', back: 'Cambiar idioma', eyebrow: 'Manual de uso', title: 'Kit de protección para placa de inducción', download: 'Descargar PDF', pageAlt: 'Manual BAZIMART, página' },
} as const

type LanguageCode = keyof typeof MANUALS
const PAGES = [1, 2, 3, 4]

export function generateStaticParams() {
  return Object.keys(MANUALS).map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const manual = MANUALS[params.lang as LanguageCode]
  if (!manual) return {}
  return { title: `BAZIMART | ${manual.eyebrow} (${manual.language})`, description: `${manual.title} BAZIMART — ${manual.language}.` }
}

export default function LocalizedManualPage({ params }: { params: { lang: string } }) {
  const code = params.lang as LanguageCode
  const manual = MANUALS[code]
  if (!manual) notFound()

  return (
    <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
      <Link href="/manual" className="text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors duration-300">
        &larr; {manual.back}
      </Link>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4 mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">{manual.eyebrow} &middot; {manual.language}</p>
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-[#1A1A1A]">{manual.title}</h1>
        </div>
        <a href={`/manual/${code}/BAZIMART_manual_${code.toUpperCase()}.pdf`} download className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white text-sm tracking-wide rounded-full hover:bg-[#8B6E4F] transition-colors duration-300">
          {manual.download} &darr;
        </a>
      </div>
      <div className="flex flex-col gap-6">
        {PAGES.map((n) => (
          <img key={n} src={`/manual/${code}/page-${n}.jpg`} alt={`${manual.pageAlt} ${n}`} className="w-full h-auto rounded-lg border border-[#E8DDD0] shadow-sm" loading={n === 1 ? 'eager' : 'lazy'} />
        ))}
      </div>
    </div>
  )
}
