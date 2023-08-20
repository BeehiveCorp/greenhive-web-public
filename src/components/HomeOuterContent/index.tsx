'use client';

import { useTheme } from '@/contexts/ThemeContext';

import './styles.scss';

const HomeOuterContent = () => {
  const { toggle } = useTheme();

  return (
    <div className="outer-container">
      <p onClick={toggle}>toggle theme</p>
    </div>
  );
};

export { HomeOuterContent };
