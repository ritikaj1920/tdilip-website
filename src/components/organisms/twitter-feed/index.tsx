import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { twitterProfile, tweets, type Tweet } from "../../../data/twitter";
import styles from "./twitter-feed.module.css";

function formatContent(text: string) {
  const parts = text.split(/(@\w+|#\w+)/g);
  return parts.map((part, i) => {
    if (part.startsWith("@") || part.startsWith("#")) {
      return (
        <span key={i} className={styles.mention}>
          {part}
        </span>
      );
    }
    return part;
  });
}

function TweetCard({ tweet, index }: { tweet: Tweet; index: number }) {
  return (
    <motion.div
      className={styles.tweetCard}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.tweetHeader}>
        <img
          src={twitterProfile.avatar}
          alt="Profile"
          className={styles.tweetAvatar}
        />
        <div className={styles.tweetMeta}>
          <span className={styles.tweetName}>T Dilip</span>
          <span className={styles.tweetHandle}>{twitterProfile.handle}</span>
          <span className={styles.tweetDot}>&middot;</span>
          <span className={styles.tweetTime}>{tweet.timestamp}</span>
        </div>
        <svg
          className={styles.twitterIcon}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="var(--text-muted)"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <p className={styles.tweetText}>{formatContent(tweet.content)}</p>

      {tweet.hasImage && tweet.image && (
        <img src={tweet.image} alt="" className={styles.tweetImage} />
      )}

      <div className={styles.tweetActions}>
        <span className={styles.action}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {tweet.comments}
        </span>
        <span className={styles.action}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M17 1l4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <path d="M7 23l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
          {tweet.retweets}
        </span>
        <span className={styles.action}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {tweet.likes}
        </span>
        {tweet.views && (
          <span className={styles.action}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {tweet.views}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function TwitterFeed() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="twitter" className={`section ${styles.twitter}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Social</span>
          <h2 className="section-title">
            {" "}
            <span className="gold-text">X</span> Feed
          </h2>
          <p className="section-subtitle">Latest posts from @dilip_cc</p>
        </motion.div>

        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.profileLeft}>
            <img
              src={twitterProfile.avatar}
              alt="Profile"
              className={styles.profileAvatar}
            />
            <div>
              <h3 className={styles.profileName}>{twitterProfile.name}</h3>
              <p className={styles.profileHandle}>{twitterProfile.handle}</p>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.profileStats}>
              <div className={styles.stat}>
                <strong>{twitterProfile.posts}</strong>
                <span>Posts</span>
              </div>
              <div className={styles.stat}>
                <strong>{twitterProfile.followers}</strong>
                <span>Followers</span>
              </div>
              <div className={styles.stat}>
                <strong>{twitterProfile.following}</strong>
                <span>Following</span>
              </div>
            </div>
            <a
              href={twitterProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              Follow
            </a>
          </div>
        </motion.div>

        <div className={styles.tweetsGrid}>
          {tweets.map((tweet, i) => (
            <TweetCard key={tweet.id} tweet={tweet} index={i} />
          ))}
        </div>

        <div className={styles.viewMore}>
          <a
            href={twitterProfile.profileUrl}
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
