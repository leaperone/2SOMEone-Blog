import './global.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2SOMEone Blog',
  keywords: ['blog', 'nextjs', 'react', 'typescript', 'multilingual'],
  authors: [{ name: '2SOMEone' }],
  creator: '2SOMEone',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.2someone.com',
    title: '2SOMEone Blog',
    siteName: '2SOMEone Blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
} 