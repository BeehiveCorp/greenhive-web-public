'use client'

import { BiLinkExternal } from 'react-icons/bi'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'

import { ARTICLES_MOCK } from './mock'

import './styles.scss'

const Articles = () => {
  return (
    <div className="container articles">
      <PageHeader
        subtitle="blog"
        title="Conheça nosso blog"
        backgroundText="Ambipar"
        backgroundTextStyle={{
          fontSize: '10rem',
        }}
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
                RightIcon={() => <BiLinkExternal size={16} color={'#FFFFFF'} />}
                style={{
                  padding: 0,
                  width: 'fit-content',
                  color: '#FFFFFF',
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
