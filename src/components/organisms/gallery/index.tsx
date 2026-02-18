import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './gallery.module.css';

const galleryImages = [
  { src: '/assets/tdilip-05-t20wc-trophy.jpg', alt: 'T20 World Cup Trophy' },
  { src: '/assets/tdilip-06-champions-trophy.jpg', alt: 'Champions Trophy' },
  { src: '/assets/tdilip-07-dharamsala-drill.jpg', alt: 'Dharamsala Drill' },
  { src: '/assets/tdilip-08-india-dugout.jpg', alt: 'India Dugout' },
  { src: '/assets/tdilip-09-team-huddle.jpg', alt: 'Team Huddle' },
  { src: '/assets/tdilip-10-fielding-drill.jpg', alt: 'Fielding Drill' },
  { src: '/assets/tdilip-11-celebration.jpg', alt: 'Celebration' },
  { src: '/assets/tdilip-12-indoor-candid.jpg', alt: 'Indoor Candid' },
  { src: '/assets/tdilip-14-night-practice.jpg', alt: 'Night Practice' },
  { src: '/assets/tdilip-16-with-captain.jpg', alt: 'With Captain' },
  { src: '/assets/tdilip-17-glove-skyshot.jpg', alt: 'Glove Skyshot' },
  { src: '/assets/tdilip-18-trophy-airplane.jpg', alt: 'Trophy on Airplane' },
  { src: '/assets/tdilip-19-flag-profile.jpg', alt: 'Flag Profile' },
  { src: '/assets/tdilip-20-eden-gardens.jpg', alt: 'Eden Gardens' },
  { src: '/assets/tdilip-21-catching-drill.jpg', alt: 'Catching Drill' },
  { src: '/assets/tdilip-04-tunnel-walk.jpg', alt: 'Tunnel Walk' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className={`section ${styles.gallery}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            Coach <span className="gold-text">In Action</span>
          </h2>
          <p className="section-subtitle">
            Witness the journey behind the scenes of India's fielding revolution
          </p>
        </motion.div>

        <div className={styles.grid}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
              <div className={styles.itemOverlay}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
          >
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className={styles.lightboxImage}
              />
              <button className={styles.lightboxClose} onClick={() => setLightboxIndex(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              <div className={styles.lightboxCounter}>
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
              <button
                className={`${styles.lightboxNav} ${styles.prev}`}
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                  )
                }
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                className={`${styles.lightboxNav} ${styles.next}`}
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % galleryImages.length : 0
                  )
                }
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
