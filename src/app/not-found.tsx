import Link from 'next/link';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{
        paddingTop: 'var(--nav-height)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '5rem',
            color: 'var(--color-border)',
            lineHeight: 1,
            marginBottom: 'var(--space-6)'
          }}>404</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 400,
            marginBottom: 'var(--space-4)'
          }}>Page not found</h1>
          <p style={{
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-8)'
          }}>The page you are looking for does not exist.</p>
          <Link href="/" style={{
            color: 'var(--color-accent)',
            fontSize: '0.8125rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>Return home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
