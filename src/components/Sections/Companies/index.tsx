'use client'
import Image from 'next/image'

import { BiBadgeCheck, BiBarChart, BiLinkExternal } from 'react-icons/bi'

import { useTheme } from '@/contexts/ThemeContext'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'

import './styles.scss'

const Companies = () => {
  const { theme, palette } = useTheme()

  return (
    <section className="companies">
      <div className="companies__content container">
        <div>
          <PageHeader
            subtitle="para empresas"
            title="A Greenhive dentro da sua empresa"
            subtitleStyle={{
              color: theme === 'dark' ? palette.secondary : palette.primary,
            }}
          />

          <p className="companies__content__description">
            Ambiente colaborativo entre empregados de empresas parceiras, com
            essência de rede social, com possibilidade de: feed personalizado
            para a empresa em ambiente privado, compartilhamento de selos,
            pontuação, ranking e muito mais.
          </p>

          <div className="companies__content__items">
            <div className="companies__content__items__item">
              <BiBarChart size={32} color={palette.title} />
              <div className="title">Score</div>
              <div className="description">
                O Score GreenHive é uma pontuação dinâmica que reflete o esforço
                contínuo das empresas em direção a um futuro mais verde e
                equilibrado.
              </div>
            </div>

            <div className="companies__content__items__item">
              <BiBadgeCheck size={32} color={palette.title} />
              <div className="title">Selo verde</div>
              <div className="description">
                No GreenHive, a busca pela excelência sustentável é recompensada
                com um símbolo de distinção - o Selo Verde.
              </div>
            </div>
          </div>

          <Button
            text="QUERO SABER MAIS"
            RightIcon={() => <BiLinkExternal size={24} />}
            variant="solid"
            secondary={theme === 'dark'}
            primary={theme === 'light'}
            style={{ width: 'fit-content' }}
          />
        </div>

        <Image
          src="/mockup-moodboard-1.png"
          alt="Pessoa exibindo o aplicativo Greenhive"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  )
}

export { Companies }
