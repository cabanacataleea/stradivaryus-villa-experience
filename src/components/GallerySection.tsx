import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import heroAerial from '@/assets/hero-aerial.jpg';
import villaFront from '@/assets/villa-front.jpg';
import villaEvening from '@/assets/villa-evening.jpg';
import interiorLiving from '@/assets/interior-living.jpg';
import livingArea from '@/assets/living-area.jpg';
import interiorStairs from '@/assets/interior-stairs.jpg';
import bedroom from '@/assets/bedroom.jpg';
import eventsTerrace from '@/assets/events-terrace.jpg';
import kidsArea from '@/assets/kids-area.jpg';

const categories = ['Toate', 'Exterior', 'Interior', 'Cazare', 'Evenimente', 'Zonă copii'];

const galleryImages = [
  { src: heroAerial, category: 'Exterior', title: 'Vedere aeriană' },
  { src: villaFront, category: 'Exterior', title: 'Fațada vilei' },
  { src: villaEvening, category: 'Exterior', title: 'Vila în amurg' },
  { src: interiorLiving, category: 'Interior', title: 'Living cu șemineu' },
  { src: livingArea, category: 'Interior', title: 'Open space' },
  { src: interiorStairs, category: 'Interior', title: 'Scară interioară' },
  { src: bedroom, category: 'Cazare', title: 'Dormitor matrimonial' },
  { src: eventsTerrace, category: 'Evenimente', title: 'Terasă evenimente' },
  { src: kidsArea, category: 'Zonă copii', title: 'Loc de joacă' },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('Toate');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredImages = activeCategory === 'Toate' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galerie" className="section-padding bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Explorați
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Galerie Foto
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-primary-foreground">
                  <p className="font-serif text-xl">{image.title}</p>
                  <p className="text-sm text-primary mt-1">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 text-primary-foreground hover:text-primary transition-colors p-2"
          >
            <ChevronLeft size={40} />
          </button>

          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={filteredImages[currentImageIndex]?.src}
            alt={filteredImages[currentImageIndex]?.title}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 text-primary-foreground hover:text-primary transition-colors p-2"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-primary-foreground font-serif text-lg">
              {filteredImages[currentImageIndex]?.title}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
