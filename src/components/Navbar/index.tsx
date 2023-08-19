'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTheme } from '@/contexts/ThemeContext';
import Logo from '@/components/Logo';

import './styles.scss';

export default function Navbar() {
  const { palette, theme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="outer-container">
        <div className="navbar">
          <div className="logo">
            <Logo color={theme === 'light' ? palette.primary : palette.secondary} />
          </div>

          <div className="routes">
            <Link
              className={`routes__route ${pathname === '/' && 'active'}`}
              href="/"
            >
              Início
            </Link>

            <Link
              className={`routes__route ${pathname === '/corporate' && 'active'}`}
              href="/corporate"
            >
              Corporativo
            </Link>

            <Link
              className={`routes__route ${pathname === '/blog' && 'active'}`}
              href="/blog"
            >
              Blog
            </Link>
          </div>

          <div className="login">Login corporativo</div>
        </div>
      </div>
    </nav>
  );
}
