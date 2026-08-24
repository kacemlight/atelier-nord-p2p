import Link from 'next/link';
import styles from './CtaBanner.module.css';

export function CtaBanner() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <p className="eyebrow">Begin Here</p>
          <h2 className={styles.title}>
            Every considered space
            <br />
            begins with a conversation.
          </h2>
          <p className={styles.body}>
            We take on a small number of projects each year — a deliberate choice that allows
            us to give each commission the full depth of our attention. If you have a project in
            mind, we would love to hear from you.
          </p>
          <Link href="/contact" className={styles.cta}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
