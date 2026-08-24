import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>Atelier Nord</p>
          <p className={styles.tagline}>Warm minimalism. Natural materials. Enduring spaces.</p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.contact}>
          <p>12 Rue de Bretagne, 75003 Paris</p>
          <a href="mailto:studio@ateliernord.fr">studio@ateliernord.fr</a>
          <a href="tel:+33142721480">+33 1 42 72 14 80</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.legal}>
          &copy; {year} Atelier Nord. All rights reserved.
        </p>
        <p className={styles.legal}>
          Paris, France
        </p>
      </div>
    </footer>
  );
}
