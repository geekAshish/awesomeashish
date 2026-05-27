'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { projects } from '@/components/projectsData'
import { ArrowUpRightIcon } from '@/components/icons'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="mx-auto max-w-5xl py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-neutral-950/5 px-3 py-1.5 text-sm text-neutral-700 dark:bg-white/5 dark:text-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            Selected edits.
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            Story-first cutting, clean motion, and platform-aware pacing.
          </p>
        </div>
        <Link
          href="/projects"
          className="rounded-full border border-neutral-200/80 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/8"
        >
          View all work
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {featured.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black dark:border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:14px_14px] opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/85">
                <span>{p.category}</span>
                <span>{p.runtime}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-base font-semibold tracking-tight text-neutral-950 dark:text-white">{p.title}</h3>
                <div className="flex shrink-0 items-center gap-2 pt-0.5">
                  {p.watch ? (
                    <a
                      href={p.watch}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Watch edit"
                      title="Watch"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-black/20 dark:hover:bg-white/8"
                    >
                      <ArrowUpRightIcon className="h-4 w-4 text-neutral-700 dark:text-white/75" />
                    </a>
                  ) : null}
                  {p.breakdown ? (
                    <a
                      href={p.breakdown}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View breakdown"
                      title="Breakdown"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-[10px] font-semibold shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-black/20 dark:text-white/75 dark:hover:bg-white/8"
                    >
                      BD
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{p.desc}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-neutral-200/80 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm dark:border-white/10 dark:bg-black/20 dark:text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
