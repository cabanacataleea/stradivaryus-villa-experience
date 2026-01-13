import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Mountain, Heart, Sparkles } from 'lucide-react';
import villaFront from '@/assets/villa-front.jpg';

const features = [
  {
    icon: Mountain,
    title: 'Locație Retrasă',
    description: 'Departe de agitația orașului, în inima naturii',
  },
  {
    icon: Leaf,
    title: 'Natură Pură',
    description: 'Înconjurați de păduri și priveliști spectaculoase',
  },
  {
    icon: Heart,
    title: 'Intimitate Totală',
    description: 'Spațiu privat pentru momente speciale',
  },
  {
    icon: Sparkles,
    title: 'Rafinament',
    description: 'Design elegant cu atenție la fiecare detaliu',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="despre" className="section-padding bg-secondary" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Descoperiți
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Despre Villa Stradivaryus
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={villaFront}
                alt="Villa Stradivaryus - Fațada"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="subheading mb-8 leading-relaxed">
              Villa Stradivaryus este mai mult decât o simplă locație – este o experiență. 
              Într-un cadru natural de excepție, departe de forfota cotidiană, am creat un 
              refugiu unde eleganța întâlnește natura, iar fiecare moment devine o amintire prețioasă.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Fie că doriți o escapadă romantică, o reuniune de familie sau un eveniment 
              care să rămână în suflete, Villa Stradivaryus vă oferă cadrul perfect – 
              intimitate, rafinament și serenitate, toate într-un singur loc magic.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
