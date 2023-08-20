'use client';

import { BiLogoAndroid, BiLogoApple } from 'react-icons/bi';

import { Button } from '../Button';

import './styles.scss';

const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero__content">
        <h1 className="title">Aprenda e ganhe com o meio ambiente</h1>

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

      <div className="hero__gif">
        <img src="/hero-background.gif" alt="Gif da floresta" />
      </div>
    </section>
  );
};

export { Hero };
