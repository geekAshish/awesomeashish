import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeScript from '@/components/ThemeScript'

export const metadata = {
  title: 'Ashish Kushwaha - Video Editor',
  description: 'Cinematic video editor portfolio featuring ads, reels, and long-form storytelling edits.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-purple-400/30 selection:text-white">
        <ThemeScript />
        <ThemeProvider defaultTheme="system">
          <div className="w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
