import { Metadata } from 'next'

import { OuterContent, Hero } from '@/components'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Greenhive - Home',
}

export default function Home() {
  return (
    <section className="home">
      <OuterContent />
      <Hero />

      <div style={{ height: '1000px' }}></div>
    </section>
  )
}
