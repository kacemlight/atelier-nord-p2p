import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Atelier Nord — Interior Design Studio, Paris',
    template: '%s | Atelier Nord'
  },
  description:
    'Paris-based interior design studio specialising in residential projects and boutique hotels. Warm minimalism, natural materials, nine years of practice.',
  keywords: ['interior design', 'Paris', 'residential', 'boutique hotel', 'minimalism'],
  authors: [{ name: 'Atelier Nord' }],
  creator: 'Atelier Nord',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Atelier Nord',
    title: 'Atelier Nord — Interior Design Studio, Paris',
    description:
      'Paris-based interior design studio specialising in residential projects and boutique hotels.'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
