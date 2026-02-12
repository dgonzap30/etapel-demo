import React from 'react';
import { motion } from 'framer-motion';
import './BrandMarquee.css';

const brands = [
  { name: 'SATA', logo: '/assets/logos/sata.png' },
  { name: 'PPG', logo: '/assets/logos/ppg.png' },
  { name: '3M', logo: '/assets/logos/3m.png' },
  { name: 'Rupes', logo: '/assets/logos/rupes.png' },
  { name: 'GYS', logo: '/assets/logos/gys.png' },
  { name: 'Anest Iwata', logo: '/assets/logos/anest-iwata.png' },
];

const BrandMarquee = () => {
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section id="brands" className="marquee-section">
      <div className="tricolor-stripe" />

      <div className="marquee-label">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Marcas que Distribuimos
        </motion.span>
      </div>

      <div className="marquee-track">
        <div className="marquee-inner">
          {marqueeItems.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="marquee-item">
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="tricolor-stripe" />
    </section>
  );
};

export default BrandMarquee;
