import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { miniTimelineData } from '../../../data/miniTimeline';
import styles from './journey-section.module.css';

export default function JourneySection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const [activeIdx, setActiveIdx] = useState(0);
  const active = miniTimelineData[activeIdx];

  return (
    <section className={`section ${styles.journey}`} ref={ref}>
      {/* Diagonal saffron accent strip */}
      <div className={styles.diagonalAccent} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Journey</span>
          <h2 className={styles.title}>
            From <span className={styles.titleGradient}>Hyderabad</span> to the World Stage
          </h2>
          <p className={styles.intro}>
            T. Dilip, born on September 1, 1980, in Hyderabad, Telangana, has emerged as one of
            the most transformative figures in Indian cricket coaching. From humble beginnings —
            funding his cricket through mathematics tuition — he built a career that would redefine
            India's fielding standards on the world stage.
          </p>
        </motion.div>

        <div className={styles.stage}>
          {/* Left: Active image + expanded description */}
          <motion.div
            className={styles.showcase}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                className={styles.showcaseInner}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.imageFrame}>
                  <img src={active.image} alt={active.imageAlt} />
                  <div className={styles.imageOverlay} />
                  <span className={styles.imageYear}>{active.year}</span>
                </div>
                <div className={styles.showcaseText}>
                  <h3 className={styles.showcaseTitle}>{active.title}</h3>
                  <p className={styles.showcaseDesc}>{active.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Timeline rail */}
          <motion.div
            className={styles.rail}
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.railLine}>
              <motion.div
                className={styles.railProgress}
                animate={{ height: `${((activeIdx + 1) / miniTimelineData.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            {miniTimelineData.map((node, i) => (
              <button
                key={i}
                className={`${styles.railNode} ${i === activeIdx ? styles.railNodeActive : ''} ${i < activeIdx ? styles.railNodePast : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <div className={styles.railDot}>
                  <div className={styles.railDotInner} />
                </div>
                <div className={styles.railContent}>
                  <span className={styles.railYear}>{node.year}</span>
                  <span className={styles.railTitle}>{node.title}</span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bottom narrative paragraphs */}
        <motion.div
          className={styles.narrative}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            With a Bachelor's degree in Computer Science from Aurora's College, Hyderabad, and the
            highest BCCI Level 3 coaching certification, Dilip brings an analytical, cross-sport
            approach to his craft. His methods, influenced by baseball techniques learned under
            Australian coach Mike Young at the Deccan Chargers, have revolutionized how India
            trains in the field.
          </p>
          <p>
            As the only coaching staff member retained across both the Dravid and Gambhir eras,
            his impact speaks for itself: four major ICC trophies, a transformed fielding culture,
            and a squad that now sets the global benchmark.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
