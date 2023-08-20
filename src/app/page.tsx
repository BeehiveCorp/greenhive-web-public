import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenhive - Home',
};

import { OuterContent, Hero } from '@/components';

import './styles.scss';

export default function Home() {
  return (
    <section className="home">
      <OuterContent />
      <Hero />
    </section>
  );
}
