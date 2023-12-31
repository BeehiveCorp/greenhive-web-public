import { Metadata } from 'next'

import { OuterContent, Sections } from '@/components'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Início • Greenhive',
}

export default function Home() {
  return (
    <section className="home">
      <OuterContent />

      <Sections.Hero />
      <Sections.Application />
      <Sections.Companies />
      <Sections.Articles />
      <Sections.Faq />
      <Sections.CallToAction />
      <Sections.XPosts />
      <Sections.Footer />
    </section>
  )
}
