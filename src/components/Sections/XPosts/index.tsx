'use client'

import Image from 'next/image'
import Flickity, { FlickityOptions } from 'react-flickity-component'

import { PageHeader } from '@/components/PageHeader'

import { LAST_TWEETS } from './mock'

import './styles.scss'

const XPosts = () => {
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
        position="center"
      />

      <Flickity
        className="carousel"
        elementType={'div'}
        options={flickityOptions}
      >
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

              <Image src="/x-logo.svg" alt="X Logo" width={24} height={24} />
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
