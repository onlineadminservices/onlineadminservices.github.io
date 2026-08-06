import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BAZIMART | Manuale (Italiano)',
  description: "Manuale d'uso completo del Kit Protezione Piano Induzione BAZIMART, in italiano.",
}

const PAGES = [1, 2, 3, 4]

export default function ManualItPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
      <Link href="/manual" className="text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors duration-300">
        &larr; Cambia lingua
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4 mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Manuale d&apos;uso &middot; Italiano</p>
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-[#1A1A1A]">Kit Protezione Piano Induzione</h1>
        </div>
        <a
          href="/manual/it/BAZIMART_manual_IT.pdf"
          download
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white text-sm tracking-wide rounded-full hover:bg-[#8B6E4F] transition-colors duration-300"
        >
          Scarica PDF &darr;
        </a>
      </div>

      <div className="flex flex-col gap-6">
        {PAGES.map((n) => (
          <img
            key={n}
            src={`/manual/it/page-${n}.jpg`}
            alt={`Manuale BAZIMART, pagina ${n}`}
            className="w-full h-auto rounded-lg border border-[#E8DDD0] shadow-sm"
            loading={n === 1 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  )
}
