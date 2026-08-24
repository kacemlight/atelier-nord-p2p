import Link from 'next/link';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section
      className={styles.hero}
      aria-label="Studio introduction"
      data-testid="hero-section"
    >
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgOverlay} />
        <div className={styles.bgPattern} />
      </div>

      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>Paris — Est. 2015</p>
        <h1 className={styles.headline} data-testid="hero-headline">
          Spaces that endure.
          <br />
          <em>Materials that speak.</em>
        </h1>
        <p className={styles.sub} data-testid="hero-sub">
          Atelier Nord is a Paris-based interior design studio practising warm minimalism —
          residential homes, boutique hotels, and considered commercial spaces
          shaped by natural materials and the unhurried logic of good proportion.
        </p>
        <div className={styles.actions} data-testid="hero-actions">
          <Link href="/portfolio" className={styles.primary} data-testid="hero-cta-portfolio">
            View Our Work
          </Link>
          <Link href="/contact" className={styles.secondary} data-testid="hero-cta-contact">
            Start a Conversation
          </Link>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
