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
        className={styles.cover}
        style={{ backgroundColor: project.coverColor }}
        aria-hidden="true"
      />
      <div className={styles.info}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.meta}>
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
