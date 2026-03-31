import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BAZIMART. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/legal" className="hover:text-gray-600">Aviso legal</Link>
            <Link href="/privacy" className="hover:text-gray-600">Privacidad</Link>
            <Link href="/contact" className="hover:text-gray-600">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}