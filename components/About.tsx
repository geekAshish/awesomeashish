'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'

const styles = [
  { label: 'Brand Commercials', rotate: -6, x: 0, y: 0 },
  { label: 'YouTube Long-form', rotate: 8, x: 32, y: 18 },
  { label: 'Reels and Shorts', rotate: -10, x: 68, y: 44 },
] as const

const timeline = [
  {
    year: '2026',
    title: 'Focused on premium brand films',
    desc: 'Built stronger storytelling systems for ad campaigns, launch videos, and polished social cuts.',
  },
  {
    year: '2025',
    title: 'Scaled short-form editing output',
    desc: 'Edited consistent reel batches with strong hooks, retention pacing, and platform-native format design.',
  },
  {
    year: '2024',
    title: 'Expanded into motion graphics',
    desc: 'Started integrating typography animation, transitions, and audio sync for stronger visual rhythm.',
  },
  {
    year: '2023',
    title: 'Started client editing work',
    desc: 'Shifted from practice edits to paid projects with clear briefs, revisions, and delivery workflows.',
  },
] as const

export default function About() {
  const constraintsRef = useRef<HTMLDivElement | null>(null)
  const [topCard, setTopCard] = useState<string | null>(null)

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 py-16 md:py-24">
      <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">About Me</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
        <div className="max-w-2xl">
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
            I am a video editor who believes pacing is strategy. Every cut, sound cue, and color pass should support the
            message, not distract from it.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            I work with founders, creators, and teams to turn rough footage into clear stories that feel sharp, modern,
            and emotionally engaging.
          </p>
          <p className="mt-6 text-sm text-neutral-700 dark:text-neutral-300">
            Outside editing, I study film language, sound design, and visual storytelling trends across ads and digital
            media.
          </p>
        </div>

        <div className="relative mx-auto mt-2 w-full max-w-md md:mx-0 md:mt-0">
          <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-500">Tip: drag the cards around.</p>
          <div ref={constraintsRef} className="relative h-[240px] w-full">
            {styles.map((p, idx) => (
              <motion.div
                key={p.label}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.12}
                dragMomentum={false}
                dragPropagation={false}
                onPointerDown={() => setTopCard(p.label)}
                initial={{ opacity: 0, scale: 0.98, rotate: p.rotate - 6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: p.rotate }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ rotate: p.rotate - 1, scale: 1.02 }}
                whileTap={{ scale: 1.01 }}
                style={{ x: p.x, y: p.y, zIndex: topCard === p.label ? 20 : idx + 1 }}
                className="absolute left-0 top-0 w-[240px] touch-none cursor-grab rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-sm active:cursor-grabbing dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 dark:border-white/10 dark:from-orange-950/50 dark:via-neutral-950 dark:to-rose-950/40">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:16px_16px] opacity-25 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] dark:opacity-40" />
                </div>
                <div className="mt-2 text-center text-xs font-semibold text-neutral-700 dark:text-neutral-300">{p.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">A quick timeline of my editing journey.</p>

        <div className="mt-6 grid gap-4">
          {timeline.map((item) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35 }}
              className="flex gap-4 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
            >
              <div className="shrink-0">
                <div className="inline-flex items-center rounded-xl border border-neutral-200/80 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-800 shadow-sm dark:border-white/10 dark:bg-black/20 dark:text-neutral-100">
                  {item.year}
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-700 ring-1 ring-yellow-400/35 dark:text-yellow-300">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  </span>
                  <div className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</div>
                </div>
                <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
