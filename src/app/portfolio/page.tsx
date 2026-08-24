import { Metadata } from 'next';
import { PortfolioClient } from '@/components/PortfolioClient/PortfolioClient';
import { projects, categories } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse Atelier Nord projects across residential, hospitality, and commercial categories.',
};

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Work</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            marginTop: 'var(--space-4)',
            marginBottom: 'var(--space-16)',
          }}>
            Every project, a distinct brief.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>One constant standard.</em>
          </h1>
          <PortfolioClient projects={projects} categories={categories} />
        </div>
      </section>
    </div>
  );
}
