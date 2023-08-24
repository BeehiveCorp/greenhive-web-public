'use client'

import { BiBrain, BiLeaf, BiGift, BiLinkExternal } from 'react-icons/bi'

import { useTheme } from '@/contexts/ThemeContext'
import { kyivTypeSans } from '@/app/fonts'

import { Grid } from '@/components/Grid'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'

import './styles.scss'

const Application = () => {
  const { palette } = useTheme()

  return (
    <section className="container application">
      <div className="application__presentation">
        <div className="application__page-header">
          <PageHeader
            subtitle="a aplicação"
            title="Greenhive: um app gamificado pela Ambipar"
            backgroundText="app"
          />
        </div>

        <p className="application__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          libero vitae eros maximus sagittis. Duis vel nulla massa. Integer
          sollicitudin quam eget urna volutpat hendrerit.
        </p>

        <div className="application__cards">
          <div className="application__cards__card">
            <BiBrain size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              aprendizado
            </h5>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              vero?
            </p>
          </div>

          <div className="application__cards__card">
            <BiLeaf size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              conscientização
            </h5>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              vero?
            </p>
          </div>

          <div className="application__cards__card">
            <BiGift size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              incentivo
            </h5>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              vero?
            </p>
          </div>
        </div>

        <Grid />
      </div>

      <div className="application__objective">
        <img
          className="application__objective__mockup"
          src="/mockup-1.png"
          alt="Pessoa visualizando o aplicativo Greenhive"
        />

        <div className="application__objective__content">
          <PageHeader subtitle="o que almejamos" title="Nosso objetivo" />

          <div className="application__objective__content__descriptions">
            <p className="application__objective__content__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus libero vitae ero.
            </p>

            <p className="application__objective__content__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus libero. Integer sollicitudin quam eget urna volutpat
              hendrerit. Lorem ipsum dolor sit amet.
            </p>

            <div className="application__objective__content__shadow" />
          </div>

          <Button
            text="LER MAIS"
            variant="ghost"
            style={{ width: 'fit-content', padding: 0, marginTop: 40 }}
            RightIcon={() => <BiLinkExternal size={24} />}
          />
        </div>
      </div>
    </section>
  )
}

export { Application }
