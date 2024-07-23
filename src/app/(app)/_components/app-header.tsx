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
      <header className="flex justify-between items-center gap-4 pt-8 pb-3">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={265} height={108.5} />
        </Link>
        <div className="flex items-center gap-4 xl:gap-16">
          {/* desktop menu */}
          <nav className="xl:flex items-center gap-8 hidden">
            {data.navigation.map(({ label, link }, i) => (
              <CmsLink
                key={i}
                className="text-sm font-bold hover:opacity-65 transition-opacity"
                data={link}
              >
                {label}
              </CmsLink>
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
