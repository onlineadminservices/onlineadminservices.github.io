import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BAZIMART | Manuale',
  description: 'Manuale d\'uso BAZIMART — scegli la lingua.',
}

const LANGUAGES: { code: string; label: string; native: string; available: boolean }[] = [
  { code: 'it', label: 'Italiano', native: 'Italiano', available: true },
  { code: 'en', label: 'English', native: 'English', available: true },
  { code: 'de', label: 'Deutsch', native: 'Deutsch', available: true },
  { code: 'fr', label: 'Français', native: 'Français', available: true },
  { code: 'es', label: 'Español', native: 'Español', available: true },
]

export default function ManualSelectorPage() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-2xl text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-3">Kit Protezione Piano Induzione</p>
      <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#1A1A1A] mb-4">Manuale d&apos;uso</h1>
      <p className="text-[#6B6257] text-sm md:text-base mb-12 leading-relaxed">
        Scegli la lingua per consultare il manuale completo, ottimizzato per smartphone, tablet e computer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        {LANGUAGES.map((lang) =>
          lang.available ? (
            <Link
              key={lang.code}
              href={`/manual/${lang.code}`}
              className="flex items-center justify-between px-6 py-5 bg-white border border-[#E8DDD0] rounded-2xl hover:border-[#8B6E4F] hover:shadow-sm transition-all duration-300"
            >
              <span className="text-base font-medium text-[#1A1A1A]">{lang.native}</span>
              <span className="text-[#8B6E4F]">&rarr;</span>
            </Link>
          ) : (
            <div
              key={lang.code}
              className="flex items-center justify-between px-6 py-5 bg-[#F1ECE3] border border-[#E8DDD0] rounded-2xl opacity-60 cursor-not-allowed"
              aria-disabled="true"
            >
              <span className="text-base font-medium text-[#1A1A1A]">{lang.native}</span>
              <span className="text-[11px] uppercase tracking-wide text-[#8B7355]">Presto disponibile</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
