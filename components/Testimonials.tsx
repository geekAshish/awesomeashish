'use client'

import { motion } from 'motion/react'

const testimonials = [
  {
    quote:
      'Ashish completely transformed our raw footage into a high-converting launch video. The pacing and story were exactly what we needed.',
    name: 'Founder, D2C Fitness Brand',
  },
  {
    quote:
      'Fast turnaround, clean communication, and excellent creative judgement. Our short-form content quality jumped immediately.',
    name: 'Marketing Lead, Creator Agency',
  },
  {
    quote:
      'He understands both emotion and retention. Every revision was thoughtful and aligned with our brand tone.',
    name: 'YouTube Creator',
  },
] as const

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl py-12 md:py-16">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-2xl">Client feedback</h2>

      <div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="min-w-[280px] flex-1 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 dark:backdrop-blur md:min-w-0"
          >
            <blockquote className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{t.name}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
