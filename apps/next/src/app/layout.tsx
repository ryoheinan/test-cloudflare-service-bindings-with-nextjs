import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJp = Noto_Sans_JP({
  weight: '500',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Test App',
  description: 'This app is used for testing Cloudflare service bindings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  )
}
