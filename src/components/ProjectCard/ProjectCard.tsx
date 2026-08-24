import Link from 'next/link';
import { Project } from '@/lib/projects';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project }: Props) {
  return (
    <Link href={`/portfolio/${project.id}`} className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundColor: project.coverColor }}
        aria-label={`${project.title} project image`}
      >
        <div className={styles.imageOverlay} />
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.placeholderYear}>{project.year}</span>
        </div>
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.excerpt}>{project.description}</p>
        <span className={styles.cta}>View Project →</span>
      </div>
    </Link>
  );
}
