'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Project, ProjectCategory } from '@/types';
import styles from './PortfolioClient.module.css';

const CATEGORIES: ('All' | ProjectCategory)[] = ['All', 'Residential', 'Hospitality', 'Commercial'];

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="container">
      {/* Filter bar */}
      <nav className={styles.filters} aria-label="Filter by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <div className={styles.placeholder}>
                <span className={styles.placeholderCategory}>{project.category}</span>
              </div>
            </div>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.location}>{project.location} &mdash; {project.year}</p>
              <p className={styles.short}>{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
