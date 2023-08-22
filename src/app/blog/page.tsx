import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Greenhive',
}

export default async function Blog() {
  // const articles = await fetch('not-implemented/articles', {
  //   next: {
  //     revalidate: 30
  //   }
  // })

  return <h1>Blog</h1>
}
