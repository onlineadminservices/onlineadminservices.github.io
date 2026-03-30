import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bazimart - Hogar y Cocina',
  description: 'Productos de calidad para tu hogar, disponibles en Amazon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}