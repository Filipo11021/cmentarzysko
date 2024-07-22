import Link from 'next/link'
import { Header } from 'payload-types'
import { FC } from 'react'
import { Container } from './ui/container'
import Image from 'next/image'
import { Button } from './ui/button'
import { CmsLink } from './cms-link'
import { MobileNavigation } from './mobile-navigation'

type Props = { data: Header }

export const AppHeader: FC<Props> = ({ data }) => {
  return (
    <Container asChild>
      <header className="flex justify-between items-center gap-2 pt-8 pb-3">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={265} height={108.5} />
        </Link>
        <div className="flex items-center gap-4 md:gap-16">
          {/* desktop menu */}
          <nav className="md:flex items-center gap-8 hidden">
            {data.navigation.map(({ label, link }, i) => (
              <Button asChild variant="link" className="p-0" key={i}>
                <CmsLink className="text-sm font-bold" data={link}>
                  {label}
                </CmsLink>
              </Button>
            ))}
          </nav>

          <Button>
            <CmsLink data={data.callToAction.link}>{data.callToAction.label}</CmsLink>
          </Button>

          <MobileNavigation data={data.navigation} />
        </div>
      </header>
    </Container>
  )
}
