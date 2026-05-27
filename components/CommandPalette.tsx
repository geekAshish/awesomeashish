'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MailIcon, SearchIcon } from '@/components/icons'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'

type PaletteItem =
  | {
      id: string
      group: string
      label: string
      href: string
      external?: boolean
      icon?: React.ReactNode
      keywords?: string
    }
  | {
      id: string
      group: string
      label: string
      action: () => void
      icon?: React.ReactNode
      keywords?: string
    }

function isHrefItem(item: PaletteItem): item is Extract<PaletteItem, { href: string }> {
  return 'href' in item
}

function normalizeText(value: string) {
  return value.trim().toLowerCase()
}

function scoreMatch(query: string, value: string) {
  const q = normalizeText(query)
  const v = normalizeText(value)
  if (!q) return 1
  if (v === q) return 5
  if (v.startsWith(q)) return 4
  if (v.includes(q)) return 2
  return 0
}

function MenuIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 text-[11px] font-semibold text-white/80">
      {children}
    </span>
  )
}

function SocialLabelIcon({ label }: { label: string }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white text-[11px] font-semibold text-neutral-900 ring-1 ring-black/10">
      {label.slice(0, 2).toUpperCase()}
    </span>
  )
}

export default function CommandPalette() {
  const router = useRouter()
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const openPalette = useCallback(() => {
    setQuery('')
    setActiveIndex(0)
    setOpen(true)
  }, [])

  const items = useMemo<PaletteItem[]>(() => {
    return [
      { id: 'portfolio', group: 'Menu', label: 'Portfolio', href: '/', icon: <MenuIcon>P</MenuIcon> },
      { id: 'journal', group: 'Menu', label: 'Journal', href: '/blog', icon: <MenuIcon>J</MenuIcon> },
      { id: 'about', group: 'Menu', label: 'About', href: '/about', icon: <MenuIcon>A</MenuIcon> },
      { id: 'work', group: 'Menu', label: 'Work', href: '/projects', icon: <MenuIcon>W</MenuIcon> },
      { id: 'contact', group: 'Menu', label: 'Contact', href: '/contact', icon: <MenuIcon>@</MenuIcon> },
      {
        id: 'email',
        group: 'Connect',
        label: `Email (${CONTACT_EMAIL})`,
        href: `mailto:${CONTACT_EMAIL}`,
        external: true,
        keywords: 'mail',
        icon: <MailIcon className="h-4 w-4" />,
      },
      ...SOCIALS.map((social) => ({
        id: social.label.toLowerCase(),
        group: 'Connect',
        label: social.label,
        href: social.href,
        external: true,
        icon: <SocialLabelIcon label={social.label} />,
      })),
    ]
  }, [])

  const filtered = useMemo(() => {
    const q = normalizeText(query)
    return items
      .map((item) => {
        const value = [item.label, item.group, item.keywords].filter(Boolean).join(' ')
        return { item, score: scoreMatch(q, value) }
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item)
  }, [items, query])

  const groups = useMemo(() => {
    const map = new Map<string, PaletteItem[]>()
    for (const item of filtered) {
      const arr = map.get(item.group) || []
      arr.push(item)
      map.set(item.group, arr)
    }
    return Array.from(map.entries())
  }, [filtered])

  const indexById = useMemo(() => new Map(filtered.map((item, idx) => [item.id, idx] as const)), [filtered])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k'
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault()
        openPalette()
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openPalette])

  useEffect(() => {
    const onOpen = () => openPalette()
    window.addEventListener('commandpalette:open', onOpen as EventListener)
    return () => window.removeEventListener('commandpalette:open', onOpen as EventListener)
  }, [openPalette])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[activeIndex]
        if (!item) return
        if (isHrefItem(item)) {
          setOpen(false)
          if (item.external) window.open(item.href, '_blank', 'noopener,noreferrer')
          else router.push(item.href)
        } else {
          item.action()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, filtered, open, router])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close command palette"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative mx-auto mt-24 w-[min(720px,calc(100%-2rem))] rounded-3xl border border-white/10 bg-neutral-950/80 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <SearchIcon className="h-4 w-4 text-white/60" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg px-2 py-1 text-xs text-white/60 hover:bg-white/5 hover:text-white"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[52vh] overflow-auto px-2 py-3">
          {groups.length === 0 ? (
            <div className="px-4 py-8 text-sm text-white/60">No results.</div>
          ) : (
            groups.map(([group, groupItems]) => (
              <div key={group} className="mb-4 last:mb-0">
                <div className="px-3 pb-2 text-[11px] font-semibold tracking-wide text-white/45">{group}</div>
                <div className="space-y-1">
                  {groupItems.map((item) => {
                    const idx = indexById.get(item.id) ?? 0
                    const isActive = idx === activeIndex
                    const rowClass = [
                      'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm',
                      isActive ? 'bg-white/7 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white',
                    ].join(' ')

                    const left = (
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 text-white/80">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </span>
                    )

                    if (isHrefItem(item)) {
                      const isCurrent = !item.external && item.href === pathname
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noreferrer noopener' : undefined}
                          className={rowClass}
                          onClick={() => setOpen(false)}
                          aria-current={isCurrent ? 'page' : undefined}
                        >
                          {left}
                          <span className="shrink-0 text-xs text-white/45">
                            {item.external ? 'Open Link' : isCurrent ? 'Current' : 'Go to Page'}
                          </span>
                        </Link>
                      )
                    }

                    return (
                      <button key={item.id} type="button" className={rowClass} onClick={() => item.action()}>
                        {left}
                        <span className="shrink-0 text-xs text-white/45">Run</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/5 px-2 py-1">Ctrl</span>
            <span className="rounded-md bg-white/5 px-2 py-1">K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/5 px-2 py-1">Enter</span> Open
            <span className="rounded-md bg-white/5 px-2 py-1">Esc</span> Exit
          </div>
        </div>
      </div>
    </div>
  )
}
