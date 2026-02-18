import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/molecules/page-hero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  hhMission,
  hhVision,
  blogArticles,
  coreValues,
  keyPractices,
  boardMembers,
} from '../../data/helpingHands';
import styles from './helping-hands.module.css';

function MissionVision() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.mvSection}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.mvLayout}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.mvHeader}>
            <span className="section-label">Who We Are</span>
            <h2 className={styles.mvTitle}>
              Driven by <span className="gold-text">Purpose</span>
            </h2>
          </div>
          <div className={styles.mvCards}>
            <motion.div
              className={styles.mvCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className={styles.mvCardTag}>Mission</div>
              <p>{hhMission}</p>
            </motion.div>
            <motion.div
              className={styles.mvCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className={styles.mvCardTag}>Vision</div>
              <p>{hhVision}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  return (
    <section className={`section ${styles.blogSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Stories of Impact</span>
          <h2 className="section-title">
            Changing <span className="gold-text">Lives</span>
          </h2>
          <p className="section-subtitle">
            Real stories from the people and communities we&apos;ve worked with.
          </p>
        </motion.div>

        <div className={styles.blogGrid}>
          {blogArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              className={`${styles.blogCard} ${i === 0 ? styles.blogCardFeatured : ''}`}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <Link to={`/helping-hands/${article.slug}`} className={styles.blogLink}>
                <div className={styles.blogImgWrap}>
                  <img src={article.image} alt={article.title} loading="lazy" />
                </div>
                <div className={styles.blogBody}>
                  <span className={styles.blogDate}>{article.date}</span>
                  <h3 className={styles.blogTitle}>{article.title}</h3>
                  <p className={styles.blogExcerpt}>{article.excerpt}</p>
                  <span className={styles.blogReadMore}>
                    Read Story
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
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.valuesSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">What We Stand For</span>
          <h2 className="section-title">
            Core <span className="gold-text">Values</span>
          </h2>
        </motion.div>
        <div className={styles.valuesStrip}>
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              className={styles.valueItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <span className={styles.valueNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practices() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.practicesSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Key <span className="gold-text">Practices</span>
          </h2>
        </motion.div>
        <div className={styles.practicesList}>
          {keyPractices.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.practiceRow}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className={styles.practiceIndex}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.practiceLine} />
              </div>
              <div className={styles.practiceContent}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Board() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.boardSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Leadership</span>
          <h2 className="section-title">
            Our <span className="gold-text">Board</span>
          </h2>
        </motion.div>
        <div className={styles.boardGrid}>
          {boardMembers.map((m, i) => (
            <motion.div
              key={i}
              className={styles.boardCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={styles.boardInitial}>{m.name.charAt(0)}</div>
              <h3 className={styles.boardName}>{m.name}</h3>
              <span className={styles.boardRole}>{m.role}</span>
              <span className={styles.boardTitle}>{m.title}</span>
              <p className={styles.boardDesc}>{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HelpingHandsPage() {
  return (
    <>
      <PageHero
        title="Helping Hands"
        subtitle="Empowering sportspersons through mentorship, guidance, and community support"
        bgImage="/assets/tdilip-03-mentoring.jpg"
      />
      <MissionVision />
      <BlogGrid />
      <Values />
      <Practices />
      <Board />
    </>
  );
}
