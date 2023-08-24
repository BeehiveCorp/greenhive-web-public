import { Metadata } from 'next'

import {
  OuterContent,
  Hero,
  Application,
  Companies,
  Articles,
} from '@/components'

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
      <Articles />
    </section>
  )
}
