'use client'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus libero vitae eros maximus sagittis. Duis vel nulla massa.
            Integer sollicitudin quam eget urna volutpat hendrerit.
          </p>

          <div className="companies__content__items">
            <div className="companies__content__items__item">
              <BiBarChart size={32} color={palette.title} />
              <div className="title">Score</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>

            <div className="companies__content__items__item">
              <BiBadgeCheck size={32} color={palette.title} />
              <div className="title">Selo verde</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
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
      </div>

      <img src="/mockup-2.png" alt="Pessoa exibindo o aplicativo Greenhive" />
    </section>
  )
}

export { Companies }
