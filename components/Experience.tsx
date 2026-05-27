import { GlobeIcon } from '@/components/icons'

type ExperienceItem = {
  company: string
  domain: string
  role: string
  duration: string
  location: string
  website: string
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'IOT-E Entertainment',
    domain: 'Brand and Ad Films',
    role: 'Video Editor and Motion Designer',
    duration: 'Mar 2024 - Dec 2025',
    location: 'Noida, Uttar Pradesh',
    website: 'https://iot-e.in',
  },
  {
    company: 'Freelance Projects',
    domain: 'Startups, and Agencies',
    role: 'Video Editor',
    duration: '2023 - Present',
    location: 'Remote',
    website: 'https://www.linkedin.com/in/geekashish/',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-neutral-950/5 px-3 py-1.5 text-sm text-neutral-700 dark:bg-white/5 dark:text-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            Editing experience and client work.
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.duration}`}
            className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">{item.company}</h3>
                  <span className="text-neutral-400 dark:text-white/25">|</span>
                  <p className="text-sm text-neutral-700 dark:text-white/75 sm:text-base">{item.domain}</p>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${item.company} website`}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 transition hover:bg-neutral-50 hover:text-neutral-900 dark:border-white/10 dark:bg-black/20 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <GlobeIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">{item.role}</p>
              </div>

              <div className="shrink-0 sm:text-right">
                <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">{item.duration}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.location}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
