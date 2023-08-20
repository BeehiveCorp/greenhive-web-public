'use client';

import { useTheme } from '@/contexts/ThemeContext';

import './styles.scss';

const OuterContent = () => {
  const { toggle } = useTheme();

  return (
    <div className="outer-container">
      <p onClick={toggle}>toggle</p>
    </div>
  );
};

export { OuterContent };
