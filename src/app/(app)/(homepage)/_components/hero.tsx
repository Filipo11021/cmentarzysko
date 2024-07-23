import { Homepage } from 'payload-types'
import { FC, useId } from 'react'
import { Button } from '../../_components/ui/button'
import Image from 'next/image'
import { Card } from '../../_components/ui/card'
import { Countdown } from './countdown'
import { CmsLink } from '../../_components/cms-link'
import { Container } from '../../_components/ui/container'

type Props = {
  data: Homepage['hero']
}

export const Hero: FC<Props> = ({ data }) => {
  return (
    <section aria-labelledby="hero" className="relative py-32">
      <div className="flex justify-center overflow-hidden">
        <video
          style={{ transform: 'scale(-1, 1)' }}
          className="hidden xl:block"
          autoPlay
          controls={false}
          loop
          src="/ship.webm"
        />

        <div>
          <div className="flex flex-col pb-20 gap-12 w-full lg:w-[50rem] max-w-[50rem] mx-auto">
            <div className="text-center">
              <h1 id="hero" className="mb-6 text-5xl md:text-7xl font-pirateOne text-balance">
                {data.title}
              </h1>
              <p className="leading-6">{data.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-6 text-center">{data.timerTitle}</h2>
              <Countdown />
            </div>
            {data.buttons?.length ? (
              <div className="flex flex-col md:flex-row gap-6 lg:gap-12 justify-center">
                {data.buttons.map(({ label, link }, i) => (
                  <Button key={i} asChild className="flex-1 md:flex-initial">
                    <CmsLink data={link}>{label}</CmsLink>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <video className="hidden xl:block" autoPlay controls={false} loop src="/ship.webm" />
      </div>

      <div className="flex gap-6 flex-col items-center">
        <h2 className="opacity-70">GŁÓWNY PARTNER</h2>
        <Image alt="" width={272} height={50} src="/endorfy.png" />
      </div>
    </section>
  )
}
