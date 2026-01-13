import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Am sărbătorit nunta aici și a fost exact ce ne-am dorit – intimitate, eleganță și o locație de vis. Recomandăm cu drag!',
    author: 'Ana & Mihai',
    event: 'Nuntă, August 2024',
  },
  {
    text: 'Un loc magic pentru retreat-ul nostru de echipă. Natura înconjurătoare și facilitățile excelente au făcut experiența memorabilă.',
    author: 'Andreea P.',
    event: 'Team Building Corporate',
  },
  {
    text: 'Botezul fetiței noastre a fost perfect. Personalul atent, locația superbă și atmosfera caldă au completat ziua specială.',
    author: 'Familia Ionescu',
    event: 'Botez, Septembrie 2024',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-foreground" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Experiențe
          </p>
          <h2 className="heading-section text-primary-foreground mb-6">
            Ce spun oaspeții noștri
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative bg-primary-foreground/5 p-8 border border-primary-foreground/10"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-serif text-primary-foreground text-lg">
                  {testimonial.author}
                </p>
                <p className="text-primary text-sm">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
