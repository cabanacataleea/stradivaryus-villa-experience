import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Locație',
    details: ['România'],
    link: null,
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+40 XXX XXX XXX'],
    link: 'tel:+40000000000',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@villastradivaryus.ro'],
    link: 'mailto:contact@villastradivaryus.ro',
  },
  {
    icon: Clock,
    title: 'Program',
    details: ['Check-in: 14:00', 'Check-out: 12:00'],
    link: null,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Contactați-ne
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Suntem aici pentru dvs.
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="bg-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail) => (
                        info.link ? (
                          <a
                            key={detail}
                            href={info.link}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted-foreground">
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-secondary p-6">
              <h4 className="font-serif text-lg text-foreground mb-4">
                Urmăriți-ne pe social media
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/20 hover:border-primary hover:bg-primary group transition-all"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/20 hover:border-primary hover:bg-primary group transition-all"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-96 lg:h-auto min-h-[400px] bg-secondary"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388439716!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
