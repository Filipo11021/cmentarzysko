import { Homepage } from 'payload-types'
import { FC } from 'react'

type Props = {
  data: Homepage['questions']
}

export const Questions: FC<Props> = () => {
  return (
    <section>
      <h2>Questions</h2>
    </section>
  )
}
