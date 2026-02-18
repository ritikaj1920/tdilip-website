import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useCountUp } from '../../../hooks/useCountUp';
import styles from './stats.module.css';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}

function StatItem({ end, suffix, label, started, delay }: StatItemProps) {
  const count = useCountUp(end, 2000, started);

  return (
    <motion.div
      className={styles.statCard}
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className={styles.number}>
        {count}
        {suffix}
      </h3>
      <p className={styles.label}>{label}</p>
    </motion.div>
  );
}

const stats = [
  { end: 17, suffix: '+', label: 'Years of Coaching' },
  { end: 15, suffix: '+', label: 'Teams Coached' },
  { end: 100, suffix: '+', label: 'Players Trained' },
  { end: 359, suffix: 'K+', label: 'Instagram Followers' },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className={styles.stats} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
            started={isVisible}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
