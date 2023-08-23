import { PageHeader } from '../PageHeader'
import { Grid } from '../Grid'

import './styles.scss'

const Application = () => {
  return (
    <section className="container application">
      <PageHeader
        subtitle="a aplicação"
        title="Greenhive: um app gamificado pela Ambipar"
        backgroundText="app"
      />

      <Grid />
    </section>
  )
}

export { Application }
