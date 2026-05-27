import { NextResponse } from 'next/server'

type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

function addDays(date: Date, days: number) {
  const next = new Date(date.getTime())
  next.setUTCDate(next.getUTCDate() + days)
  return next
}

function dayIndex(dateIso: string) {
  const [y, m, d] = dateIso.split('-').map((v) => Number(v))
  return Math.floor(Date.UTC(y, m - 1, d) / 86_400_000)
}

function fromDayIndex(idx: number) {
  return new Date(idx * 86_400_000).toISOString().slice(0, 10)
}

function parseSummary(html: string) {
  const match = html.match(/>\s*([\d,]+)\s+contributions?\s+in\s+([^<]+?)\s*</i)
  if (!match) return null
  const value = match[1]?.trim()
  const scope = match[2]?.trim()
  if (!value || !scope) return null
  return `${value} contributions in ${scope}`
}

function parseCountFromAriaLabel(tag: string) {
  if (/aria-label="No contributions? on/i.test(tag)) return 0
  const match = tag.match(/aria-label="([\d,]+)\s+contributions?\s+on/i)
  if (!match) return null
  const value = match[1]?.replace(/,/g, '')
  const num = Number(value)
  return Number.isFinite(num) ? num : null
}

function parseDays(html: string): ContributionDay[] {
  const rectRe = /<(?:rect|td)\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g
  const out: ContributionDay[] = []

  for (;;) {
    const match = rectRe.exec(html)
    if (!match) break
    const tag = match[0]
    const date = match[1]

    const count =
      Number(tag.match(/data-count="(\d+)"/)?.[1] ?? 'NaN') ||
      parseCountFromAriaLabel(tag) ||
      0
    const levelRaw = Number(tag.match(/data-level="(\d+)"/)?.[1] ?? '0')
    const level = Math.max(0, Math.min(4, levelRaw)) as ContributionDay['level']

    out.push({ date, count, level })
  }

  out.sort((a, b) => a.date.localeCompare(b.date))
  return out
}

function alignRangeToWeeks(from: string, to: string) {
  const fromDate = new Date(`${from}T00:00:00Z`)
  const toDate = new Date(`${to}T00:00:00Z`)
  if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) return { start: from, end: to }

  const start = addDays(fromDate, -fromDate.getUTCDay()) // Sunday
  const end = addDays(toDate, 6 - toDate.getUTCDay()) // Saturday

  return { start: isoDate(start), end: isoDate(end) }
}

function buildWeeks(from: string, to: string, days: ContributionDay[]) {
  const byDate = new Map(days.map((d) => [d.date, d] as const))
  const { start: alignedStart, end: alignedEnd } = alignRangeToWeeks(from, to)
  const start = dayIndex(alignedStart)
  const end = dayIndex(alignedEnd)
  const totalDays = end - start + 1
  const weeks: Array<Array<ContributionDay | null>> = []

  for (let offset = 0; offset < totalDays; offset++) {
    const weekIndex = Math.floor(offset / 7)
    const dayOfWeek = offset % 7
    const date = fromDayIndex(start + offset)

    if (!weeks[weekIndex]) weeks[weekIndex] = Array.from({ length: 7 }, () => null)
    weeks[weekIndex][dayOfWeek] = byDate.get(date) ?? { date, count: 0, level: 0 }
  }

  return weeks
}

function monthLabels(weeks: Array<Array<ContributionDay | null>>) {
  const labels: Array<{ weekIndex: number; label: string }> = []
  const fmt = new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' })

  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    const week = weeks[weekIndex] ?? []
    const firstOfMonth = week.find((d) => d?.date?.endsWith('-01'))
    if (!firstOfMonth) continue

    const dt = new Date(`${firstOfMonth.date}T00:00:00Z`)
    if (Number.isNaN(dt.getTime())) continue

    labels.push({ weekIndex, label: fmt.format(dt) })
  }

  return labels
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')?.trim()
  if (!username) return NextResponse.json({ error: 'Missing username' }, { status: 400 })

  const now = new Date()
  const to = searchParams.get('to')?.trim() || isoDate(now)
  const from = searchParams.get('from')?.trim() || isoDate(addDays(now, -365))

  const url = `https://github.com/users/${encodeURIComponent(username)}/contributions?from=${from}&to=${to}`
  const res = await fetch(url, {
    headers: { 'user-agent': 'portfolio-site' },
    next: { revalidate: 6 * 60 * 60 },
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'GitHub request failed' }, { status: 502 })
  }

  const html = await res.text()
  const days = parseDays(html)
  const weeks = buildWeeks(from, to, days)
  const total = days.reduce((sum, d) => sum + d.count, 0)
  const summary = parseSummary(html) ?? `${total.toLocaleString('en-US')} contributions in the last year`

  return NextResponse.json(
    {
      username,
      summary,
      total,
      parsedDays: days.length,
      from,
      to,
      monthLabels: monthLabels(weeks),
      weeks,
    },
    {
      headers: {
        'cache-control': 'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400',
      },
    }
  )
}
