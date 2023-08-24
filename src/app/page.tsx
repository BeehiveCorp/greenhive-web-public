import { Metadata } from 'next'

import { OuterContent, Hero, Application, Companies } from '@/components'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Greenhive - Home',
}

export default function Home() {
  return (
    <section className="home">
      <OuterContent />
      <Hero />
      <Application />
      <Companies />
    </section>
  )
}
