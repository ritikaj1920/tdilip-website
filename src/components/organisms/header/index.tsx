import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Coach", path: "/coach" },
  { label: "Gallery", path: "/gallery" },
  { label: "Partners", path: "/partners" },
  { label: "Helping Hands", path: "/helping-hands" },
  { label: "Q&A", path: "/qna" },
  { label: "Submit Video", path: "/submit-video" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link to="/" className={styles.brand}>
          <img
            src="/assets/tdilip-logo.png"
            alt="Transforming Dreams"
            className={styles.logoImg}
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Transforming Dreams</span>
            <span className={styles.brandSub}>T. Dilip</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                pathname === item.path ? styles.navActive : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
