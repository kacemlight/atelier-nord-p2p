import styles from './PressStrip.module.css';

const mentions = [
  { outlet: 'AD France', quote: '…an interior practice of exceptional restraint and material intelligence.' },
  { outlet: 'ELLE Décoration', quote: '…the kind of rooms that make you want to stay forever.' },
  { outlet: 'The World of Interiors', quote: '…quietly brilliant, deeply considered.' },
  { outlet: 'Dezeen', quote: '…a studio that trusts the space to do the talking.' },
  { outlet: 'Milk Decoration', quote: '…warmth and rigour in equal measure.' },
];

export function PressStrip() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <p className={`eyebrow ${styles.label}`}>As Seen In</p>
        <div className={styles.marqueeWrapper} aria-label="Press mentions">
          <div className={styles.marquee}>
            {[...mentions, ...mentions].map((m, i) => (
              <div key={i} className={styles.item}>
                <span className={styles.outlet}>{m.outlet}</span>
                <span className={styles.divider} aria-hidden="true">—</span>
                <q className={styles.quote}>{m.quote}</q>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
