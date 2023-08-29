/* eslint-disable @next/next/no-img-element */

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
          O Greenhive é mais do que um aplicativo, é uma experiência envolvente
          que transforma o aprendizado sobre o meio ambiente e a
          sustentabilidade em uma aventura cativante. Entre em um mundo onde
          você se torna o protagonista, enfrentando missões emocionantes para
          aprimorar seus conhecimentos e fazer escolhas conscientes.
        </p>

        <div className="application__cards">
          <div className="application__cards__card">
            <BiBrain size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              aprendizado
            </h5>

            <p className="description">
              Descubra fatos e insights sobre sustentabilidade de maneira
              envolvente e acessível. Cada missão é uma oportunidade de aprender
              e se tornar um defensor do nosso planeta.
            </p>
          </div>

          <div className="application__cards__card">
            <BiLeaf size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              conscientização
            </h5>

            <p className="description">
              Faça escolhas e veja as consequências – tanto positivas quanto
              desafiadoras. Cada decisão que você toma impacta sua jornada e o
              mundo ao seu redor.
            </p>
          </div>

          <div className="application__cards__card">
            <BiGift size={40} color={palette.primary} />

            <h5 className="title" style={kyivTypeSans.style}>
              incentivo
            </h5>

            <p className="description">
              Conecte-se com outros entusiastas da sustentabilidade. Compartilhe
              suas conquistas, colete selos e badges únicos a cada missão
              concluída e inspire sua rede a se juntar à causa.
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
              Em um mundo onde os desafios ambientais estão se tornando cada vez
              mais urgentes, é essencial capacitar as pessoas com o conhecimento
              e a motivação para adotar práticas sustentáveis. A Greenhive adota
              uma abordagem única e envolvente para isso, combinando o mundo dos
              RPGs com ações do mundo real que promovem escolhas ecologicamente
              conscientes.
            </p>

            <p className="application__objective__content__description"></p>

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
