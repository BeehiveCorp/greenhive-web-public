'use client';

import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const kyivTypeSans = localFont({ src: '../assets/fonts/KyivType-Sans-Medium-.otf' });

import { Providers } from './providers';

import { Navbar } from '@/components';

import '@/theme/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="theme--dark" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
