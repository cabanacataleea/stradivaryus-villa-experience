import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Maximize, ChefHat, Mountain, Wifi, Car } from 'lucide-react';
import livingRoom from '@/assets/interior-living.jpg';
import bedroom from '@/assets/bedroom.jpg';
import livingArea from '@/assets/living-area.jpg';

const amenities = [
  { icon: Flame, label: 'Șemineu' },
  { icon: Maximize, label: 'Living spațios' },
  { icon: ChefHat, label: 'Bucătărie utilată' },
  { icon: Mountain, label: 'Terasă panoramică' },
  { icon: Wifi, label: 'Wi-Fi gratuit' },
  { icon: Car, label: 'Parcare privată' },
];

const AccommodationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cazare" className="section-padding bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Experimentați
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Cazare Premium
          </h2>
          <div className="gold-divider mb-8" />
          <p className="subheading max-w-2xl mx-auto">
            Camere elegante cu design atent la detalii, unde confortul întâlnește rafinamentul
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 relative group overflow-hidden"
          >
            <img
              src={livingRoom}
              alt="Living cu șemineu"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-primary-foreground font-serif text-2xl mb-2">Living Premium</h3>
              <p className="text-primary-foreground/80 text-sm">Șemineu • Ferestre panoramice</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group overflow-hidden"
          >
            <img
              src={bedroom}
              alt="Dormitor matrimonial"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-primary-foreground font-serif text-2xl mb-2">Dormitor</h3>
              <p className="text-primary-foreground/80 text-sm">Pat matrimonial • Lumină naturală</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 relative group overflow-hidden"
          >
            <img
              src={livingArea}
              alt="Zona de living open space"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-primary-foreground font-serif text-2xl mb-2">Open Space</h3>
              <p className="text-primary-foreground/80 text-sm">Bucătărie complet utilată • Design modern</p>
            </div>
          </motion.div>
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-secondary p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl text-center text-foreground mb-8">
            Facilități incluse
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center border border-primary/20">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#rezervare" className="btn-gold inline-block">
            Întreabă disponibilitatea
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationSection;
