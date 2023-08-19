import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenhive - Home',
};

import './styles.scss';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Titulo</h1>
      <h1 className="text">Parágrafo</h1>

      <div className="detail"></div>
    </div>
  );
}
