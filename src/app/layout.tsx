'use client';

import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const kyivTypeSans = localFont({ src: '../assets/fonts/KyivType-Sans-Medium-.otf' });

import { Providers } from './providers';

import '@/theme/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Navbar />
        <div className="theme--dark">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
