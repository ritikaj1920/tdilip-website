import { motion } from 'framer-motion';
import styles from './page-hero.module.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  bgPosition?: string;
}

export default function PageHero({ title, subtitle, bgImage, bgPosition = 'center center' }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: bgPosition }}
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>{title}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
      </div>
      <div className={styles.gradientBottom} />
    </section>
  );
}
