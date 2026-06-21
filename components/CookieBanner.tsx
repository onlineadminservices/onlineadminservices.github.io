'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bazimart_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('bazimart_cookie_consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('bazimart_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 max-w-2xl">
          Utilizamos cookies propias y de terceros para análisis de visitas. Puede aceptar todas las cookies, rechazar
          las no esenciales o consultar nuestra{' '}
          <Link href="/privacy" className="underline hover:text-gray-900">
            Política de Privacidad
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm px-4 py-2 border border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-800 transition"
          >
            Solo necesarias
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
