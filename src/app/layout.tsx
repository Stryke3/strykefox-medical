import './globals.css'
import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const metadata: Metadata = {
  metadataBase: new URL('https://strykefox.com'),
  title: {
    default: 'StrykeFox Medical | CARES Healthcare Lineage Platform',
    template: '%s | StrykeFox Medical',
  },
  description: 'StrykeFox Medical integrates Maternity CarePath, SPEAR, StrykeREG Global, NSI, and SoC13 into one compliance-first healthcare lineage platform.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://strykefox.com',
    siteName: 'StrykeFox Medical',
    title: 'StrykeFox Medical | CARES Healthcare Lineage Platform',
    description: 'Compliance-first healthcare infrastructure for recovery coordination, platform intelligence, device innovation, global regulatory execution, and deal-quality assessment.',
    images: [
      {
        url: '/images/sfm-logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'StrykeFox Medical',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StrykeFox Medical | CARES Healthcare Lineage Platform',
    description: 'Revenue over theory. Margin over scale. Compliance-first healthcare systems.',
    images: ['/images/sfm-logo.jpeg'],
  },
  icons: {
    icon: '/images/sfm-fox.jpeg',
    apple: '/images/sfm-logo.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
