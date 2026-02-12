import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import './ContactFooter.css';

const ContactFooter = () => {
  return (
    <footer id="contact" className="footer">
      <div className="tricolor-stripe" />

      <div className="footer-container">
        <motion.div
          className="footer-wordmark"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          ETAPEL
        </motion.div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-col-label">Sobre Nosotros</h4>
            <p className="footer-text">
              Distribuidor oficial de equipamiento de pintura automotriz en México.
              Más de 15 años llevando tecnología de clase mundial a talleres de alta gama.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-label">Contacto</h4>
            <div className="footer-contacts">
              <a href="mailto:contacto@etapel.com" className="contact-row">
                <Mail size={16} />
                <span>contacto@etapel.com</span>
              </a>
              <a href="tel:+525512345678" className="contact-row">
                <Phone size={16} />
                <span>+52 55 1234 5678</span>
              </a>
              <div className="contact-row">
                <MapPin size={16} />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-label">Navegación</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">
                Inicio <ArrowUpRight size={12} />
              </a>
              <a href="#products" className="footer-link">
                Productos <ArrowUpRight size={12} />
              </a>
              <a href="#brands" className="footer-link">
                Marcas <ArrowUpRight size={12} />
              </a>
              <a href="#contact" className="footer-link">
                Contacto <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ETAPEL. Todos los derechos reservados.</p>
          <p className="footer-mx">Orgullosamente Mexicanos</p>
        </div>
      </div>

      <div className="tricolor-stripe footer-signature-stripe" />
    </footer>
  );
};

export default ContactFooter;
