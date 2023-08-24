'use client'

import { BiLinkExternal } from 'react-icons/bi'

import { useTheme } from '@/contexts/ThemeContext'

import { Button } from '../Button'
import { PageHeader } from '../PageHeader'

import { ARTICLES_MOCK } from './mock'

import './styles.scss'

const Articles = () => {
  const { palette } = useTheme()

  return (
    <div className="container articles">
      <PageHeader
        subtitle="blog"
        title="Conheça nosso blog"
        backgroundText="Ambipar"
        position="center"
      />

      <div className="articles__gallery">
        {ARTICLES_MOCK.map((article) => (
          <div
            className="articles__gallery__article"
            key={article.url}
            style={{ backgroundImage: `url(${article.url})` }}
          >
            <div className="content">
              <h4 className="title">{article.title}</h4>
              <Button
                text="LER MAIS"
                variant="ghost"
                RightIcon={() => (
                  <BiLinkExternal size={16} color={palette.title} />
                )}
                style={{
                  padding: 0,
                  width: 'fit-content',
                }}
              />
            </div>

            <div className="shadow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export { Articles }
