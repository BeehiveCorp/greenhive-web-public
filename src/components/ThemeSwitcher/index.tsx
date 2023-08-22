'use client';

import { BiSun, BiSolidSun, BiMoon, BiSolidMoon } from 'react-icons/bi';

import { useTheme } from '@/contexts/ThemeContext';

import { ThemeSwitcherProps } from './types';

import './styles.scss';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { theme, toggle, palette } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <div
      className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggle}
      role="button"
    >
      <div className={`theme-switcher__circle ${isDarkMode ? 'dark' : 'light'}`} />

      {isDarkMode ? (
        <BiSun color={palette.title} />
      ) : (
        <BiSolidSun color={palette.background} />
      )}

      {!isDarkMode ? (
        <BiMoon color={palette.title} />
      ) : (
        <BiSolidMoon color={palette.background} />
      )}
    </div>
  );
};

export { ThemeSwitcher };
