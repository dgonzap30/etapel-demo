import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { y: '100%' },
    visible: {
      y: '0%',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' },
    visible: {
      clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 15% 100%)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="/assets/images/hero-bg.jpg" alt="" aria-hidden="true" />
      </motion.div>

      <div className="hero-scrim" />

      <div className="hero-content">
        <motion.div
          className="hero-headlines"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="headline-clip">
            <motion.div className="headline-line" variants={lineVariants}>
              <span className="hero-label">Distribuidor Oficial en México</span>
            </motion.div>
          </div>

          <div className="headline-clip">
            <motion.h1 className="hero-title-line" variants={lineVariants}>
              Equipamiento
            </motion.h1>
          </div>

          <div className="headline-clip">
            <motion.h1 className="hero-title-line hero-title-outline" variants={lineVariants}>
              De <span className="text-gold">Elite.</span>
            </motion.h1>
          </div>

          <motion.p className="hero-subtitle" variants={fadeUpVariants}>
            Tecnología de acabado automotriz de clase mundial.
            <br />
            SATA &middot; PPG &middot; GYS &middot; Rupes &middot; y más.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUpVariants}>
            <a href="#products" className="btn-primary">
              Ver Catálogo
              <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Contactar Ventas
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-deco-number" aria-hidden="true">E</div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
