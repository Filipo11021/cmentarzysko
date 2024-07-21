import { Homepage } from 'payload-types'
import { FC } from 'react'
import { Button } from '../../_components/ui/button'

type Props = {
  data: Homepage['hero']
}

export const Hero: FC<Props> = () => {
  return (
    <section className="relative">
      <div className="absolute right-0"></div>
      <div>
        <div>
          <h1>title</h1>
          <p>description</p>
        </div>
        <div>
          <h2>timer title</h2>
          <div>timer</div>
        </div>
        <div>
          <Button variant='secondary'>test</Button>
          <Button>test</Button>
        </div>
        <div>
          <h2>partner</h2>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div className="absolute left-0"></div>
    </section>
  )
}
