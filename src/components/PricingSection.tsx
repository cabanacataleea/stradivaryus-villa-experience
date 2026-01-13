import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, PartyPopper, Info } from 'lucide-react';

const pricingOptions = [
  {
    icon: Home,
    title: 'Cazare',
    price: 'de la 600 RON',
    unit: '/ noapte',
    features: [
      'Vilă în exclusivitate',
      'Până la 8 persoane',
      'Mic dejun inclus la cerere',
      'Acces la toate facilitățile',
    ],
    note: 'Prețul variază în funcție de sezon și perioada de rezervare',
  },
  {
    icon: PartyPopper,
    title: 'Evenimente',
    price: 'Preț personalizat',
    unit: '',
    features: [
      'Nunți, botezuri, aniversări',
      'Evenimente corporate',
      'Decorațiuni disponibile',
      'Cazare pentru invitați',
    ],
    note: 'Ofertă personalizată în funcție de tipul și durata evenimentului',
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Transparent
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Prețuri Orientative
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-secondary p-8 md:p-10 text-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-background flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <option.icon className="w-9 h-9 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {option.title}
              </h3>
              
              <div className="mb-6">
                <span className="text-3xl font-serif text-primary">{option.price}</span>
                {option.unit && (
                  <span className="text-muted-foreground text-lg">{option.unit}</span>
                )}
              </div>

              <ul className="space-y-3 mb-6 text-left">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-2 text-sm text-muted-foreground bg-background/50 p-4 rounded">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <p className="text-left">{option.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Vă oferim o ofertă personalizată în funcție de nevoile dvs.
          </p>
          <a href="#rezervare" className="btn-gold inline-block">
            Solicită ofertă
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
