import { Homepage } from 'payload-types'
import { FC } from 'react'
import { Container } from '../../_components/ui/container'
import { Card, CardDescription, CardTitle } from '../../_components/ui/card'
import { Button } from '../../_components/ui/button'
import Link from 'next/link'
import { CmsLink } from '../../_components/cms-link'

type Props = {
  data: Homepage['communityPrizes']
}

export const CommunityPrizes: FC<Props> = ({ data }) => {
  return (
    <Container>
      <section aria-labelledby="community-prizes" className="py-32">
        <div className="flex mb-20 text-center flex-col gap-6 max-w-[39.375rem] mx-auto">
          <p id="community-prizes" className="font-pirateOne text-5xl font-extrabold">
            {data.title}
          </p>
          <p className="opacity-65">{data.description}</p>

          <p>{data.contact?.title}</p>
          <div className="flex gap-6">
            <Button asChild>
              <CmsLink data={data.contact?.mail?.link ?? ''}>{data.contact?.mail?.label}</CmsLink>
            </Button>
            <Button asChild>
              <CmsLink data={data.contact?.discord?.link ?? ''}>{data.contact?.discord?.label ?? ''}</CmsLink>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.items?.map((item) => {
            if (typeof item === 'string') throw Error('incorrect prizes items relation')

            return (
              <Card className="flex flex-col gap-3" key={item.id}>
                <p className="uppercase text-center opacity-65">{item.heading}</p>
                <CardTitle>{item.title}</CardTitle>
                <h4 className="text-2xl font-bold">{item.subtitle}</h4>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Button className="mt-6">
            <Link href="/community-prizes">Pokaż wszystkie</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
