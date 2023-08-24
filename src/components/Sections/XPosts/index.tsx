import { PageHeader } from '@/components/PageHeader'

import './styles.scss'

const XPosts = () => {
  return (
    <div className="container x-posts">
      <PageHeader
        subtitle="#greenhive"
        title="Últimos tweets"
        backgroundText="social"
        position="center"
      />
    </div>
  )
}

export { XPosts }
