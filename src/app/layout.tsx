import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav/Nav';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Atelier Nord — Interior Design Studio, Paris',
    template: '%s — Atelier Nord',
  },
  description:
    'Atelier Nord is a Paris-based interior design studio specialising in warm minimalism, natural materials, and enduring spaces. Residential, hospitality, and commercial projects across France.',
  keywords: [
    'interior design',
    'Paris',
    'residential',
    'hospitality',
    'boutique hotel',
    'warm minimalism',
    'French interior design',
  ],
  authors: [{ name: 'Atelier Nord' }],
  creator: 'Atelier Nord',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ateliernord.fr',
    siteName: 'Atelier Nord',
    title: 'Atelier Nord — Interior Design Studio, Paris',
    description:
      'Warm minimalism, natural materials, enduring spaces. Paris-based interior design studio with nine years of practice in residential and hospitality projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Nord — Interior Design Studio, Paris',
    description:
      'Warm minimalism, natural materials, enduring spaces. Paris-based interior design studio.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f2ed' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0e0c' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('atelier-nord-theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
