import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '#despre', label: 'Despre' },
  { href: '#cazare', label: 'Cazare' },
  { href: '#evenimente', label: 'Evenimente' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#facilitati', label: 'Facilități' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Villa Stradivaryus" className="h-12 md:h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rezervare"
            className={`px-6 py-3 text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground'
            }`}
          >
            Rezervă
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-luxury py-6 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rezervare"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-gold text-center mt-4"
          >
            Rezervă Acum
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
