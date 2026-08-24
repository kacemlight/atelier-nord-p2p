import styles from './PhilosophyStrip.module.css';

const pillars = [
  {
    number: '01',
    title: 'Material Integrity',
    body: 'We specify only what belongs: stone that will age gracefully, wood that carries the memory of its origin, textiles woven by hands that know the craft. Every material is chosen for what it will become, not only what it is.',
  },
  {
    number: '02',
    title: 'Considered Proportion',
    body: 'Good rooms are felt before they are understood. We work with the geometry of each space — ceiling height, window rhythm, the fall of natural light — to establish a harmony that needs no explanation.',
  },
  {
    number: '03',
    title: 'Enduring Restraint',
    body: 'Our rooms do not follow seasons. We remove before we add; we question every object before it earns its place. The result is an environment that quiets the mind and deepens with time.',
  },
];

export function PhilosophyStrip() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">Our Approach</p>
          <h2 className={styles.title}>Design as a discipline of subtraction</h2>
        </div>
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <article key={p.number} className={styles.pillar}>
              <span className={styles.number}>{p.number}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
