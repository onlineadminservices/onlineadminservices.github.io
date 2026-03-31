import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BAZIMART | Hogar y Cocina',
  description: 'Productos de calidad para tu hogar, disponibles en Amazon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800 antialiased">
        {/* Header minimalista */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition">
              BAZIMART
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="#clase-20" className="text-gray-600 hover:text-gray-900">Muebles</Link>
              <Link href="#clase-21" className="text-gray-600 hover:text-gray-900">Hogar</Link>
              <Link href="/catalog" className="text-gray-600 hover:text-gray-900">Catálogo</Link>
            </nav>
            <button className="md:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}