'use client'

// import Flickity, {FlickityOptions} from 'react-flickity-component'

import { PageHeader } from '@/components/PageHeader'

import { LAST_TWEETS } from './mock'

import './styles.scss'
import Image from 'next/image'

const XPosts = () => {
  // const flickityOptions: FlickityOptions = {
  //   initialIndex: 2,
  // };

  return (
    <div className="container x-posts">
      <PageHeader
        subtitle="#greenhive"
        title="Últimos tweets"
        backgroundText="social"
        position="center"
      />

      {/* <Flickity
        className='carousel'
        elementType={'div'}
        options={flickityOptions}
      >
        {LAST_TWEETS.map((tweet) => (
          <div className='x-posts__post' key={tweet.author.username}>
            <div className="x-posts__post__header">
              <Image src={tweet.author.avatar_url} alt='An tweet post author avatar' width={48} height={48} />
            </div>

            <div className="x-posts__post__content"></div>
          </div>
        ))}
      </Flickity> */}
    </div>
  )
}

export { XPosts }
