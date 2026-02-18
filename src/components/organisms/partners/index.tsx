import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { partners } from '../../../data/partners';
import styles from './partners.module.css';

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className={`section ${styles.partners}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Associations</span>
          <h2 className="section-title">
            Partners & <span className="gold-text">Sponsors</span>
          </h2>
          <p className="section-subtitle">Proudly associated with</p>
        </motion.div>

        <div className={styles.grid}>
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              className={styles.partnerCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={styles.partnerLogo}
                />
              ) : (
                <span className={styles.partnerName}>{partner.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
