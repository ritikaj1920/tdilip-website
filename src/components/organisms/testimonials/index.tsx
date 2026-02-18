import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { testimonials } from '../../../data/testimonials';
import styles from './testimonials.module.css';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`section ${styles.testimonials}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What People <span className="gold-text">Say</span>
          </h2>
          <p className="section-subtitle">Testimonials from players and colleagues</p>
        </motion.div>

        <div className={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" fill="rgba(212, 168, 83, 0.2)" />
                </svg>
              </div>
              <p className={styles.text}>{testimonials[activeIndex].text}</p>
              <div className={styles.author}>
                <div
                  className={styles.authorAvatar}
                  style={{ background: testimonials[activeIndex].color }}
                >
                  <span>{testimonials[activeIndex].name.charAt(0)}</span>
                </div>
                <span className={styles.authorName}>{testimonials[activeIndex].name}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
