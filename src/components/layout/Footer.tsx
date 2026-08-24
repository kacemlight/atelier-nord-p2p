import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Atelier Nord</span>
          <p className={styles.tagline}>Interior design studio, Paris</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.contact}>
          <p>7 Rue de Bretagne, 75003 Paris</p>
          <a href="mailto:studio@ateliernord.fr">studio@ateliernord.fr</a>
        </div>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Atelier Nord. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
