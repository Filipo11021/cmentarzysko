import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { AppHeader } from './_components/app-header'
import { AppFooter } from './_components/app-footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const [headerData, footerData] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
  ])

  return (
    <html className={inter.className}>
      <body className="bg-[#1D1D2D] text-white">
        <AppHeader data={headerData} />

        <main>{children}</main>

        <AppFooter data={footerData} />
      </body>
    </html>
  )
}

export default Layout
