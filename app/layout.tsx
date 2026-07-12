import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'BAZIMART | Kit Protezione Piano Induzione',
  description: 'Kit 9 pezzi per il piano cottura a induzione — 5 tappetini silicone + fibra di vetro, 2 presine in silicone, 2 sottopentola a nido d\'ape. Disponibile su Amazon.it.',
}

const logoStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  letterSpacing: '0.15em',
  fontSize: '1.3rem',
  textTransform: 'uppercase',
  color: '#1A1A1A',
  textDecoration: 'none',
  lineHeight: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#F8F4EE] text-[#1A1A1A] antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

        {/* Header
            Mobile:  [BAZIMART] ............ [Amazon →]   (flex justify-between)
            Desktop: [Il Kit | Caratteristiche] [BAZIMART] [Compra su Amazon →]  (grid 3 colonne)
        */}
        <header className="sticky top-0 z-50 bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#E8DDD0]">
          <div className="container mx-auto px-5 md:px-6">

            {/* Mobile layout */}
            <div className="flex md:hidden items-center justify-between py-4">
              <Link href="/" style={{ ...logoStyle, fontSize: '1.1rem' }} className="hover:text-[#8B6E4F] transition-colors duration-300">
                BAZIMART
              </Link>
              <a
                href="https://www.amazon.it/dp/B0GYG3DBHB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1A1A1A] text-white text-xs tracking-wide rounded-full hover:bg-[#8B6E4F] transition-colors duration-300"
              >
                Amazon &rarr;
              </a>
            </div>

            {/* Desktop layout — grid 3 colonne */}
            <div className="hidden md:grid grid-cols-3 items-center py-5">
              <nav className="flex items-center gap-8">
                <Link href="#kit" className="text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors duration-300 tracking-wide">
                  Il Kit
                </Link>
                <Link href="#caratteristiche" className="text-sm text-[#8B7355] hover:text-[#1A1A1A] transition-colors duration-300 tracking-wide">
                  Caratteristiche
                </Link>
              </nav>
              <div className="flex justify-center">
                <Link href="/" style={logoStyle} className="hover:text-[#8B6E4F] transition-colors duration-300">
                  BAZIMART
                </Link>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://www.amazon.it/dp/B0GYG3DBHB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1A1A1A] text-white text-sm tracking-wide rounded-full hover:bg-[#8B6E4F] transition-all duration-300"
                >
                  Compra su Amazon &rarr;
                </a>
              </div>
            </div>

          </div>
        </header>

        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
