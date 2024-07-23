import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { Button } from '../../_components/ui/button'
import { CmsLink } from '../../_components/cms-link'
import { Card, CardDescription, CardTitle } from '../../_components/ui/card'
import { Container } from '../../_components/ui/container'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadHMR({ config: configPromise })
  const { meta } = await payload.findGlobal({ slug: 'homepage' })
  const img = typeof meta?.image === 'string' ? undefined : meta?.image

  return {
    title: meta?.title,
    description: meta?.description,
    openGraph: {
      title: meta?.title ?? undefined,
      description: meta?.description ?? undefined,
      ...(img && {
        images: {
          url: img.url ?? '',
          alt: img.alt ?? '',
          width: img.width ?? undefined,
          height: img.height ?? undefined,
        },
      }),
    },
  }
}

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const [data, items] = await Promise.all([
    payload.findGlobal({ slug: 'homepage' }),
    payload.find({ collection: 'community-prizes' }),
  ])

  return (
    <>
      <Container>
        <section className="flex py-32 text-center flex-col gap-6 max-w-[39.375rem] mx-auto">
          <p className="font-pirateOne text-7xl font-extrabold">{data.communityPrizes.title}</p>
          <p className="opacity-65">{data.communityPrizes.description}</p>

          <p>{data.communityPrizes.contact?.title}</p>
          <div className="flex gap-6 justify-center">
            <Button asChild>
              <CmsLink data={data.communityPrizes.contact?.mail?.link ?? ''}>
                {data.communityPrizes.contact?.mail?.label}
              </CmsLink>
            </Button>
            <Button asChild>
              <CmsLink data={data.communityPrizes.contact?.discord?.link ?? ''}>
                {data.communityPrizes.contact?.discord?.label ?? ''}
              </CmsLink>
            </Button>
          </div>
        </section>
        <section className="grid pb-32 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.docs?.map((item) => {
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
        </section>
      </Container>
    </>
  )
}

export default Page
