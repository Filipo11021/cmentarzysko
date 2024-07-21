import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Hero } from './_components/hero'
import { AboutLeague } from './_components/about-league'
import { Questions } from './_components/questions'
import { Prizes } from './_components/prizes'
import { CommunityPrizes } from './_components/community-prizes'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'homepage' })

  return (
    <>
      <Hero data={data.hero} />
      <AboutLeague data={data.aboutLeague} />
      <Questions data={data.questions} />
      <Prizes data={data.prizes} />
      <CommunityPrizes data={data.communityPrizes} />
    </>
  )
}

export default Page
