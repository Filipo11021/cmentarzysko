import { Homepage } from 'payload-types'
import { FC } from 'react'

type Props = {
  data: Homepage['aboutLeague']
}

export const AboutLeague: FC<Props> = () => {
  return (
    <section>
      <h2>AboutLeague</h2>
    </section>
  )
}
