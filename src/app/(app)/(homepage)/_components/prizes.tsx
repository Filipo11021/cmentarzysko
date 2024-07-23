import { Homepage } from 'payload-types'
import { FC } from 'react'
import { Container } from '../../_components/ui/container'
import { Card, CardDescription, CardTitle } from '../../_components/ui/card'
import Image from 'next/image'

type Props = {
  data: Homepage['prizes']
}

export const Prizes: FC<Props> = ({ data }) => {
  return (
    <div className="bg-[rgb(25,25,38)]">
      <Container>
        <section aria-labelledby="prizes" className="py-32">
          <div className="flex mb-20 text-center flex-col gap-6 max-w-[39.375rem] mx-auto">
            <h2 id="prizes" className="uppercase opacity-25">
              {data.heading}
            </h2>
            <p className="font-pirateOne text-5xl font-extrabold">{data.title}</p>
            <p className="opacity-65">{data.description}</p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.items?.map((item) => {
              if (typeof item === 'string') throw Error('incorrect prizes items relation')

              const itemImage = typeof item.image === 'string' ? undefined : item.image

              return (
                <Card className="flex flex-col gap-3" key={item.id}>
                  <p className="uppercase text-center opacity-65">{item.heading}</p>
                  <div className="relative h-44">
                    <Image
                      src={itemImage?.url ?? ''}
                      alt={itemImage?.alt ?? ''}
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              )
            })}
          </div>
        </section>
      </Container>
    </div>
  )
}
