import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const quickLinks = [
  { href: '#despre', label: 'Despre' },
  { href: '#cazare', label: 'Cazare' },
  { href: '#evenimente', label: 'Evenimente' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#facilitati', label: 'Facilități' },
  { href: '#rezervare', label: 'Rezervare' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-16">
      <div className="container-luxury px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="Villa Stradivaryus" 
              className="h-20 w-auto mx-auto md:mx-0 mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-primary font-serif italic text-lg mb-4">
              Locația unde momentele devin amintiri
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Cazare premium și evenimente exclusive în inima naturii
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-primary-foreground font-serif text-xl mb-6">
              Navigare
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="text-center md:text-right">
            <h4 className="text-primary-foreground font-serif text-xl mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <p>România</p>
              <p>
                <a href="tel:+40000000000" className="hover:text-primary transition-colors">
                  +40 XXX XXX XXX
                </a>
              </p>
              <p>
                <a href="mailto:contact@villastradivaryus.ro" className="hover:text-primary transition-colors">
                  contact@villastradivaryus.ro
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Villa Stradivaryus. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
