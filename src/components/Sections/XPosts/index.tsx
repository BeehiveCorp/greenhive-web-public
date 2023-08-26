'use client'

import Image from 'next/image'
import Flickity, { FlickityOptions } from 'react-flickity-component'

import { useTheme } from '@/contexts/ThemeContext'

import { PageHeader } from '@/components/PageHeader'
import { XIcon } from '@/components/XIcon'
import { useBetterMediaQuery } from '@/hooks'

import { LAST_TWEETS } from './mock'

import './styles.scss'

const XPosts = () => {
  const smallBp = useBetterMediaQuery('(max-width : 469px)')
  const mediumBp = useBetterMediaQuery('(max-width : 769px)')
  const bigBp = useBetterMediaQuery('(max-width : 869px)')

  const { palette } = useTheme()

  const flickityOptions: FlickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
  }

  return (
    <div className="container x-posts">
      <PageHeader
        subtitle="#greenhive"
        title="Últimos tweets"
        backgroundText="social"
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

      <Flickity className="carousel" options={flickityOptions}>
        {LAST_TWEETS.map((tweet) => (
          <div className="x-posts__post" key={tweet.author.username}>
            <div className="x-posts__post__header">
              <div className="author-data">
                <Image
                  src={tweet.author.avatar_url}
                  alt="An tweet post author avatar"
                  width={48}
                  height={48}
                />

                <div>
                  <p className="author-data__name">{tweet.author.name}</p>

                  <p className="author-data__username">
                    {tweet.author.username}
                  </p>
                </div>
              </div>

              <XIcon size={32} color={palette.title} />
            </div>

            <div className="x-posts__post__content">
              <p>{tweet.content.text}</p>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export { XPosts }
