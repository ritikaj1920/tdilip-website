import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

const quotes = [
  "Success isn't just about winning, it's about never giving up.",
  'Champions are made when no one is watching.',
  'Discipline, determination, and dedication – the keys to modern-day success.',
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/tdilip-05-t20wc-trophy.jpg"
      >
        <source src="/assets/videos/championInProgress.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.gradientBottom} />

      <div className={styles.grain} />

      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={styles.textBlock}
        >
          <span className={styles.tag}>India's Fielding Revolution</span>
          <h1 className={styles.title}>
            <span className={styles.nameGold}>T. Dilip</span>
            <br />
            <span className={styles.role}>Indian Team Fielding Coach</span>
          </h1>
          <p className={styles.description}>
            With over two decades of experience in nurturing cricketing talent,
            T. Dilip has played a key role in shaping India's fielding revolution
            at the highest level of international cricket.
          </p>

          <div className={styles.quoteWrap}>
            {quotes.map((q, i) => (
              <motion.blockquote
                key={i}
                className={styles.quote}
                animate={{ opacity: i === quoteIndex ? 0.85 : 0, y: i === quoteIndex ? 0 : 6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                "{q}"
              </motion.blockquote>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#about" className={styles.btnPrimary}>
              Discover More
            </a>
            <a href="#instagram" className={styles.btnOutline}>
              Follow the Journey
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cardImageWrap}>
            <img
              src="/assets/tdilip-02-oval-portrait.jpg"
              alt="T. Dilip Portrait"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.profileName}>T. Dilip</h3>
            <p className={styles.profileHandle}>@dilip.tk19</p>
            <div className={styles.profileStats}>
              <div className={styles.stat}>
                <strong>207</strong>
                <span>Posts</span>
              </div>
              <div className={styles.stat}>
                <strong>359K</strong>
                <span>Followers</span>
              </div>
              <div className={styles.stat}>
                <strong>177</strong>
                <span>Following</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/dilip.tk19/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              Follow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
