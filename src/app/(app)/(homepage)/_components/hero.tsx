import { Homepage } from 'payload-types'
import { FC, useId } from 'react'
import { Button } from '../../_components/ui/button'
import Image from 'next/image'
import { Card } from '../../_components/ui/card'
import { Countdown } from './countdown'

type Props = {
  data: Homepage['hero']
}

export const Hero: FC<Props> = ({ data }) => {
  return (
    <section aria-labelledby="hero" className="relative max-w-[50rem] mx-auto py-32">
      <div className="absolute right-0"></div>
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h1 id="hero" className="mb-6 text-7xl font-pirateOne text-balance">
            {data.title}
          </h1>
          <p className="leading-6">{data.description}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-center">{data.timerTitle}</h2>
          <Countdown />
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <Button asChild className="flex-1 md:flex-initial" variant="secondary">
            <a href="#">Dołącz do ligi</a>
          </Button>
          <Button asChild className="flex-1 md:flex-initial">
            <a href="#">Śledź ligę na Poe Racing</a>
          </Button>
        </div>
      </div>
      <div className="flex gap-6 mt-20 flex-col items-center">
        <h2 className="opacity-70">GŁÓWNY PARTNER</h2>
        <Image alt="" width={272} height={50} src="/endorfy.png" />
      </div>
      <div className="absolute left-0"></div>
    </section>
  )
}
