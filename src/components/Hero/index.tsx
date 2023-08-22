'use client';

import { BiLogoAndroid, BiLogoApple } from 'react-icons/bi';

import { kyivTypeSans } from '@/app/fonts';
import { useTheme } from '@/contexts/ThemeContext';

import { Button } from '../Button';

import './styles.scss';
import { useMouse } from '@uidotdev/usehooks';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const mouse = useMouse()[0];

  const cursorRoundRef = useRef<HTMLDivElement>(null);
  const cursorPointerRef = useRef<HTMLDivElement>(null);

  const targetClasses = ['theme-switcher', 'button', 'buttons'];

  const verifyOveredElement = () => {
    if (!cursorPointerRef?.current?.style || !cursorRoundRef?.current?.style) return;

    const isOverSomeElement = targetClasses.some((className) => {
      const elements = document.querySelectorAll(`.${className}`);
      return Array.from(elements).some((element) => element.matches(':hover'));
    });

    if (isOverSomeElement) {
      console.log('Mouse is over the element now.');
      cursorPointerRef.current.style.opacity = '0';
      cursorRoundRef.current.style.opacity = '0';
    } else {
      cursorPointerRef.current.style.opacity = '1';
      cursorRoundRef.current.style.opacity = '1';
    }
  };

  useEffect(() => {
    if (cursorPointerRef?.current?.style) {
      verifyOveredElement();

      cursorPointerRef.current.style.left = `${mouse.x}px`;
      cursorPointerRef.current.style.top = `${mouse.y - 82}px`;

      setTimeout(() => {
        if (cursorRoundRef?.current?.style) {
          cursorRoundRef.current.style.left = `${mouse.x}px`;
          cursorRoundRef.current.style.top = `${mouse.y - 82}px`;
        }
      }, 100);
    }
  }, [mouse]);

  return (
    <section className="container hero">
      <div className="hero__content">
        <h1 className="title" style={kyivTypeSans.style}>
          APRENDA E GANHE COM O MEIO AMBIENTE
        </h1>

        <p className="text">
          Baixe agora! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          auctor justo in.
        </p>

        <div className="buttons">
          <Button
            text="ANDROID"
            variant="outline"
            LeftIcon={() => <BiLogoAndroid size={24} />}
          />

          <Button
            text="IOS"
            variant="outline"
            LeftIcon={() => <BiLogoApple size={24} />}
          />
        </div>
      </div>

      <>
        <div className="hero__gif"></div>
        <div className="hero__horizontal-gradient"></div>
        {theme === 'dark' && <div className="hero__vertical-gradient"></div>}
        <div className="hero__blur"></div>
      </>

      <div ref={cursorRoundRef} className="hero__cursor-round"></div>
      <div ref={cursorPointerRef} className="hero__cursor-pointer"></div>
    </section>
  );
};

export { Hero };
