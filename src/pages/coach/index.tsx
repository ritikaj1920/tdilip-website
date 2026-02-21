import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../components/atoms/seo";
import PageHero from "../../components/molecules/page-hero";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { bioParagraphs } from "../../data/biography";
import { miniTimelineData } from "../../data/miniTimeline";
import { pillars, philosophyQuote } from "../../data/philosophy";
import {
  goldTrophies,
  silverTrophies,
  otherAchievements,
} from "../../data/achievements";
import { teamsData } from "../../data/teams";
import { recognitionQuotes } from "../../data/quotes";
import { testimonials } from "../../data/testimonials";
import { missionData } from "../../data/aboutContent";
import styles from "./coach.module.css";

/* ─── SVG Icons ─── */
const pillarIcons = [
  // Self-Belief — Flame
  <svg
    key="flame"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c.5 3.5-1 6-3.5 8.5C6 13 5 16 7 19c1.5 2.3 4.2 3 6 3 4.4 0 7-3.5 7-8 0-4-2.5-7-4-8.5C14.5 4 13 2.5 12 2z" />
    <path d="M12 14c-.5-1.5-2-2.5-2-4 0 2.5 2 4 2 6 0 .8-.3 1.5-1 2" />
  </svg>,
  // Team Unity — Connected nodes
  <svg
    key="unity"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="6" r="2.5" />
    <circle cx="17" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M8.5 8l2.5 8M15.5 8l-2.5 8M9.5 6h5" />
  </svg>,
  // Adaptability — Compass
  <svg
    key="compass"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <polygon
      points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
      strokeLinejoin="round"
    />
  </svg>,
  // Innovation — Lightbulb
  <svg
    key="bulb"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    <line x1="12" y1="6" x2="12" y2="10" />
    <line x1="10" y1="8" x2="14" y2="8" />
  </svg>,
];

/* Trophy icon — Cup silhouette */
function TrophyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h12v6a6 6 0 0 1-12 0V2z" />
      <path d="M6 4H3a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4" />
      <path d="M18 4h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" />
      <path d="M9 14v2a3 3 0 0 0 6 0v-2" />
      <line x1="8" y1="22" x2="16" y2="22" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </svg>
  );
}

/* Medal icon — Circle with ribbon */
function MedalIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="14" r="6" />
      <circle cx="12" cy="14" r="2.5" />
      <path d="M8 2l-2 10M16 2l2 10" />
      <path d="M8 2h8" />
    </svg>
  );
}

/* Star badge icon */
function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

/* ─── Journey Bio ─── */
function JourneyBio() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [activeIdx, setActiveIdx] = useState(0);
  const active = miniTimelineData[activeIdx];

  return (
    <section className={`section ${styles.journeySection}`} ref={ref}>
      <div className={styles.diagonalAccent} />
      <div className={styles.gridTexture} />

      <div className="container">
        <motion.div
          className={styles.journeyHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Story</span>
          <h2 className={styles.journeyTitle}>
            The <span className="gold-text">Journey</span>
          </h2>
        </motion.div>

        {/* Bio paragraphs — individually staggered */}
        <div className={styles.bioBlock}>
          {bioParagraphs.map((p, i) => (
            <motion.p
              key={i}
              className={i === 0 ? styles.bioFirst : styles.bioPara}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Chapter divider */}
        <motion.div
          className={styles.chapterDivider}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.chapterLabel}>Career Milestones</span>
        </motion.div>

        {/* Interactive Timeline */}
        <div className={styles.stage}>
          {/* Showcase */}
          <motion.div
            className={styles.showcase}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                className={styles.showcaseInner}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.imageFrame}>
                  <img src={active.image} alt={active.imageAlt} />
                  <div className={styles.imageOverlay} />
                  <span className={styles.imageYear}>{active.year}</span>
                  <span className={styles.imageStep}>
                    {String(activeIdx + 1).padStart(2, "0")}/
                    {String(miniTimelineData.length).padStart(2, "0")}
                  </span>
                </div>
                <div className={styles.showcaseText}>
                  <h3 className={styles.showcaseTitle}>{active.title}</h3>
                  <p className={styles.showcaseDesc}>{active.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Rail */}
          <motion.div
            className={styles.rail}
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.railLine}>
              <motion.div
                className={styles.railProgress}
                animate={{
                  height: `${
                    ((activeIdx + 1) / miniTimelineData.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            {miniTimelineData.map((node, i) => (
              <button
                key={i}
                className={`${styles.railNode} ${
                  i === activeIdx ? styles.railNodeActive : ""
                } ${i < activeIdx ? styles.railNodePast : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                <div className={styles.railDot}>
                  <div className={styles.railDotInner} />
                </div>
                <div className={styles.railContent}>
                  <span className={styles.railYear}>{node.year}</span>
                  <span className={styles.railLabel}>{node.title}</span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Narrative coda */}
        <motion.div
          className={styles.narrative}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            With a Bachelor's degree in Computer Science from Aurora's College,
            Hyderabad, and the highest BCCI Level 3 coaching certification,
            Dilip brings an analytical, cross-sport approach to his craft. His
            methods, influenced by baseball techniques learned under Australian
            coach Mike Young at the Deccan Chargers, have revolutionized how
            India trains in the field.
          </p>
          <p>
            As the only coaching staff member retained across both the Dravid
            and Gambhir eras, his impact speaks for itself: four major ICC
            trophies, a transformed fielding culture, and a squad that now sets
            the global benchmark.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Philosophy ─── */
function Philosophy() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.philSection}`} ref={ref}>
      <div className={styles.philGlow} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Philosophy</span>
          <h2 className="section-title">
            Coaching <span className="gold-text">Pillars</span>
          </h2>
        </motion.div>

        <motion.blockquote
          className={styles.philQuote}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className={styles.philQuoteMark}>&ldquo;</span>
          {philosophyQuote.replace(/[\u201C\u201D"]/g, "")}
        </motion.blockquote>

        <div className={styles.pillarGrid}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <span className={styles.pillarIdx}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.pillarIcon}>{pillarIcons[i]}</div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Achievements ─── */
function Achievements() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.achieveSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">
            Trophy <span className="gold-text">Cabinet</span>
          </h2>
        </motion.div>

        <div className={styles.trophySection}>
          <h3 className={styles.trophyTier}>
            <span className={styles.tierDot} data-tier="gold" />
            Gold
            <span className={styles.tierCount}>{goldTrophies.length}</span>
          </h3>
          <div className={styles.trophyGrid}>
            {goldTrophies.map((t, i) => (
              <motion.div
                key={i}
                className={`${styles.trophyCard} ${styles.goldCard}`}
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className={styles.trophyIconWrap} data-tier="gold">
                  <TrophyIcon />
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.trophySection}>
          <h3 className={styles.trophyTier}>
            <span className={styles.tierDot} data-tier="silver" />
            Silver
            <span className={styles.tierCount}>{silverTrophies.length}</span>
          </h3>
          <div className={styles.trophyGrid}>
            {silverTrophies.map((t, i) => (
              <motion.div
                key={i}
                className={`${styles.trophyCard} ${styles.silverCard}`}
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className={styles.trophyIconWrap} data-tier="silver">
                  <MedalIcon />
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.trophySection}>
          <h3 className={styles.trophyTier}>
            <span className={styles.tierDot} data-tier="milestone" />
            Milestones
            <span className={styles.tierCount}>{otherAchievements.length}</span>
          </h3>
          <div className={styles.trophyGrid}>
            {otherAchievements.map((t, i) => (
              <motion.div
                key={i}
                className={styles.trophyCard}
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className={styles.trophyIconWrap} data-tier="milestone">
                  <StarIcon />
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Teams Coached ─── */
function TeamsCoached() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.teamsSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Teams</span>
          <h2 className="section-title">
            Teams <span className="gold-text">Coached</span>
          </h2>
        </motion.div>
        <div className={styles.teamGrid}>
          {teamsData.map((cat, i) => (
            <motion.div
              key={cat.category}
              className={styles.teamCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catIdx}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.catTitle}>{cat.category}</h3>
              </div>
              <div className={styles.teamBadges}>
                {cat.teams.map((team, j) => (
                  <motion.span
                    key={team}
                    className={styles.teamBadge}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.25 + i * 0.08 + j * 0.04,
                    }}
                  >
                    {team}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Recognition ─── */
function Recognition() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className={`section ${styles.recogSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-title">
            In Their <span className="gold-text">Words</span>
          </h2>
        </motion.div>
        <div className={styles.quoteGrid}>
          {recognitionQuotes.map((q, i) => (
            <motion.div
              key={i}
              className={styles.quoteCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            >
              <span className={styles.quoteOpenMark}>&ldquo;</span>
              <p className={styles.quoteText}>
                {q.text.replace(/[\u201C\u201D"]/g, "")}
              </p>
              <div className={styles.quoteCite}>
                <div className={styles.citeAvatar}>
                  <span>{q.cite.charAt(0)}</span>
                </div>
                <div>
                  <strong>{q.cite}</strong>
                  <span className={styles.citeRole}>{q.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className={`section ${styles.testSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What People <span className="gold-text">Say</span>
          </h2>
        </motion.div>
        <div className={styles.testGrid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`${styles.testCard} ${
                i === activeIndex ? styles.testActive : ""
              }`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <span className={styles.testQuoteMark}>&ldquo;</span>
              <p className={styles.testText}>{t.text}</p>
              <div className={styles.testAuthor}>
                <div
                  className={styles.testAvatar}
                  style={{ background: t.color }}
                >
                  <span>{t.name.charAt(0)}</span>
                </div>
                <strong>{t.name}</strong>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mission & Vision ─── */
function MissionVision() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section className={`section ${styles.mvSection}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Purpose</span>
          <h2 className="section-title">
            Mission & <span className="gold-text">Vision</span>
          </h2>
        </motion.div>
        <div className={styles.mvGrid}>
          <motion.div
            className={styles.mvCard}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <h3 className={styles.mvTitle}>{missionData.mission.title}</h3>
            <p className={styles.mvDesc}>{missionData.mission.description}</p>
          </motion.div>
          <motion.div
            className={styles.mvCard}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <h3 className={styles.mvTitle}>{missionData.vision.title}</h3>
            <p className={styles.mvDesc}>{missionData.vision.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function CoachPage() {
  return (
    <>
      <SEO
        title="Coach – The Story of T. Dilip"
        path="/coach"
        description="The complete story of T. Dilip — from Hyderabad's local grounds to Fielding Coach of India. Biography, coaching philosophy, career milestones, achievements, and teams coached."
        image="/assets/tdilip-10-fielding-drill.jpg"
      />
      <PageHero
        title="Coach"
        subtitle="The story of T. Dilip — from Hyderabad's local grounds to the pinnacle of world cricket coaching"
        bgImage="/assets/tdilip-10-fielding-drill.jpg"
        bgPosition="center top"
      />
      <JourneyBio />
      <Philosophy />
      <MissionVision />
      <Achievements />
      <TeamsCoached />
      <Recognition />
      <TestimonialsSection />
    </>
  );
}
