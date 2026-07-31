'use client'

import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
// import Image from 'next/image'
import { motion } from 'motion/react'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import { projects } from '@/components/projectsData'
import { getYouTubeThumbnailUrl, getYouTubeVideoId } from '@/lib/youtube'
// Temporarily hidden hero assets; restore these imports with the JSX below when needed.
// import profileImage from '@/assets/hero/aman_face.png'
// import afterEffectsIcon from '@/assets/hero/after_effect.png'
// import davinciIcon from '@/assets/hero/davinci.png'
// import photoshopIcon from '@/assets/hero/photoshop.png'
// import premiereIcon from '@/assets/hero/premiore_pro.png'

const aiVideos = [
  { title: 'AI Long Video 01', type: 'Long Video', url: 'https://youtu.be/PiQNe2Quf40?si=q9PxJg5mZmsk9h7M' },
  { title: 'AI Long Video 02', type: 'Long Video', url: 'https://youtu.be/scLBJSJdLfQ?si=68OlfUCvvLYs4TuL' },
  { title: 'AI Long Video 03', type: 'Long Video', url: 'https://youtu.be/M8rnWDZNb6c?si=dGqlK9v34vS_Z7Xb' },
  { title: 'AI Short 01', type: 'Short', url: 'https://youtube.com/shorts/lmSJvaAzUjw?si=OLq4av4pVxhO6lwR' },
  { title: 'AI Short 02', type: 'Short', url: 'https://youtube.com/shorts/VHEjAqc8ixs?si=SRmAfcsY1pk1ZspJ' },
  { title: 'AI Short 03', type: 'Short', url: 'https://youtube.com/shorts/XQ_pltw0BzU?si=guIdPom73XI1Amy3' },
  { title: 'AI Short 04', type: 'Short', url: 'https://youtube.com/shorts/uOd66cbsH0o?si=oItsB14uznhvnlIh' },
  { title: 'AI Short 05', type: 'Short', url: 'https://youtube.com/shorts/LySRiuZNYuA?si=a5viPpmhoNwJ9o1Z' },
  { title: 'AI Short 06', type: 'Short', url: 'https://youtube.com/shorts/2-5-N3lPYgQ?si=DKsMU2A-jh_H-HBP' },
] as const

const timeline = [
  { year: '2026', title: 'Focused on premium brand films', desc: 'Built stronger storytelling systems for ad campaigns, launch videos, and polished social cuts.' },
  { year: '2025', title: 'Scaled short-form editing output', desc: 'Edited consistent reel batches with strong hooks, retention pacing, and platform-native format design.' },
  { year: '2024', title: 'Expanded into motion graphics', desc: 'Started integrating typography animation, transitions, and audio sync for stronger visual rhythm.' },
  { year: '2023', title: 'Started client editing work', desc: 'Shifted from practice edits to paid projects with clear briefs, revisions, and delivery workflows.' },
] as const

const experience = [
  { company: 'IOT-E Entertainment', domain: 'Brand and Ad Films', role: 'Video Editor and Motion Designer', duration: 'March 2024 - July 2026', location: 'Prayagraj, Uttar Pradesh', website: 'https://iot-e.in' },
  { company: 'Freelance', domain: 'Startups, and Agencies', role: 'Video Editor', duration: 'Jan 2023 - present', location: 'Remote', website: 'https://www.linkedin.com/in/awesomeashish/' },
] as const

const testimonials = [
  { quote: 'Ashish completely transformed our raw footage into a high-converting launch video. The pacing and story were exactly what we needed.', name: 'Founder, D2C Fitness Brand' },
  { quote: 'Fast turnaround, clean communication, and excellent creative judgement. Our short-form content quality jumped immediately.', name: 'Marketing Lead, Creator Agency' },
  { quote: 'He understands both emotion and retention. Every revision was thoughtful and aligned with our brand tone.', name: 'YouTube Creator' },
] as const

const tools = ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Adobe Audition', 'Color Grading', 'Sound Design', 'Motion Graphics', 'Short-form Reels', 'Long-form YouTube', 'Commercial Ads', 'Documentary Cuts']

const hiddenVideoProjects = new Set(['Product Explainer for SaaS', 'Wedding Highlight Film', 'Performance Ad Variations'])

const longFormWork = [
  ...projects.filter((project) => !hiddenVideoProjects.has(project.title)).map((project) => ({ title: project.title, type: project.category, url: project.watch ?? '' })),
  ...aiVideos.filter((video) => video.type === 'Long Video').map((video) => ({ title: video.title, type: video.type, url: video.url })),
]

function SectionTitle({ accent, children, id }: { accent: string; children: ReactNode; id?: string }) {
  return (
    <div id={id} className="py-14 text-center sm:py-20">
      <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
        <span className="video-glow-purple">{accent}</span>
        <span className="ml-3 font-light lowercase italic text-white">{children}</span>
      </h2>
    </div>
  )
}

function VideoCard({ title, type, url, short = false }: { title: string; type: string; url: string; short?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const id = getYouTubeVideoId(url)
  const thumbnail = getYouTubeThumbnailUrl(url)

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50">
      <div className={`relative overflow-hidden bg-black ${short ? 'aspect-[9/14]' : 'aspect-video'}`}>
        {playing && id ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${title} player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : thumbnail ? (
          <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${thumbnail})` }} />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-[size:16px_16px]" />
        )}
        {!playing && id ? (
          <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 transition hover:bg-black/45" aria-label={`Play ${title}`}>
            <span className="rounded-full border border-white/70 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Play</span>
          </button>
        ) : null}
        {playing ? (
          <button type="button" onClick={() => setPlaying(false)} className="absolute right-3 top-3 z-20 rounded-full border border-white/50 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase text-white">Stop</button>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex justify-between text-xs font-medium text-white/80"><span>{type}</span><span>Watch edit</span></div>
      </div>
      <h3 className="px-4 py-3 text-sm font-semibold text-white">{title}</h3>
    </article>
  )
}

export default function VideoPortfolioHome() {
  const [fromEmail, setFromEmail] = useState('')
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Video editing enquiry')
    const body = encodeURIComponent(`Hi Ashish,\n\nI am reaching out from your portfolio for a video editing project.\n\nFrom: ${fromEmail || '(add your email here)'}\n\nThanks!`)
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }, [fromEmail])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <main className="video-portfolio min-h-screen overflow-hidden bg-black text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-black/90 px-5 py-6 backdrop-blur-md sm:px-8">
        <a href="#home" className="text-xl font-bold tracking-widest sm:text-2xl text-white">Ashish Kushwaha</a>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-purple-400">Home</a>
          <a href="#about" className="transition hover:text-purple-400">About</a>
          <a href="#portfolio" className="transition hover:text-purple-400">Portfolio</a>
          <a href="#testimonials" className="transition hover:text-purple-400">Testimonials</a>
          <a href="#contact" className="transition hover:text-purple-400">Contact</a>
        </nav>
        <a href="https://www.linkedin.com/in/awesomeashish/" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-gray-400 transition hover:text-purple-400">LinkedIn</a>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-2 md:pb-28 md:pt-20">
        <div className="text-center md:text-left">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-purple-400">Video Editor &amp; Motion Designer</p>
          <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">PROFESSIONAL</span><br /><span className="font-serif italic text-purple-400">Video Editing</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:mx-0">Hi, I’m <span className="font-semibold text-white">Ashish Kushwaha</span> — I create <span className="font-semibold text-purple-400">scroll-stopping video stories</span> that keep audiences hooked.</p>
          <a href="#contact" className="mt-8 inline-flex rounded bg-purple-600 px-8 py-4 font-bold uppercase tracking-wider transition hover:scale-105 hover:bg-purple-700">Let&apos;s talk</a>
        </div>

        <div className="relative mx-auto flex h-[25rem] w-full max-w-xl items-center justify-center">
          {/* Dotted orbit circle temporarily hidden.
          <div className="absolute h-64 w-64 rounded-full border border-dashed border-gray-700 md:h-96 md:w-96" />
          */}
          {/* Profile circle and image temporarily hidden.
          <div className="relative grid h-60 w-60 place-items-center overflow-hidden rounded-full border-2 border-gray-500/50 bg-zinc-950 shadow-[0_0_80px_rgba(147,51,234,0.18)] md:h-80 md:w-80">
            <Image src={profileImage} alt="Ashish Kushwaha" fill priority className="object-contain object-bottom" />
          </div>
          */}
          {/* Floating editing-tool icons temporarily hidden.
          <div className="tool-orbit tool-orbit-one"><Image src={premiereIcon} alt="Adobe Premiere Pro" fill className="object-contain p-1" /></div><div className="tool-orbit tool-orbit-two"><Image src={afterEffectsIcon} alt="Adobe After Effects" fill className="object-contain p-1" /></div><div className="tool-orbit tool-orbit-three"><Image src={davinciIcon} alt="DaVinci Resolve" fill className="object-contain p-1" /></div><div className="tool-orbit tool-orbit-four"><Image src={photoshopIcon} alt="Adobe Photoshop" fill className="object-contain p-1" /></div>
          */}
        </div>
      </section>

      <div className="flex items-center justify-center gap-8 border-y border-white/10 bg-zinc-950 px-4 py-10 sm:gap-12"><h2 className="text-4xl font-extrabold uppercase tracking-wide sm:text-6xl">Video Editing</h2><span className="text-6xl text-gray-500 sm:text-8xl">✦</span></div>

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div><p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-400">About me</p><h2 className="text-4xl font-bold sm:text-5xl">Pacing is strategy.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">I am a video editor who believes pacing is strategy. Every cut, sound cue, and color pass should support the message, not distract from it.</p><p className="mt-4 max-w-2xl leading-relaxed text-gray-400">I work with founders, creators, and teams to turn rough footage into clear stories that feel sharp, modern, and emotionally engaging.</p><p className="mt-4 max-w-2xl leading-relaxed text-gray-400">Outside editing, I study film language, sound design, and visual storytelling trends across ads and digital media.</p></div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6"><p className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-500">Editing toolkit</p><div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-full border border-purple-400/25 bg-purple-400/5 px-3 py-2 text-xs text-gray-300">{tool}</span>)}</div></div>
        </div>
        {/* Temporarily hidden; original timeline and experience data remain above for later restoration.
        <div className="mt-16 grid gap-4 md:grid-cols-2">{timeline.map((item) => <article key={item.year} className="flex gap-4 rounded-xl border border-white/10 bg-zinc-950 p-5"><span className="text-lg font-bold text-purple-400">{item.year}</span><div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p></div></article>)}</div>
        <div className="mt-12 grid gap-4">{experience.map((item) => <article key={item.company} className="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950 p-5 sm:flex-row"><div><a href={item.website} target="_blank" rel="noreferrer" className="font-semibold text-white transition hover:text-purple-400">{item.company}</a><p className="mt-1 text-purple-400">{item.role}</p><p className="mt-1 text-sm text-gray-400">{item.domain}</p></div><div className="text-sm text-gray-400 sm:text-right"><p>{item.duration}</p><p>{item.location}</p></div></article>)}</div>
        */}
      </section>

      <SectionTitle accent="AI" id="portfolio">Reels</SectionTitle>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-3">{aiVideos.filter((video) => video.type === 'Short').map((video) => <VideoCard key={video.url} {...video} short />)}</section>

      <SectionTitle accent="Long-Form">Content</SectionTitle>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-3">{longFormWork.map((item) => <VideoCard key={item.title} {...item} />)}</section>

      {/* Temporarily hidden; restore this block when short-form content is ready.
      <SectionTitle accent="Short-Form">Content</SectionTitle>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 sm:grid-cols-2 lg:grid-cols-3">{projects.filter((project) => !hiddenVideoProjects.has(project.title) && (project.category === 'Paid Ads' || project.category === 'Brand Commercial')).map((project) => <VideoCard key={project.title} title={project.title} type={project.category} url={project.watch ?? ''} short />)}</section>
      */}

      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"><div className="mb-12 text-center"><p className="text-sm uppercase tracking-[0.25em] text-purple-400">Client feedback</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">What my clients say</h2><p className="mt-4 text-gray-400">Real stories from people who have experienced the magic.</p></div><div className="grid gap-6 md:grid-cols-3">{testimonials.map((testimonial, index) => <motion.figure key={testimonial.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`rounded-2xl border border-white/10 bg-zinc-900 p-7 shadow-lg ${index % 2 ? 'rotate-2' : '-rotate-2'} transition hover:rotate-0`}><blockquote className="text-lg leading-relaxed text-gray-200">&quot;{testimonial.quote}&quot;</blockquote><figcaption className="mt-8 font-bold text-white">{testimonial.name}</figcaption></motion.figure>)}</div></section>

      <section id="contact" className="border-t border-white/10 bg-zinc-950 px-5 py-20 text-center sm:px-8"><h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">Drop us a line or two, we are open for creative minds and collaborations!</h2><p className="mx-auto mt-6 max-w-2xl text-gray-400">Open for freelance projects, long-term editing partnerships, and agency collaborations.</p><div className="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-black p-6 text-left"><p className="text-sm text-gray-400">Reach me at <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-purple-400 hover:underline">{CONTACT_EMAIL}</a></p><form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row"><input value={fromEmail} onChange={(event) => setFromEmail(event.target.value)} type="email" placeholder="Your email" aria-label="Your email" className="min-w-0 flex-1 rounded-lg border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-400" /><button type="submit" className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-purple-300">Send project brief</button></form><div className="mt-6 flex flex-wrap gap-3">{SOCIALS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-gray-300 hover:border-purple-400 hover:text-white">{social.label}</a>)}</div></div></section>

      <footer className="flex flex-col justify-between gap-4 border-t border-white/10 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:px-8"><span>Crafted frame by frame by Ashish Kushwaha</span><span>© {new Date().getFullYear()} Ashish Kushwaha</span></footer>
    </main>
  )
}
