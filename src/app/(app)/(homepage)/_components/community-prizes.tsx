import { Homepage } from 'payload-types'
import { FC } from 'react'

type Props = {
  data: Homepage['communityPrizes']
}

export const CommunityPrizes: FC<Props> = () => {
  return (
    <section>
      <h2>CommunityPrizes</h2>
    </section>
  )
}
