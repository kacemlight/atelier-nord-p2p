import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { teamMembers, pressMentions } from '@/data/team';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About',
  description: 'Two founders, nine years of practice. Atelier Nord is a Paris-based studio for residential and hospitality interior design.'
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">

          {/* Studio intro */}
          <div className={styles.intro}>
            <p className={styles.eyebrow}>The studio</p>
            <h1 className={styles.heading}>About Atelier Nord</h1>
          </div>

          <div className={styles.philosophyBlock}>
            <div className={styles.philosophyText}>
              <h2 className={styles.subHeading}>
                We are a studio of two,<br />working as one.
              </h2>
              <p>
                Atelier Nord was founded in Paris in 2015 by Claire Fontaine and
                Julien Marchand. After a combined sixteen years in separate
                practices — Claire in residential, Julien in hospitality — we
                found that we shared the same instinct: that the best interior
                is the one you stop noticing because it simply works.
              </p>
              <p>
                We are deliberately small. Every project is led by one of us,
                with the other as critic and conscience. That size limits how
                many projects we accept, and it is the condition that makes
                the quality possible.
              </p>
              <p>
                Our practice is grounded in French craft traditions and
                committed to natural, durable materials. We have no signature
                style — only a signature standard.
              </p>
            </div>
          </div>

          {/* Team */}
          <section className={styles.team}>
            <h2 className={styles.sectionTitle}>The founders</h2>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.member}>
                  <div className={styles.memberImage}>
                    <div className={styles.memberPlaceholder} aria-label={member.name}>
                      <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberBio}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Press */}
          <section className={styles.press}>
            <h2 className={styles.sectionTitle}>Press</h2>
            <div className={styles.pressList}>
              {pressMentions.map((mention) => (
                <div key={mention.id} className={styles.pressItem}>
                  <span className={styles.pressYear}>{mention.year}</span>
                  <div className={styles.pressBody}>
                    <span className={styles.pressPublication}>{mention.publication}</span>
                    <p className={styles.pressTitle}>&ldquo;{mention.title}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              We are currently accepting enquiries for projects beginning in 2025.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>Enquire about your project</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
