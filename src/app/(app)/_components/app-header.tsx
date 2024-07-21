import Link from 'next/link'
import { Header, Link as LinkT } from 'payload-types'
import { FC } from 'react'
import { Container } from './ui/container'
import Image from 'next/image'
import { Button } from './ui/button'
import { CmsLink } from './cms-link'

type Props = { data: Header }

export const AppHeader: FC<Props> = ({ data }) => {
  return (
    <Container asChild>
      <header className="flex justify-between items-center gap-2 pt-8 pb-3">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={265} height={108.5} />
        </Link>
        <div className="flex items-center gap-16">
          <nav className="flex items-center gap-8">
            <Link href="#">element</Link>
          </nav>

          <Button>
            <CmsLink data={data.callToAction.link}>{data.callToAction.label}</CmsLink>
          </Button>
        </div>
      </header>
    </Container>
  )
}
