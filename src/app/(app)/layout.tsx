import React from 'react'
import './globals.scss'
import { Inter, Pirata_One } from 'next/font/google'
import { AppHeader } from './_components/app-header'
import { AppFooter } from './_components/app-footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const pirateOne = Pirata_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-pirate-one',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const [headerData, footerData, { googleAnalyticsId }] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'config' }),
  ])

  return (
    <html className={`${inter.className} ${pirateOne.variable}`}>
      <body className="bg-[#1D1D2D] text-white">
        <AppHeader data={headerData} />

        <main>{children}</main>

        <AppFooter data={footerData} />
      </body>

      {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
    </html>
  )
}

export default Layout
