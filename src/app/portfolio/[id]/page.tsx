import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectById, projects } from '@/lib/projects';
import styles from './ProjectDetail.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) notFound();

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className={styles.hero} style={{ backgroundColor: project.coverColor }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroYear}>{project.year}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Link href="/portfolio" className={styles.back}>← All Projects</Link>

          <div className={styles.layout}>
            <div className={styles.main}>
              <p className="eyebrow">{project.category}</p>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.longDescription}</p>
            </div>

            <aside className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{project.location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Area</span>
                <span className={styles.metaValue}>{project.area}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Scope</span>
                <ul className={styles.scopeList}>
                  {project.scope.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </aside>
          </div>

          <div className={styles.imageGrid}>
            {[1,2,3].map((n) => (
              <div
                key={n}
                className={styles.imagePlaceholder}
                style={{ backgroundColor: project.coverColor, opacity: 1 - (n - 1) * 0.15 }}
                aria-label={`${project.title} — image ${n}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
