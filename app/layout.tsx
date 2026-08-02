import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Vallex — разработка цифровых продуктов',
  description: 'Проектируем и создаём быстрые, масштабируемые веб-сервисы — от идеи до запуска.',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
