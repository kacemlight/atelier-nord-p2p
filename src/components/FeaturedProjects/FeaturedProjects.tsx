import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from './FeaturedProjects.module.css';

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Selected Work</p>
          <h2 className={styles.title}>Recent Projects</h2>
          <Link href="/portfolio" className={styles.viewAll}>
            View All →
          </Link>
        </div>
        <div className={styles.grid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
