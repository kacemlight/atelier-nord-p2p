import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { projects, getProjectBySlug } from '@/data/projects';
import styles from './page.module.css';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Hero image area */}
        <div className={styles.heroImage}>
          <div className={styles.heroPlaceholder} aria-label={`Image: ${project.title}`}>
            <span className={styles.heroCategory}>{project.category}</span>
          </div>
        </div>

        <div className="container">
          <div className={styles.content}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/portfolio">Portfolio</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span>{project.title}</span>
            </nav>

            <div className={styles.header}>
              <div className={styles.headerText}>
                <p className={styles.eyebrow}>{project.category}</p>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.location}>{project.location}</p>
              </div>
              <div className={styles.specs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Year</span>
                  <span className={styles.specValue}>{project.year}</span>
                </div>
                {project.area && (
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Area</span>
                    <span className={styles.specValue}>{project.area}</span>
                  </div>
                )}
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Scope</span>
                  <div className={styles.scopeList}>
                    {project.scope.map((s) => (
                      <span key={s} className={styles.scopeTag}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.description}>
              <p>{project.description}</p>
            </div>

            {/* Additional image area */}
            <div className={styles.imageRow}>
              <div className={styles.subImage} aria-label="Project detail image">
                <span className={styles.imageMeta}>{project.title} &mdash; detail</span>
              </div>
              <div className={styles.subImage} aria-label="Project detail image">
                <span className={styles.imageMeta}>{project.title} &mdash; space</span>
              </div>
            </div>

            <div className={styles.nav}>
              <Link href="/portfolio" className={styles.backLink}>&larr; All projects</Link>
              <Link href="/contact" className={styles.cta}>Start a similar project</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
