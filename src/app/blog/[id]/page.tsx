interface ArticleProps {
  params: {
    id: string
  }
}

export function generateMetadata({params}: ArticleProps) {
  // const articles = await fetch('not-implemented/articles', {
  //   next: {
  //     revalidate: 30
  //   }
  // })

  return {
    title: 'Greenhive | Algum artigo'
  }
}


export default function Article({params}: ArticleProps) {
  // const articles = await fetch('not-implemented/articles', {
  //   next: {
  //     revalidate: 30
  //   }
  // })


  return (
    <h4>Article id: {params?.id}</h4>
  )
}