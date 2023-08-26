'use client'

import { BiLinkExternal } from 'react-icons/bi'
import { useMediaQuery } from '@uidotdev/usehooks'
import Flickity, { FlickityOptions } from 'react-flickity-component'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'

import { ARTICLES_MOCK } from './mock'

import './styles.scss'

const Articles = () => {
  const smallBp = useMediaQuery('(max-width : 469px)')
  const mediumBp = useMediaQuery('(max-width : 769px)')
  const bigBp = useMediaQuery('(max-width : 869px)')

  const flickityOptions: FlickityOptions = {
    initialIndex: 1,
    prevNextButtons: false,
  }

  return (
    <div className="container articles">
      <PageHeader
        subtitle="blog"
        title="Conheça nosso blog"
        backgroundText="Ambipar"
        backgroundTextStyle={{
          fontSize: smallBp
            ? '5rem'
            : mediumBp
            ? '8rem'
            : bigBp
            ? '10rem'
            : '16rem',
        }}
        position="center"
      />

      <div className="articles__gallery">
        {!smallBp ? (
          ARTICLES_MOCK.map((article) => (
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
                    <BiLinkExternal size={16} color={'#FFFFFF'} />
                  )}
                  style={{
                    padding: 0,
                    width: 'fit-content',
                    color: '#FFFFFF',
                  }}
                />
              </div>

              <div className="shadow" />
            </div>
          ))
        ) : (
          <Flickity className="carousel" options={flickityOptions}>
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
                      <BiLinkExternal size={16} color={'#FFFFFF'} />
                    )}
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
          </Flickity>
        )}
      </div>
    </div>
  )
}

export { Articles }
