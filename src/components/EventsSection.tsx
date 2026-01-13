import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, PartyPopper, Briefcase } from 'lucide-react';
import eventsTerrace from '@/assets/events-terrace.jpg';
import villaEvening from '@/assets/villa-evening.jpg';

const eventTypes = [
  {
    icon: Heart,
    title: 'Nunți Restrânse',
    description: 'Cadrul perfect pentru un eveniment intim, departe de priviri, înconjurați de natură și eleganță.',
    features: ['Până la 80 de invitați', 'Decorațiuni personalizate', 'Spațiu foto exclusiv'],
  },
  {
    icon: PartyPopper,
    title: 'Botezuri & Aniversări',
    description: 'Celebrați momentele importante într-un decor rafinat, cu grija pentru fiecare detaliu.',
    features: ['Atmosferă caldă', 'Zonă pentru copii', 'Flexibilitate totală'],
  },
  {
    icon: Briefcase,
    title: 'Evenimente Corporate',
    description: 'Team building-uri și retreat-uri într-un cadru inspirațional care stimulează creativitatea.',
    features: ['Spații versatile', 'Echipamente disponibile', 'Cazare inclusă'],
  },
  {
    icon: Users,
    title: 'Petreceri Private',
    description: 'Organizați petreceri tematice sau reuniuni de familie în intimitate și exclusivitate.',
    features: ['Privatitate totală', 'Personalizare completă', 'Asistență dedicată'],
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evenimente" className="section-padding bg-secondary" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Celebrați
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Evenimente Memorabile
          </h2>
          <div className="gold-divider mb-8" />
          <p className="subheading max-w-2xl mx-auto">
            Locația ideală pentru momentele care contează – de la nunți intime la evenimente corporate
          </p>
        </motion.div>

        {/* Images Banner */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group overflow-hidden"
          >
            <img
              src={eventsTerrace}
              alt="Terasa pentru evenimente"
              className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary text-sm uppercase tracking-widest mb-2">Spațiu Evenimente</p>
              <h3 className="text-primary-foreground font-serif text-2xl">Terasă Premium</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group overflow-hidden"
          >
            <img
              src={villaEvening}
              alt="Villa seara"
              className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary text-sm uppercase tracking-widest mb-2">Atmosferă</p>
              <h3 className="text-primary-foreground font-serif text-2xl">Magie în Amurg</h3>
            </div>
          </motion.div>
        </div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-background p-8 group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <ul className="space-y-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#rezervare" className="btn-gold inline-block">
            Solicită ofertă personalizată
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
