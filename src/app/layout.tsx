import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathalia Busnego Portafolio',
  description: 'Personal Project Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
