'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import CommandPalette from '@/components/CommandPalette'
import { SearchIcon } from '@/components/icons'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const

export default function Header() {
  const pathname = usePathname()
  const activePath = useMemo(() => pathname ?? '/', [pathname])

  return (
    <>
      <header className="sticky top-0 z-[60] -mx-5 border-b border-neutral-200/70 bg-white/90 px-5 py-4 transition-colors duration-300 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 dark:border-neutral-800/60 dark:bg-transparent dark:backdrop-blur dark:supports-[backdrop-filter]:bg-neutral-950/25">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 text-sm font-bold text-neutral-900 shadow-sm ring-1 ring-black/10 dark:from-amber-200 dark:via-orange-200 dark:to-rose-200">
              AK
            </div>
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-semibold tracking-tight">Ashish Kushwaha</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Video Editor</div>
            </div>
          </Link>

          <nav className="no-scrollbar flex max-w-[min(520px,60vw)] items-center gap-1 overflow-x-auto rounded-full border border-neutral-200/80 bg-white px-1 py-1 text-sm shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950/40">
            {navItems.map((item) => {
              const isActive = activePath === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'whitespace-nowrap rounded-full px-3 py-1.5 transition',
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-950'
                      : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/blog"
              className={[
                'whitespace-nowrap rounded-full px-3 py-1.5 transition',
                pathname?.startsWith('/blog')
                  ? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white',
              ].join(' ')}
            >
              Journal
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('commandpalette:open'))}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-200 dark:hover:bg-neutral-950/60"
          >
            <SearchIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            <span className="hidden sm:inline">Search</span>
            <span className="ml-1 hidden items-center gap-1 rounded-full bg-neutral-950/5 px-2 py-1 text-[11px] text-neutral-600 ring-1 ring-neutral-200/70 sm:flex dark:bg-black/30 dark:text-white/60 dark:ring-white/10">
              <span>Ctrl</span>
              <span>K</span>
            </span>
          </button>
        </div>
      </header>
      <CommandPalette />
    </>
  )
}
