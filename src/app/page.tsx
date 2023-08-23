import { Metadata } from 'next'

import { OuterContent, Hero, Application } from '@/components'

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
    </section>
  )
}
