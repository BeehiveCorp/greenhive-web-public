import { PageHeader } from '../PageHeader'
import { Grid } from '../Grid'

import './styles.scss'

const Application = () => {
  return (
    <section className="container application">
      <div className="application__page-header">
        <PageHeader
          subtitle="a aplicação"
          title="Greenhive: um app gamificado pela Ambipar"
          backgroundText="app"
        />
      </div>

      <p className="application__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
        libero vitae eros maximus sagittis. Duis vel nulla massa. Integer
        sollicitudin quam eget urna volutpat hendrerit.
      </p>

      <Grid />
    </section>
  )
}

export { Application }
