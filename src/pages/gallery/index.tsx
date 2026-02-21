import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/atoms/seo';
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
  { src: '/assets/tdilip-13-smile-portrait.jpg', alt: 'Smile Portrait' },
  { src: '/assets/tdilip-14-night-practice.jpg', alt: 'Night Practice' },
  { src: '/assets/tdilip-15-airport-tarmac.jpg', alt: 'Airport Tarmac' },
  { src: '/assets/tdilip-16-with-captain.jpg', alt: 'With Captain' },
  { src: '/assets/tdilip-17-glove-skyshot.jpg', alt: 'Glove Skyshot' },
  { src: '/assets/tdilip-18-trophy-airplane.jpg', alt: 'Trophy on Airplane' },
  { src: '/assets/tdilip-19-flag-profile.jpg', alt: 'Flag Profile' },
  { src: '/assets/tdilip-20-eden-gardens.jpg', alt: 'Eden Gardens' },
  { src: '/assets/tdilip-21-catching-drill.jpg', alt: 'Catching Drill' },
  { src: '/assets/tdilip-01-cafe-candid.jpg', alt: 'Cafe Candid' },
  { src: '/assets/tdilip-02-oval-portrait.jpg', alt: 'Oval Portrait' },
  { src: '/assets/tdilip-03-mentoring.jpg', alt: 'Mentoring' },
  { src: '/assets/tdilip-04-tunnel-walk.jpg', alt: 'Tunnel Walk' },
];

const galleryVideos = [
  {
    title: 'Champion In Progress',
    description: 'A glimpse into the relentless pursuit of excellence — training drills, match-day intensity, and the moments that define a champion.',
    src: '/assets/videos/championInProgress.mp4',
    poster: '/assets/tdilip-05-t20wc-trophy.jpg',
  },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Gallery"
        path="/gallery"
        description="Photo and video gallery of T. Dilip — training sessions, match days, trophy celebrations, and behind-the-scenes moments from his journey with Indian cricket."
        image="/assets/tdilip-05-t20wc-trophy.jpg"
      />
      <section className={`section ${styles.galleryPage}`}>
        <div className="container">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Moments That <span className="gold-text">Define</span></h2>
          <p className="section-subtitle">
            Training sessions, match days, celebrations, and behind-the-scenes moments from T. Dilip's journey with Indian cricket.
          </p>

          <div className={styles.masonry}>
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={styles.masonryItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.src} alt={img.alt} className={styles.masonryImg} loading="lazy" />
                <div className={styles.masonryOverlay}>
                  <span>{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`section ${styles.videoSection}`}>
        <div className="container">
          <span className="section-label">Videos</span>
          <h2 className="section-title">Behind The <span className="gold-text">Scenes</span></h2>
          <p className="section-subtitle">
            Exclusive footage from training sessions, match preparations, and milestone moments.
          </p>

          <div className={styles.videoGrid}>
            {galleryVideos.map((vid, i) => (
              <motion.div
                key={i}
                className={styles.videoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.videoWrap}>
                  <video
                    controls
                    className={styles.video}
                    poster={vid.poster}
                    preload="metadata"
                  >
                    <source src={vid.src} type="video/mp4" />
                  </video>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{vid.title}</h3>
                  <p className={styles.videoDesc}>{vid.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
              <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className={styles.lightboxImg} />
              <button className={styles.lbClose} onClick={() => setLightboxIndex(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
              </button>
              <div className={styles.lbCounter}>{lightboxIndex + 1} / {galleryImages.length}</div>
              <button className={`${styles.lbNav} ${styles.lbPrev}`}
                onClick={() => setLightboxIndex(p => p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
              </button>
              <button className={`${styles.lbNav} ${styles.lbNext}`}
                onClick={() => setLightboxIndex(p => p !== null ? (p + 1) % galleryImages.length : 0)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
