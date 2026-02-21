import { motion } from 'framer-motion';
import SEO from '../../components/atoms/seo';
import PageHero from '../../components/molecules/page-hero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cricketJourney, missionData } from '../../data/aboutContent';
import styles from './about.module.css';

function CricketJourney() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.journeySection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Story</span>
          <h2 className="section-title">The Cricket <span className="gold-text">Journey</span></h2>
        </motion.div>
        <motion.div
          className={styles.journeyContent}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {cricketJourney.map((p, i) => (
            <p key={i} className={i === 0 ? styles.journeyFirst : styles.journeyPara}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section className={`section ${styles.mvSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Purpose</span>
          <h2 className="section-title">Mission & <span className="gold-text">Vision</span></h2>
        </motion.div>
        <div className={styles.mvGrid}>
          <motion.div className={styles.mvCard}
            initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className={styles.mvTitle}>{missionData.mission.title}</h3>
            <p className={styles.mvDesc}>{missionData.mission.description}</p>
          </motion.div>
          <motion.div className={styles.mvCard}
            initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className={styles.mvTitle}>{missionData.vision.title}</h3>
            <p className={styles.mvDesc}>{missionData.vision.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About T. Dilip"
        path="/about"
        description="Born in Hyderabad, Tirumala Dilip Kumar rose from modest beginnings to become India's Fielding Coach. Learn about his cricket journey, mission, and vision for transforming fielding standards."
        image="/assets/tdilip-04-tunnel-walk.jpg"
      />
      <PageHero
        title="About"
        subtitle="The Story Behind Transforming Dreams"
        bgImage="/assets/tdilip-04-tunnel-walk.jpg"
        bgPosition="center top"
      />
      <CricketJourney />
      <MissionVision />
    </>
  );
}
