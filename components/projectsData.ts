export type Project = {
  title: string
  desc: string
  stack: readonly string[]
  category: string
  runtime: string
  year: string
  watch?: string
  breakdown?: string
}

export const projects: readonly Project[] = [
  {
    title: 'These 6 AI Tools Every Creator Should Know',
    desc: 'Cut a high-energy launch video that mixed product UI, lifestyle shots, and performance-focused pacing.',
    stack: ['Premiere Pro', 'After Effects'],
    category: 'Brand Commercial',
    runtime: '07:45',
    year: '2026',
    watch: 'https://youtu.be/7wUA_4Fngc8?si=Vr0CFKwlgcvs54jG',
    breakdown: 'https://youtu.be/7wUA_4Fngc8?si=Vr0CFKwlgcvs54jG',
  },
  {
    title: 'My Weekly YouTube Workflow',
    desc: 'Delivered a daily long-form content batch with hook-first openings, captions.',
    stack: ['Premiere Pro', 'Color Grading', 'Audio Cleanup'],
    category: 'YouTube Long-form',
    runtime: '4:22',
    year: '2026',
    watch: 'https://youtu.be/Y7utUhm2nXU?si=4hwN6vBG08-7oQ_t',
  },
  {
    title: 'Podcast',
    desc: 'Structured long-form interview footage into a story arc with stronger retention and emotional flow.',
    stack: ['Premiere Pro', 'After Effects', 'Motion Graphics'],
    category: 'YouTube Long-form',
    runtime: '',
    year: '2025',
    watch: 'https://youtu.be/Np85NGJrduA?si=2hZswE1mXEcJV1Wf',
    breakdown: 'https://youtu.be/Np85NGJrduA?si=2hZswE1mXEcJV1Wf/',
  },
  {
    title: 'Product Explainer for SaaS',
    desc: 'Combined screen captures, animation callouts, and VO timing for a concise conversion-focused explainer.',
    stack: ['Premiere Pro', 'After Effects'],
    category: 'Explainer',
    runtime: '02:35',
    year: '2025',
    watch: 'https://youtu.be/Np85NGJrduA?si=2hZswE1mXEcJV1Wf',
  },
  {
    title: 'Wedding Highlight Film',
    desc: 'Created a cinematic highlight with natural color tones, music beats, and emotional storytelling.',
    stack: ['Final Cut Pro', 'Color Grading', 'Sound Design'],
    category: 'Event Film',
    runtime: '05:10',
    year: '2024',
    watch: 'https://youtube.com/ashishedits',
  },
  {
    title: 'Performance Ad Variations',
    desc: 'Edited multiple ad variants for A/B testing with different openings, pacing, and CTA moments.',
    stack: ['Premiere Pro', 'After Effects', 'Short-form Strategy'],
    category: 'Paid Ads',
    runtime: '12 variants',
    year: '2024',
    watch: 'https://www.youtube.com/@ashishedits',
    breakdown: 'https://www.instagram.com/zeroashish',
  },
] as const
