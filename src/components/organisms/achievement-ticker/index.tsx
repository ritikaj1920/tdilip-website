import styles from './achievement-ticker.module.css';

const trophies = [
  '2023 Asia Cup Champions',
  '2024 T20 World Cup Champions',
  '2025 Champions Trophy Winners',
  '2025 Asia Cup Champions',
];

function TickerStrip() {
  return (
    <>
      {trophies.map((text, i) => (
        <span key={i} className={styles.item}>
          <svg className={styles.trophy} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
          </svg>
          {text}
        </span>
      ))}
    </>
  );
}

export default function AchievementTicker() {
  return (
    <section className={styles.ticker}>
      <div className={styles.track}>
        <TickerStrip />
        <TickerStrip />
        <TickerStrip />
      </div>
    </section>
  );
}
