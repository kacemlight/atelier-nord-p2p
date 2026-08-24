import { Metadata } from 'next';
import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the founders of Atelier Nord and learn about our philosophy of warm minimalism and material integrity.',
};

const founders = [
  {
    name: 'Claire Fontaine',
    role: 'Co-founder, Creative Director',
    bio: 'Claire trained at the École Boulle in Paris before spending five years with a Milanese architecture firm, where she developed her approach to material intelligence — the conviction that a room should be felt before it is seen. She leads concept and design direction at the studio, with a particular interest in the intersection of craft and contemporary space.',
    education: 'École Boulle, Paris — Interior Architecture',
    color: '#C9BFB0',
  },
  {
    name: 'Marc Delerue',
    role: 'Co-founder, Project Director',
    bio: 'Marc comes from a background in architectural engineering, with formative years spent working on conservation projects in Lyon and Strasbourg. His focus is the technical rigour that makes beautiful design liveable: how a room breathes, how light moves through it across the day, how it ages. He oversees project delivery and client relationships at Atelier Nord.',
    education: 'École Nationale Supérieure d’Architecture de Lyon',
    color: '#8B7355',
  },
];

const press = [
  { publication: 'AD France', quote: 'A studio with a rare gift for knowing when to stop.', year: '2023' },
  { publication: 'Wallpaper*', quote: 'Atelier Nord reminds us that restraint, applied with precision, is its own form of extravagance.', year: '2023' },
  { publication: 'Elle D\u00e9coration', quote: 'Among the most quietly influential studios working in France today.', year: '2022' },
  { publication: 'The World of Interiors', quote: 'Their work has the quality of something inevitable — as though no other result were possible.', year: '2022' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Studio</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            marginTop: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
            maxWidth: '760px',
          }}>
            Nine years of practice,
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>one philosophy.</em>
          </h1>

          <div className={styles.philosophyBlock}>
            <p className={styles.philosophyText}>
              We founded Atelier Nord in 2015 with a single conviction: that the most enduring interiors are those built from material honesty, spatial clarity, and the restraint to let a room breathe. We do not follow trends. We follow light, texture, and the specific life that will inhabit each space.
            </p>
            <p className={styles.philosophyText}>
              The studio is deliberately small. We take a limited number of projects each year so that every commission receives the quality of attention it deserves. Our clients are people who value the process as much as the result — who understand that good design is not a transaction but a collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.foundersSection}>
        <div className="container">
          <p className="eyebrow">The Founders</p>
          <div className={styles.foundersGrid}>
            {founders.map((founder) => (
              <div key={founder.name} className={styles.founderCard}>
                <div className={styles.founderPortrait} style={{ backgroundColor: founder.color }} aria-hidden="true" />
                <div className={styles.founderInfo}>
                  <h2 className={styles.founderName}>{founder.name}</h2>
                  <p className={styles.founderRole}>{founder.role}</p>
                  <p className={styles.founderBio}>{founder.bio}</p>
                  <p className={styles.founderEducation}>{founder.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Press</p>
          <div className={styles.pressGrid}>
            {press.map((item) => (
              <div key={item.publication} className={styles.pressItem}>
                <p className={styles.pressQuote}>&ldquo;{item.quote}&rdquo;</p>
                <div className={styles.pressMeta}>
                  <span className={styles.pressPublication}>{item.publication}</span>
                  <span className={styles.pressYear}>{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
