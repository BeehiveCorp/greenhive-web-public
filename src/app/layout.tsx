import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const kyivTypeSans = localFont({ src: '../assets/fonts/KyivType-Sans-Medium-.otf' });

import '@/theme/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
