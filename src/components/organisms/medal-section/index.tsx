import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import styles from "./medal-section.module.css";

const stats = [
  { value: "2023", label: "Introduced" },
  { value: "Every Match", label: "Awarded" },
  { value: "Virat Kohli", label: "Notable Recipient" },
];

export default function MedalSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className={`section ${styles.medal}`} ref={ref}>
      {/* Radial glow behind medal */}
      <div className={styles.glow} />

      <div className="container">
        <div className={styles.layout}>
          {/* Medal Visual — left */}
          <motion.div
            className={styles.visualCol}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.medalOuter}>
              <div className={styles.medalRing}>
                <div className={styles.medalFace}>
                  <span className={styles.medalTop}>India Cricket</span>
                  <span className={styles.medalMain}>Best Fielder</span>
                  <span className={styles.medalBottom}>Match Award</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content — right */}
          <div className={styles.contentCol}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.eyebrow}>Signature Tradition</span>
              <h2 className={styles.heading}>
                The Best <span className="gold-text">Fielder</span> Medal
              </h2>
            </motion.div>

            <motion.blockquote
              className={styles.quote}
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              This medal is intended to appreciate contributions that are not
              often measured by statistics — the dives, the saves, the awareness
              that changes matches.
            </motion.blockquote>

            <motion.div
              className={styles.body}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                Introduced by T. Dilip approximately four months before the 2023
                Cricket World Cup, the Best Fielder Medal is a dressing-room
                award presented after each international match to the player
                judged to have made the most impactful fielding contribution. It
                recognises overall intent, effort, and awareness — not just
                statistical metrics like catches taken.
              </p>
              <p>
                The presentations became a viral sensation during the 2023 World
                Cup, with creative formats including spider-cam deliveries and
                guest presenters. The tradition has continued through every
                major tournament since, becoming a defining feature of the
                Indian dressing room.
              </p>
            </motion.div>

            <motion.div
              className={styles.statsRow}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <strong className={styles.statValue}>{s.value}</strong>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
