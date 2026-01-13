import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Phone, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

const requestTypes = [
  { value: 'cazare', label: 'Cazare' },
  { value: 'eveniment', label: 'Eveniment' },
  { value: 'ambele', label: 'Cazare + Eveniment' },
];

const ReservationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requestType: '',
    date: '',
    guests: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rezervare" className="section-padding bg-secondary" ref={ref}>
        <div className="container-luxury max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background p-12 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Mulțumim pentru mesaj!
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              Vă vom contacta în cel mai scurt timp pentru a crea o ofertă personalizată 
              care să corespundă nevoilor dvs.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  requestType: '',
                  date: '',
                  guests: '',
                  message: '',
                });
              }}
              className="mt-8 btn-outline-gold inline-block"
            >
              Trimite altă cerere
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rezervare" className="section-padding bg-secondary" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Începeți experiența
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Solicitați o Rezervare
          </h2>
          <div className="gold-divider mb-8" />
          <p className="subheading max-w-2xl mx-auto">
            Completați formularul și vă vom contacta pentru a discuta toate detaliile
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Nume complet *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Numele dvs."
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Telefon *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>

              {/* Request Type */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Tip solicitare *
                </label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selectați tipul</option>
                  {requestTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Data / Perioada dorită
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="ex: 15-17 August 2025"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Număr persoane
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Număr aproximativ"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Mesaj / Detalii suplimentare
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Descrieți cererea dvs. (tip eveniment, cerințe speciale, întrebări...)"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold inline-flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Se trimite...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Trimite cererea
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationForm;
