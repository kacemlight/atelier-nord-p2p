import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PortfolioClient from '@/components/portfolio/PortfolioClient';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Portfolio',
  description: 'Selected interior design projects by Atelier Nord — residential, hospitality, and commercial.'
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">
          <div style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-8)' }}>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-4)'
            }}>Our work</p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              marginBottom: 'var(--space-6)'
            }}>Portfolio</h1>
            <p style={{
              color: 'var(--color-text-muted)',
              maxWidth: '540px',
              lineHeight: 1.75
            }}>
              Forty-plus projects across France and beyond. Each one begins with
              a listening phase — the architecture, the client, the light — and
              ends with an interior that belongs exactly where it is.
            </p>
          </div>
        </div>
        <PortfolioClient projects={projects} />
      </main>
      <Footer />
    </>
  );
}
