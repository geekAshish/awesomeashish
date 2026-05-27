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
    title: 'Launch Film - Fitness App',
    desc: 'Cut a high-energy launch video that mixed product UI, lifestyle shots, and performance-focused pacing.',
    stack: ['Premiere Pro', 'After Effects', 'Sound Design'],
    category: 'Brand Commercial',
    runtime: '01:08',
    year: '2026',
    watch: 'https://www.youtube.com/@ashishedits',
    breakdown: 'https://youtube.com/ashishedits',
  },
  {
    title: 'YouTube Documentary Edit',
    desc: 'Structured long-form interview footage into a story arc with stronger retention and emotional flow.',
    stack: ['DaVinci Resolve', 'Color Grading', 'Audio Cleanup'],
    category: 'YouTube Long-form',
    runtime: '14:22',
    year: '2026',
    watch: 'https://www.youtube.com/@ashishedits',
  },
  {
    title: '30-Day Reels Campaign',
    desc: 'Delivered a daily short-form content batch with hook-first openings, captions, and punchy transitions.',
    stack: ['Premiere Pro', 'After Effects', 'Motion Graphics'],
    category: 'Social Media',
    runtime: '30 edits',
    year: '2025',
    watch: 'https://www.instagram.com/zeroashish',
    breakdown: 'https://www.linkedin.com/in/geekashish/',
  },
  {
    title: 'Product Explainer for SaaS',
    desc: 'Combined screen captures, animation callouts, and VO timing for a concise conversion-focused explainer.',
    stack: ['Premiere Pro', 'After Effects', 'Audition'],
    category: 'Explainer',
    runtime: '02:35',
    year: '2025',
    watch: 'https://www.youtube.com/@ashishedits',
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
