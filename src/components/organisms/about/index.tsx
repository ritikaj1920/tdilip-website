import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { timelineData } from '../../../data/timeline';
import styles from './about.module.css';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Coach</span>
          <h2 className="section-title">
            Meet <span className="gold-text">T. Dilip</span>
          </h2>
          <p className="section-subtitle">
            Crafting Champions, One Fielding Session at a Time
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageWrap}>
              <img
                src="/assets/tdilip-03-mentoring.jpg"
                alt="T. Dilip mentoring players"
                className={styles.aboutImage}
              />
              <div className={styles.imageBorder} />
            </div>
            <div className={styles.tags}>
              <span className={styles.tagItem}>Fielding Expert</span>
              <span className={styles.tagItem}>NCA Level 3</span>
              <span className={styles.tagItem}>Team India</span>
              <span className={styles.tagItem}>IPL Coach</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.bio}>
              Welcome to the story of T. Dilip, a cricket coach with an exceptional track record
              in fielding and team bonding exercises, known for his innovative coaching techniques
              and motivational leadership. From humble beginnings to becoming a pivotal figure in
              cricket coaching, T. Dilip has been dedicated to the development of players across
              formats.
            </p>

            <div className={styles.timeline}>
              {timelineData.map((entry, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>{entry.year}</span>
                    <h4 className={styles.timelineTitle}>{entry.title}</h4>
                    <p className={styles.timelineDesc}>{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
