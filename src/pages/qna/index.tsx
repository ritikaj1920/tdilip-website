import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/atoms/seo";
import PageHero from "../../components/molecules/page-hero";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { faqCategories } from "../../data/faq";
import styles from "./qna.module.css";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span className={styles.faqIdx}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={styles.faqQuestionText}>{question}</span>
        <motion.svg
          className={styles.faqIcon}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      <motion.div
        className={styles.faqAnswer}
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.25, delay: open ? 0.08 : 0 },
        }}
      >
        <p className={styles.faqAnswerText}>{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function QnAPage() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <>
      <SEO
        title="Questions & Answers"
        path="/qna"
        description="Frequently asked questions about T. Dilip's fielding coaching methods, career journey, and the art of cricket fielding. Get insights into coaching philosophy and techniques."
        image="/assets/tdilip-01-cafe-candid.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqCategories.flatMap((cat) =>
            cat.items.map((item) => ({
              '@type': 'Question',
              'name': item.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer,
              },
            }))
          ),
        }}
      />
      <PageHero
        title="Questions & Answers"
        subtitle="Common questions about fielding, coaching, and the journey"
        bgImage="/assets/tdilip-01-cafe-candid.jpg"
      />
      <section className={`section ${styles.faqSection}`} ref={ref}>
        <div className="container">
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className={styles.faqCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className={styles.catTitle}>{cat.category}</h3>
              <div className={styles.faqList}>
                {cat.items.map((item, i) => (
                  <FaqItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ask CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaGridOverlay} />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.ctaLabel}>Get in Touch</span>
            <h2 className={styles.ctaTitle}>Have a Question?</h2>
            <div className={styles.ctaDivider}>
              <span />
            </div>
            <p className={styles.ctaDesc}>
              Reach out via social media for fielding tips, coaching insights,
              or collaboration opportunities.
            </p>

            <div className={styles.ctaLinks}>
              <motion.a
                href="https://www.instagram.com/dilip.tk19/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaSocialBtn} ${styles.ctaBtnInsta}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.btnIconWrap}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.2"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <span className={styles.btnTextGroup}>
                  <span className={styles.btnSubtext}>Follow on</span>
                  <span className={styles.btnMainText}>Instagram</span>
                </span>
                <span className={styles.btnArrow}>
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
              </motion.a>

              <motion.a
                href="https://x.com/dilip_cc"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaSocialBtn} ${styles.ctaBtnX}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.btnIconWrap}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className={styles.btnTextGroup}>
                  <span className={styles.btnSubtext}>Follow on</span>
                  <span className={styles.btnMainText}>X (Twitter)</span>
                </span>
                <span className={styles.btnArrow}>
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
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
