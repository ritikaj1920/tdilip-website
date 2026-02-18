import { motion } from 'framer-motion';
import PageHero from '../../components/molecules/page-hero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { partners } from '../../data/partners';
import styles from './partners.module.css';

export default function PartnersPage() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <>
      <PageHero
        title="Partners"
        subtitle="T. Dilip's journey has been supported by industry-leading brands that share his commitment to excellence in cricket."
        bgImage="/assets/tdilip-09-team-huddle.jpg"
      />
      <section className={`section ${styles.partnersSection}`} ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Associations</span>
            <h2 className="section-title">Our <span className="gold-text">Partners</span></h2>
          </motion.div>
          <div className={styles.grid}>
            {partners.map((partner, i) => {
              const inner = (
                <>
                  <div className={styles.logoWrap}>
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className={styles.logo} />
                    ) : (
                      <span className={styles.initial}>{partner.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerDesc}>{partner.description}</p>
                  {partner.url && (
                    <span className={styles.visitLink}>
                      Visit Website
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  )}
                </>
              );

              return (
                <motion.div
                  key={partner.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={styles.cardInner}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
