import Link from 'next/link';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { getFeaturedProjects } from '@/data/projects';
import styles from './page.module.css';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Paris &mdash; Founded 2015</p>
            <h1 className={styles.heroHeadline}>
              Spaces that know<br />
              <em>exactly</em> what they are.
            </h1>
            <p className={styles.heroSub}>
              Atelier Nord is a Paris-based interior design studio specialising
              in residential projects and boutique hotels. We work with natural
              materials, warm minimalism, and nine years of uncompromised practice.
            </p>
            <div className={styles.heroCta}>
              <Link href="/portfolio" className={styles.btnPrimary}>View our work</Link>
              <Link href="/contact" className={styles.btnSecondary}>Start a project</Link>
            </div>
          </div>
          <div className={styles.heroRule} aria-hidden="true" />
        </section>

        {/* Featured projects */}
        <section className={styles.featured}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Selected work</h2>
              <Link href="/portfolio" className={styles.seeAll}>All projects &rarr;</Link>
            </div>
            <div className={styles.projectGrid}>
              {featured.map((project, i) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className={`${styles.projectCard} ${i === 0 ? styles.large : ''}`}
                >
                  <div className={styles.projectImage}>
                    <div className={styles.imagePlaceholder} aria-hidden="true">
                      <span className={styles.placeholderLabel}>{project.category}</span>
                    </div>
                  </div>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectLocation}>{project.location} &mdash; {project.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className={styles.philosophy}>
          <div className={`container ${styles.philosophyInner}`}>
            <div className={styles.philosophyText}>
              <h2 className={styles.philosophyTitle}>
                We design interiors<br />that last.
              </h2>
              <p>
                Not because we follow trends carefully, but because we ignore them
                deliberately. Every project begins with the same questions: what does
                this space need to do, what does it already know, and what is the
                simplest material decision that serves both?
              </p>
              <p>
                The result is interiors that feel inevitable — as if they could not
                have been any other way. That quality takes time to arrive at, and
                it is the only standard we work to.
              </p>
              <Link href="/about" className={styles.btnSecondary}>About the studio</Link>
            </div>
            <div className={styles.philosophyStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>9</span>
                <span className={styles.statLabel}>Years of practice</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>Projects completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Press recognitions in 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services teaser */}
        <section className={styles.serviceTeaser}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How we work</h2>
            <div className={styles.serviceGrid}>
              {[
                { title: 'Full Interior Design', desc: 'End-to-end direction from first brief to final installation. Nothing left to chance.' },
                { title: 'Renovation Consulting', desc: 'Targeted design guidance and complete specification for clients managing their own delivery.' },
                { title: 'Furniture Curation', desc: 'Considered objects for spaces that already have a character — and need pieces that belong.' }
              ].map((s) => (
                <div key={s.title} className={styles.serviceItem}>
                  <h3 className={styles.serviceItemTitle}>{s.title}</h3>
                  <p className={styles.serviceItemDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.serviceCta}>
              <Link href="/services" className={styles.btnSecondary}>Our services &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
