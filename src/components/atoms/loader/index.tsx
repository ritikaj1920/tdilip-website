import { motion, AnimatePresence } from "framer-motion";
import styles from "./loader.module.css";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.tricolor} />
          <div className={styles.center}>
            <div className={styles.ringWrap}>
              <div className={styles.ring} />
              <img
                src="/assets/tdilip-logo.png"
                alt="T. Dilip"
                className={styles.logo}
              />
            </div>
            <span className={styles.text}>T. DILIP</span>
            <span className={styles.subtext}>Fielding Coach</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
