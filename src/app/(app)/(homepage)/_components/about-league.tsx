import { Homepage } from 'payload-types'
import { FC } from 'react'
import { Button } from '../../_components/ui/button'
import { CmsLink } from '../../_components/cms-link'
import { Container } from '../../_components/ui/container'

type Props = {
  data: Homepage['aboutLeague']
}

export const AboutLeague: FC<Props> = ({ data }) => {
  return (
    <div className="bg-[rgb(25,25,38)]">
      <Container asChild>
        <section
          className="flex py-32 flex-col lg:flex-row flex-wrap items-center lg:justify-between gap-16 lg:gap-64 "
          aria-labelledby="about-league"
        >
          <div className="flex-1 flex flex-col gap-8">
            <h2 id="about-league" className="opacity-25 uppercase">
              {data.heading}
            </h2>
            <h3 className="font-pirateOne text-5xl text-balance">{data.title}</h3>
            <p className="opacity-65">{data.description}</p>
            <div className="flex flex-wrap gap-6">
              {data.buttons?.map(({ label, link }, i) => (
                <Button key={i} asChild>
                  <CmsLink data={link}>{label}</CmsLink>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <video
              controls
              src={typeof data.video === 'string' ? '' : data.video?.url ?? ''}
            ></video>
          </div>
        </section>
      </Container>
    </div>
  )
}
