import Link from 'next/link'
import { Footer } from 'payload-types'
import { FC } from 'react'

type Props = { data: Footer }

export const AppFooter: FC<Props> = () => {
  return (
    <footer>
      <div>
        <h2>title</h2>
        <p>description</p>
        <button>button</button>
      </div>
      <div>
        <div>
          <p>Contact</p>
          <a href="mailto:">mail</a>
        </div>
        <Link href="/">Logo</Link>
        <div>social media</div>
      </div>
    </footer>
  )
}
