import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'cabinas',
    number: '01',
    title: 'Cabinas y Áreas de Preparación',
    image: '/assets/images/cabinas.png',
    brands: ['USI Italia', 'Termomeccanica'],
    description: 'Espacios de pintura de última generación para resultados impecables.',
    size: 'large',
  },
  {
    id: 'pistolas',
    number: '02',
    title: 'Pistolas de Pintura',
    image: '/assets/images/pistolas.png',
    brands: ['SATA', 'Anest Iwata'],
    description: 'Precisión alemana y japonesa para el acabado perfecto.',
    size: 'medium',
  },
  {
    id: 'consumibles',
    number: '03',
    title: 'Pintura y Consumibles',
    image: '/assets/images/consumibles.png',
    brands: ['PPG', '3M', 'Roberlo'],
    description: 'La más alta calidad en recubrimientos y materiales.',
    size: 'medium',
  },
  {
    id: 'lamparas',
    number: '04',
    title: 'Secado Infrarrojo y UV',
    image: '/assets/images/lamparas.png',
    brands: ['B-TEC', 'IRT'],
    description: 'Tecnología de curado rápido para maximizar productividad.',
    size: 'large',  /* row2: medium(1) + large(2) = 3 cols */
  },
  {
    id: 'pulido',
    number: '05',
    title: 'Herramientas y Pulido',
    image: '/assets/images/pulido.png',
    brands: ['Rupes', 'Festool', 'GYS'],
    description: 'Equipamiento ergonómico para el detallado profesional.',
    size: 'full',
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProductShowcase = () => {
  return (
    <section id="products" className="showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Nuestras Líneas
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Soluciones
            <br />
            <span className="title-outline">Integrales</span>
          </motion.h2>

          <motion.div
            className="tricolor-stripe section-stripe"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        <motion.div
          className="bento-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className={`bento-card bento-${cat.size}`}
              variants={cardVariants}
            >
              <div
                className="bento-bg"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="bento-overlay" />

              <span className="bento-number" aria-hidden="true">
                {cat.number}
              </span>

              <div className="bento-content">
                <div className="bento-brands">
                  {cat.brands.map((b) => (
                    <span key={b} className="brand-pill">{b}</span>
                  ))}
                </div>
                <h3 className="bento-title">{cat.title}</h3>
                <p className="bento-desc">{cat.description}</p>
                <div className="bento-action">
                  <span>Ver Productos</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
