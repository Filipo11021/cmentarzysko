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
          className="flex py-32 flex-wrap justify-between gap-[16rem] "
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
              src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
            ></video>
          </div>
        </section>
      </Container>
    </div>
  )
}
