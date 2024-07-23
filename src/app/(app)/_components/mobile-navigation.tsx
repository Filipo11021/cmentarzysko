'use client'

import { Header } from 'payload-types'
import { FC } from 'react'
import { MenuIcon } from 'lucide-react'
import { SheetContent, SheetTrigger, Sheet, SheetClose } from './ui/sheet'
import { Button } from './ui/button'
import { CmsLink } from './cms-link'

type Props = {
  data: Header['navigation']
}

export const MobileNavigation: FC<Props> = ({ data }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="shrink-0 xl:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          {data.map(({ label, link }, i) => (
            <SheetClose key={i} asChild>
              <Button asChild variant="outline" className="p-0">
                <CmsLink className="text-sm font-bold" data={link}>
                  {label}
                </CmsLink>
              </Button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
