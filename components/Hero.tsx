'use client'

import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/icons'
import { TOOL_STACK } from '@/constant/constant'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const ROTATING_BADGES = [
  'Video Editor',
  'Colorist',
  'Story-driven Cuts',
] as const

const BADGE_ROTATE_INTERVAL_MS = 2200

const PROFILE = {
  name: 'Ashish Kushwaha',
  title: 'Cinematic Video Editor',
  summary:
    'I shape raw footage into stories that hold attention, build emotion, and move people to act.',
  roleLine: 'Video Editor',
  focusLine: 'Ads, YouTube, Reels, and Brand Films',
  location: 'India',
  phone: '+91 8299690703',
  availability: 'Available for remote projects',
} as const

function safeUrl(href: string) {
  if (!href || href === '#') return null
  try {
    return new URL(href)
  } catch {
    return null
  }
}

function socialSubtitle(label: string, href: string) {
  const url = safeUrl(href)
  if (!url) return 'Add your link'

  const parts = url.pathname.split('/').filter(Boolean)
  const key = label.toLowerCase()

  if (key === 'youtube') return parts[0] || url.host
  if (key === 'instagram') return parts[0] ? `@${parts[0]}` : url.host
  if (key === 'vimeo') return parts[0] || url.host
  if (key === 'linkedin') {
    const inIndex = parts.indexOf('in')
    if (inIndex >= 0 && parts[inIndex + 1]) return parts[inIndex + 1]
    return parts[0] || url.host
  }

  return url.host
}

function SocialBadge({ label }: { label: string }) {
  const key = label.toLowerCase()
  const colors: Record<string, string> = {
    youtube: 'from-rose-300 to-red-300',
    instagram: 'from-fuchsia-300 to-amber-300',
    linkedin: 'from-sky-300 to-blue-300',
    vimeo: 'from-cyan-300 to-sky-300',
  }

  return (
    <span
      className={[
        'grid h-12 w-12 place-items-center rounded-2xl text-xs font-bold text-neutral-900 ring-1 ring-black/10',
        `bg-gradient-to-br ${colors[key] || 'from-neutral-200 to-neutral-100'}`,
      ].join(' ')}
    >
      {label.slice(0, 2).toUpperCase()}
    </span>
  )
}

function InfoRow({
  icon,
  label,
  value,
  href,
  mono,
}: {
  icon: ReactNode
  label: string
  value: ReactNode
  href?: string
  mono?: boolean
}) {
  const shouldOpenNewTab = Boolean(href && !/^(mailto:|tel:)/i.test(href))

  const content = (
    <span
      className={[
        'min-w-0 flex-1 truncate',
        mono ? 'font-mono tracking-tight' : 'font-medium tracking-tight',
        'text-white/85',
      ].join(' ')}
    >
      {value}
    </span>
  )

  return (
    <div className="flex items-center gap-3 py-1.5 text-[13px] sm:text-sm">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/6 ring-1 ring-white/10">
        <span className="text-white/70">{icon}</span>
      </span>
      <span className="sr-only">{label}:</span>
      {href ? (
        <a
          href={href}
          target={shouldOpenNewTab ? '_blank' : undefined}
          rel={shouldOpenNewTab ? 'noreferrer noopener' : undefined}
          className="min-w-0 flex-1 truncate underline decoration-white/15 underline-offset-4 hover:decoration-white/30"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}

export default function Hero() {
  const [badgeIndex, setBadgeIndex] = useState(0)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % ROTATING_BADGES.length)
    }, BADGE_ROTATE_INTERVAL_MS)

    return () => window.clearInterval(timerId)
  }, [])

  const activeBadge = ROTATING_BADGES[badgeIndex]

  const socialCards = useMemo(
    () =>
      SOCIALS.map((s) => ({
        label: s.label,
        href: s.href,
      })),
    []
  )

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-5xl pb-14 pt-14 md:pb-20 md:pt-20"
    >
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl dark:text-white">{PROFILE.name}</h1>
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200/80 bg-white/80 px-3 py-1 text-sm text-neutral-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white/70">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeBadge}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="inline-block"
              >
                {activeBadge}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-white/45">{PROFILE.summary}</p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950/95 to-neutral-900/55 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur md:p-6">
        <div className="grid gap-3 md:grid-cols-2 md:gap-x-12">
          <div className="grid gap-1">
            <InfoRow icon={<BriefcaseIcon className="h-4 w-4" />} label="Role" value={PROFILE.roleLine} mono />
            <InfoRow icon={<GlobeIcon className="h-4 w-4" />} label="Focus" value={PROFILE.focusLine} mono />
            <InfoRow icon={<MapPinIcon className="h-4 w-4" />} label="Location" value={PROFILE.location} mono />
          </div>

          <div className="grid gap-1">
            <InfoRow
              icon={<PhoneIcon className="h-4 w-4" />}
              label="Phone"
              value={PROFILE.phone}
              href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
              mono
            />
            <InfoRow
              icon={<MailIcon className="h-4 w-4" />}
              label="Email"
              value={CONTACT_EMAIL}
              href={`mailto:${CONTACT_EMAIL}`}
              mono
            />
            <InfoRow icon={<BriefcaseIcon className="h-4 w-4" />} label="Availability" value={PROFILE.availability} mono />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {socialCards.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-4 rounded-3xl border border-neutral-200/80 bg-white px-5 py-4 text-neutral-900 shadow-sm backdrop-blur transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/7"
          >
            <span className="flex items-center gap-3">
              <SocialBadge label={s.label} />
              <span className="min-w-0">
                <div className="text-sm font-semibold">{s.label}</div>
                <div className="text-xs text-neutral-600 dark:text-white/50">{socialSubtitle(s.label, s.href)}</div>
              </span>
            </span>

            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-neutral-950/5 text-neutral-700 ring-1 ring-neutral-200/80 transition group-hover:bg-neutral-950/10 dark:bg-black/25 dark:text-white/70 dark:ring-white/10 dark:group-hover:bg-black/35">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 max-w-5xl">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-neutral-950 dark:text-white/85">Editing Toolkit</h2>
          <div className="h-px flex-1 bg-neutral-200/80 dark:bg-white/10" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOOL_STACK.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-xs text-neutral-700 shadow-sm backdrop-blur transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/7 dark:hover:text-white md:text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
