import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenhive - Home',
};

import { HomeOuterContent } from '@/components';

import './styles.scss';

export default function Home() {
  return (
    <section className="home">
      <HomeOuterContent />

      {/* <div className="container">
        <h1 className="title">Titulo</h1>
        <p className="text">Parágrafo</p>

        <div className="detail"></div>
      </div> */}
    </section>
  );
}
