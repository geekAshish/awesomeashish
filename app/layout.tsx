import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeScript from '@/components/ThemeScript'
import { Inter, JetBrains_Mono, Dancing_Script } from 'next/font/google'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const signature = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-signature',
  display: 'swap',
})

export const metadata = {
  title: 'Ashish Kushwaha - Video Editor',
  description: 'Cinematic video editor portfolio featuring ads, reels, and long-form storytelling edits.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${signature.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-950 antialiased transition-colors duration-300 selection:bg-yellow-400/25 selection:text-yellow-950 dark:bg-neutral-950 dark:text-neutral-100 dark:selection:text-yellow-100">
        <ThemeScript />
        <ThemeProvider defaultTheme="system">
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8">
            <div className="relative border-x border-neutral-200/80 bg-white transition-colors duration-300 dark:border-neutral-800/60 dark:bg-neutral-950/40 dark:backdrop-blur dark:supports-backdrop-filter:bg-neutral-950/80">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_10px)] opacity-15 dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)] dark:opacity-35" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_10px)] opacity-15 dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)] dark:opacity-35" />
              <div className="relative px-5 sm:px-8 lg:px-12">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
