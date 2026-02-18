import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import {
  instagramProfile,
  instagramPosts,
  type InstagramPost,
} from "../../../data/instagram";
import styles from "./instagram-feed.module.css";

function PostCard({ post, index }: { post: InstagramPost; index: number }) {
  return (
    <motion.div
      className={styles.postCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.postImage}>
        <img
          src={post.image}
          alt={post.description}
          className={styles.postImg}
          loading="lazy"
        />
        {post.isVideo && (
          <div className={styles.videoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <div className={styles.postOverlay}>
          <div className={styles.engagementStats}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {post.likes}
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function InstagramFeed() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="instagram" className={`section ${styles.instagram}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Social</span>
          <h2 className="section-title">
            <span className="gold-text">Instagram</span> Feed
          </h2>
          <p className="section-subtitle">Latest posts from @dilip.tk19</p>
        </motion.div>

        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.profileLeft}>
            <div className={styles.avatarRing}>
              <img
                src={instagramProfile.avatar}
                alt="Profile"
                className={styles.avatar}
              />
            </div>
            <div>
              <h3 className={styles.profileName}>
                {instagramProfile.name}
                <svg
                  className={styles.verified}
                  aria-label="Verified"
                  fill="rgb(0, 149, 246)"
                  height="14"
                  role="img"
                  viewBox="0 0 40 40"
                  width="14"
                >
                  <title>Verified</title>
                  <circle cx="20" cy="20" r="12" fill="#fff" />
                  <path
                    d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                    fillRule="evenodd"
                  />
                </svg>
              </h3>
              <p className={styles.handle}>{instagramProfile.handle}</p>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.profileStats}>
              <div className={styles.stat}>
                <strong>{instagramProfile.posts}</strong>
                <span>Posts</span>
              </div>
              <div className={styles.stat}>
                <strong>{instagramProfile.followers}</strong>
                <span>Followers</span>
              </div>
              <div className={styles.stat}>
                <strong>{instagramProfile.following}</strong>
                <span>Following</span>
              </div>
            </div>
            <a
              href={instagramProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              Follow
            </a>
          </div>
        </motion.div>

        <div className={styles.postsGrid}>
          {instagramPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <div className={styles.viewMore}>
          <a
            href={instagramProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewBtn}
          >
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
}
