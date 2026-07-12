import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DDD0] py-12 bg-[#F8F4EE]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#1A1A1A] uppercase font-light mb-1">BAZIMART</p>
            <p className="text-[#8B7355] text-xs font-light">
              © {new Date().getFullYear()} BAZIMART. Tutti i diritti riservati.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-[#8B7355]">
            <Link href="/legal" className="hover:text-[#1A1A1A] transition-colors tracking-wide">Note legali</Link>
            <Link href="/privacy" className="hover:text-[#1A1A1A] transition-colors tracking-wide">Privacy</Link>
            <Link href="/contact" className="hover:text-[#1A1A1A] transition-colors tracking-wide">Contatto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
