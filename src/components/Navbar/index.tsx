'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiLogIn, BiMenu, BiX } from 'react-icons/bi';
import { useWindowSize, useIsFirstRender } from '@uidotdev/usehooks';

import { useTheme } from '@/contexts/ThemeContext';

import { GreenhiveHorizontal, GreenhiveIcon } from '../Logo';
import { Button } from '../Button';

import './styles.scss';

const Navbar = () => {
  const { palette, theme } = useTheme();
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const isFirstRender = useIsFirstRender();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (windowSize?.width && windowSize.width > 869) {
      setIsExpanded(false);
    }
  }, [windowSize]);

  useEffect(() => {
    if (!isFirstRender) {
      handleExpandToggle();
    }
  }, [pathname]);

  return (
    <nav className="nav">
      <div className="outer-container">
        <div className="navbar">
          <div className={`navbar__logo ${isExpanded && '--expanded'}`}>
            <Link href="/">
              <GreenhiveHorizontal
                color={theme === 'light' ? palette.primary : palette.secondary}
              />
            </Link>
          </div>

          <div className={`navbar__routes ${isExpanded && '--expanded'}`}>
            <div className="navbar__routes__header">
              <div style={{ marginLeft: '-6px' }}>
                <Link href="/">
                  <GreenhiveIcon color={palette.title} size={40} />
                </Link>
              </div>

              <Button
                variant="outline"
                LeftIcon={() => (
                  <BiX
                    size={32}
                    color={theme === 'light' ? palette.primary : palette.secondary}
                  />
                )}
                style={{
                  width: '44px',
                  padding: 0,
                  marginRight: '-2px',
                  marginBottom: '4px',
                }}
                onClick={handleExpandToggle}
              />
            </div>

            <Link
              className={`navbar__routes__route ${pathname === '/' && '--active'}`}
              href="/"
            >
              Início
            </Link>

            <Link
              className={`navbar__routes__route ${
                pathname === '/corporate' && '--active'
              }`}
              href="/corporate"
            >
              Corporativo
            </Link>

            <Link
              className={`navbar__routes__route ${
                pathname === '/blog' && '--active'
              }`}
              href="/blog"
            >
              Blog
            </Link>

            <div className="navbar__routes__corporate-button">
              <Button
                variant="ghost"
                secondary
                text="LOGIN CORPORATIVO"
                onClick={() => alert('not implemented yet')}
                RightIcon={() => <BiLogIn size={24} />}
                style={{ padding: 0 }}
              />
            </div>

            <div className="navbar__routes__splash"></div>
          </div>

          <div className="navbar__corporate-button">
            <Button
              variant="ghost"
              secondary
              text="LOGIN CORPORATIVO"
              onClick={() => alert('not implemented yet')}
              RightIcon={() => <BiLogIn size={24} />}
              style={{ padding: 0 }}
            />
          </div>

          <div className="navbar__toggle-menu">
            <Button
              variant="outline"
              LeftIcon={() => (
                <BiMenu
                  size={24}
                  color={theme === 'light' ? palette.primary : palette.secondary}
                />
              )}
              style={{ width: '44px', padding: 0 }}
              onClick={handleExpandToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
