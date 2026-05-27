'use client'

import { useMemo, useState } from 'react'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import { motion } from 'motion/react'

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
        'grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold text-neutral-900 ring-1 ring-black/10',
        `bg-gradient-to-br ${colors[key] || 'from-neutral-200 to-neutral-100'}`,
      ].join(' ')}
    >
      {label.slice(0, 2).toUpperCase()}
    </span>
  )
}

export default function Contact() {
  const [fromEmail, setFromEmail] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Video editing enquiry')
    const body = encodeURIComponent(
      `Hi Ashish,\n\nI am reaching out from your portfolio for a video editing project.\n\nFrom: ${fromEmail || '(add your email here)'}\n\nThanks!`
    )
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }, [fromEmail])

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 py-16 md:py-24">
      <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">Contact</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
        Open for freelance projects, long-term editing partnerships, and agency collaborations.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        className="mt-10 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:backdrop-blur md:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(250,204,21,0.14)]" />
          <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">Start a project</h3>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
          Share your timeline, edit style, and deliverables. I can support single videos or full content batches.
        </p>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
          Reach me at:{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:text-white dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailtoHref
          }}
        >
          <input
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="flex-1 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-400/50 dark:border-white/10 dark:bg-black/20 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            placeholder="Your email"
            inputMode="email"
            autoComplete="email"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Send project brief
          </button>
        </form>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
          <span>or drop me a message on socials.</span>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/8 dark:hover:text-white"
            >
              <SocialBadge label={s.label} />
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
