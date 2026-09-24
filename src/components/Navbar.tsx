import { useEffect, useState } from 'react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center transition-transform group-hover:scale-110">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 5 12a4 4 0 0 0 .7 7.96" />
              <path d="M12 12v9" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Nimbus</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-gradient-to-r from-primary-500 to-accent-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-slate-200 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 flex flex-col gap-3 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 text-sm font-medium text-slate-300 border border-white/10 rounded-xl py-2.5">Sign In</button>
            <button className="flex-1 text-sm font-semibold bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl py-2.5">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
