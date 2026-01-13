import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TreePine, 
  Mountain, 
  Users, 
  Sofa, 
  Baby, 
  Car, 
  Lock, 
  Wifi,
  Flame,
  UtensilsCrossed
} from 'lucide-react';

const facilities = [
  {
    icon: TreePine,
    title: 'Locație în Natură',
    description: 'Înconjurați de păduri și verdeață',
  },
  {
    icon: Mountain,
    title: 'Terase Panoramice',
    description: 'Priveliști spectaculoase',
  },
  {
    icon: Users,
    title: 'Spațiu Evenimente',
    description: 'Până la 80 de persoane',
  },
  {
    icon: Sofa,
    title: 'Zonă de Relaxare',
    description: 'Confort și liniște',
  },
  {
    icon: Baby,
    title: 'Zonă pentru Copii',
    description: 'Loc de joacă sigur și vesel',
  },
  {
    icon: Car,
    title: 'Parcare Privată',
    description: 'Spațiu generos pentru mașini',
  },
  {
    icon: Lock,
    title: 'Intimitate Totală',
    description: 'Proprietate privată exclusivă',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Gratuit',
    description: 'Conexiune de mare viteză',
  },
  {
    icon: Flame,
    title: 'Șemineu',
    description: 'Atmosferă caldă și relaxantă',
  },
  {
    icon: UtensilsCrossed,
    title: 'Bucătărie Echipată',
    description: 'Tot ce aveți nevoie pentru gătit',
  },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilitati" className="section-padding bg-secondary" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Bucurați-vă de
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Facilități & Servicii
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-background p-6 text-center group hover:shadow-lg transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <facility.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {facility.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
