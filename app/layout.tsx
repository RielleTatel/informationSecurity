import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display, Caveat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Backburner: Where Heartbreak Meets Security',
  description: 'A philosophical exploration connecting NIKI\'s lyrics to information security principles.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${inter.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
