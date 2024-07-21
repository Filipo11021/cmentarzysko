import Link from 'next/link'
import { Link as LinkData } from 'payload-types'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'

type CmsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  data: LinkData | string
  children: ReactNode
}

export const CmsLink: FC<CmsLinkProps> = ({ data, children, ...props }) => {
  if (typeof data === 'string') throw Error('not correct link relation handling')

  if (data.type === 'external')
    return (
      <a rel="noreferrer" href={data.url} {...props}>
        {children}
      </a>
    )

  return (
    <Link href={data.url} {...props}>
      {children}
    </Link>
  )
}
