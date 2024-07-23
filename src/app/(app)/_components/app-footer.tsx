import Link from 'next/link'
import { Footer } from 'payload-types'
import { FC } from 'react'
import { Button } from './ui/button'
import { CmsLink } from './cms-link'
import Image from 'next/image'
import { Container } from './ui/container'
import { Separator } from './ui/separator'

type Props = { data: Footer }

export const AppFooter: FC<Props> = ({ data }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(29, 28, 44, 0) 0%, #1D1C2C 65.74%), url("/footer-background.webp") 50% / cover no-repeat, #1D1C2C',
      }}
    >
      <Container asChild>
        <footer className="py-32">
          <div className="flex pb-20 gap-6 flex-col items-center">
            <h2 className="balance text-[5rem] font-pirateOne">{data.title}</h2>
            <p className="opacity-80">{data.description}</p>
            {data.buttons?.length ? (
              <div className="flex flex-col md:flex-row gap-6 justify-center wrap lg:gap-12">
                {data.buttons.map(({ label, link }, i) => (
                  <Button key={i} asChild>
                    <CmsLink data={link}>{label}</CmsLink>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between justify-items-center gap-8">
            <div>
              <h2 className="text-lg mb-3">{data.contact.title}</h2>
              <a className="font-bold underline" href={`mailto:${data.contact.email}`}>
                {data.contact.email}
              </a>
            </div>
            <Link href="/">
              <Image className="m-auto" src="/logo.png" alt="logo" width={265} height={108.5} />
            </Link>
            <div className="flex gap-8 items-center">
              {data.socialMedia?.map(({ icon, link, name }, i) => {
                const iconImage = typeof icon === 'string' ? undefined : icon
                return (
                  <CmsLink key={i} data={link}>
                    <Image
                      src={iconImage?.url ?? ''}
                      alt={iconImage?.alt ?? ''}
                      height={32}
                      width={32}
                    />
                  </CmsLink>
                )
              })}
            </div>
          </div>
          <Separator className="my-12" />
          <div className="flex flex-col items-center gap-8">
            <p className="text-center">Wszystkie prawa zastrzeżone © {new Date().getFullYear()}</p>
            <div className="flex gap-8">
              <p className="opacity-65">
                <span className="opacity-65">Projekt:</span>{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover hover:no-underline transition-all"
                  href="https://www.twitch.tv/smaczny"
                >
                  Smaczny
                </a>
              </p>
              <p className="opacity-65">
                <span className="opacity-65">Ugotowanie:</span>{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline transition-all"
                  href="https://www.twitch.tv/filipo11"
                >
                  Filipo
                </a>
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  )
}
