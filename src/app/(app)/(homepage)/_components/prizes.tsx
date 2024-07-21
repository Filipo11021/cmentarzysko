import { Homepage } from 'payload-types'
import { FC } from 'react'

type Props = {
  data: Homepage['prizes']
}

export const Prizes: FC<Props> = () => {
  return (
    <section>
      <h2>Prizes</h2>
    </section>
  )
}
