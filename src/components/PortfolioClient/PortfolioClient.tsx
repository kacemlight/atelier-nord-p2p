'use client';

import { useState } from 'react';
import { Project, ProjectCategory } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from './PortfolioClient.module.css';

interface Props {
  projects: Project[];
  categories: ProjectCategory[];
}

export function PortfolioClient({ projects, categories }: Props) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div data-testid="portfolio-client">
      <div
        className={styles.filters}
        role="tablist"
        aria-label="Filter projects by category"
        data-testid="portfolio-filter-bar"
      >
        {(['All', ...categories] as const).map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`${styles.filter} ${active === cat ? styles.active : ''}`}
            onClick={() => setActive(cat as ProjectCategory | 'All')}
            data-testid={`portfolio-filter-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.grid} data-testid="portfolio-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} priority={i < 2} />
        ))}
      </div>
    </div>
  );
}
