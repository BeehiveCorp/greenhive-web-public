'use client'

import { Providers } from './providers'
import { montserrat } from './fonts'

import { Navbar } from '@/components'

import '@/theme/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme--dark" suppressHydrationWarning>
      <link rel="icon" type="image/svg+xml" href="/greenhive.svg" />

      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
