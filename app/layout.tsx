import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'BAZIMART | Kit Protezione Piano Induzione',
  description: 'Kit 9 pezzi per il piano cottura a induzione — 5 tappetini silicone, 2 pinze salva dita, 2 trivet honeycomb. Disponibile su Amazon.it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-[#F8F4EE] text-[#1A1A1A] antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#E8DDD0]">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo — Montserrat SemiBold, tracking +100, uppercase */}
            <Link
              href="/"
              className="logo-bazimart text-[#1A1A1A] hover:text-[#8B6E4F] transition-colors"
              style={{ fontSize: '1.05rem' }}
            >
              BAZIMART
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#kit" className="text-sm text-[#6B5744] hover:text-[#1A1A1A] transition-colors tracking-wide">
                Il Kit
              </Link>
              <Link href="#caratteristiche" className="text-sm text-[#6B5744] hover:text-[#1A1A1A] transition-colors tracking-wide">
                Caratteristiche
              </Link>
              <a
                href="https://www.amazon.it/dp/B0GYG3DBHB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1A1A1A] text-white text-sm tracking-wide rounded-full hover:bg-[#8B6E4F] transition-colors"
              >
                Compra su Amazon →
              </a>
            </nav>
            {/* Mobile CTA */}
            <a
              href="https://www.amazon.it/dp/B0GYG3DBHB"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden px-4 py-2 bg-[#1A1A1A] text-white text-xs tracking-wide rounded-full"
            >
              Amazon →
            </a>
          </div>
        </header>

        <main>{children}</main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
