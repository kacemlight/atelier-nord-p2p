import Link from 'next/link';
import styles from './ServicesTeaser.module.css';

const services = [
  {
    title: 'Full Interior Design',
    description: 'End-to-end design direction for new builds and significant renovations — from initial concept through construction supervision and final installation.',
    href: '/services#full-interior-design',
  },
  {
    title: 'Renovation Consulting',
    description: 'Strategic guidance for clients navigating a renovation: scope definition, contractor selection, material specification, and quality oversight.',
    href: '/services#renovation-consulting',
  },
  {
    title: 'Furniture Curation',
    description: 'A bespoke selection service for clients who need a considered furniture programme — sourced from European artisans, makers, and carefully chosen vintage.',
    href: '/services#furniture-curation',
  },
];

export function ServicesTeaser() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What We Offer</p>
          <h2 className={styles.title}>Three ways to work together</h2>
          <Link href="/services" className={styles.link}>Explore Services →</Link>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <Link key={s.title} href={s.href} className={styles.card}>
              <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.description}</p>
              <span className={styles.cardCta}>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
