'use client';

import { useTheme } from '@/contexts/ThemeContext';

import { ThemeSwitcher } from '../ThemeSwitcher';

import './styles.scss';

const OuterContent = () => {
  const { toggle } = useTheme();

  return (
    <div className="outer-container">
      <div className="left-content">
        <ThemeSwitcher />
      </div>

      <div className="right-content">
        <p className="right-content__social">
          <span>siga-nos</span>
          <span>•</span>
          <a href="http://" target="_blank">
            ig /
          </a>
          <a href="http://" target="_blank">
            tw /
          </a>
          <a href="http://" target="_blank">
            yt /
          </a>
        </p>
      </div>
    </div>
  );
};

export { OuterContent };
