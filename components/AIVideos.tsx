'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { getYouTubeThumbnailUrl, getYouTubeVideoId } from '@/lib/youtube'

type AIVideo = {
  title: string
  type: 'Long Video' | 'Short'
  url: string
}

const aiVideos: readonly AIVideo[] = [
  {
    title: 'AI Long Video 01',
    type: 'Long Video',
    url: 'https://youtu.be/PiQNe2Quf40?si=q9PxJg5mZmsk9h7M',
  },
  {
    title: 'AI Long Video 02',
    type: 'Long Video',
    url: 'https://youtu.be/scLBJSJdLfQ?si=68OlfUCvvLYs4TuL',
  },
  {
    title: 'AI Long Video 03',
    type: 'Long Video',
    url: 'https://youtu.be/M8rnWDZNb6c?si=dGqlK9v34vS_Z7Xb',
  },
  {
    title: 'AI Short 01',
    type: 'Short',
    url: 'https://youtube.com/shorts/lmSJvaAzUjw?si=OLq4av4pVxhO6lwR',
  },
  {
    title: 'AI Short 02',
    type: 'Short',
    url: 'https://youtube.com/shorts/j3uQxe6fxUY?feature=share',
  },
  {
    title: 'AI Short 03',
    type: 'Short',
    url: 'https://youtube.com/shorts/JPzqlPy1w3E?feature=share',
  },
  {
    title: 'AI Short 04',
    type: 'Short',
    url: 'https://youtube.com/shorts/Sh7ZB8xHgnw?feature=share',
  },
  {
    title: 'AI Short 05',
    type: 'Short',
    url: 'https://youtube.com/shorts/TzOVIn80sA8?feature=share',
  },
  {
    title: 'AI Short 06',
    type: 'Short',
    url: 'https://youtube.com/shorts/PNnoV0sYLJg?feature=share',
  },
] as const

function AIVideoCard({ video, index }: { video: AIVideo; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeVideoId(video.url)
  const thumbnail = getYouTubeThumbnailUrl(video.url)
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1` : null
  const isShort = video.type === 'Short'

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black dark:border-white/10 ${
          isShort ? 'aspect-[9/14]' : 'aspect-video'
        }`}
      >
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${video.title} player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : thumbnail ? (
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:14px_14px] opacity-35" />
        )}

        {!isPlaying && videoId ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          >
            <span className="rounded-full border border-white/60 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Play
            </span>
          </button>
        ) : null}

        {isPlaying && videoId ? (
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label={`Stop ${video.title}`}
            className="absolute right-3 top-3 z-20 rounded-full border border-white/50 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
          >
            Stop
          </button>
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-medium text-white/85">
          <span>{video.type}</span>
          <span>AI Video</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-semibold tracking-tight text-neutral-950 dark:text-white">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          YouTube {video.type.toLowerCase()} edit focused on AI content pacing and retention.
        </p>
      </div>
    </motion.article>
  )
}

export default function AIVideos() {
  const longVideos = aiVideos.filter((video) => video.type === 'Long Video')
  const shorts = aiVideos.filter((video) => video.type === 'Short')

  return (
    <section className="mx-auto max-w-5xl py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-neutral-950/5 px-3 py-1.5 text-sm text-neutral-700 dark:bg-white/5 dark:text-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            AI videos.
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            Long-form videos and shorts built around AI tools, creator workflows, and fast product storytelling.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Long Videos</h3>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {longVideos.map((video, index) => (
            <AIVideoCard key={video.url} video={video} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Shorts</h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {shorts.map((video, index) => (
            <AIVideoCard key={video.url} video={video} index={index + longVideos.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
