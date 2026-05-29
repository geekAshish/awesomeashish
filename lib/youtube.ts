const YOUTUBE_HOSTS = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'www.youtu.be'])

function isLikelyVideoId(value: string): boolean {
  return /^[A-Za-z0-9_-]{11}$/.test(value)
}

export function getYouTubeVideoId(rawUrl?: string): string | null {
  if (!rawUrl) return null

  let parsed: URL
  try {
    parsed = new URL(rawUrl)
  } catch {
    return null
  }

  const host = parsed.hostname.toLowerCase()
  if (!YOUTUBE_HOSTS.has(host)) return null

  if (host.endsWith('youtu.be')) {
    const shortId = parsed.pathname.split('/').filter(Boolean)[0]
    return shortId && isLikelyVideoId(shortId) ? shortId : null
  }

  const pathParts = parsed.pathname.split('/').filter(Boolean)

  if (pathParts[0] === 'watch') {
    const watchId = parsed.searchParams.get('v')
    return watchId && isLikelyVideoId(watchId) ? watchId : null
  }

  if (['embed', 'shorts', 'live'].includes(pathParts[0])) {
    const id = pathParts[1]
    return id && isLikelyVideoId(id) ? id : null
  }

  return null
}

export function getYouTubeThumbnailUrl(rawUrl?: string): string | null {
  const id = getYouTubeVideoId(rawUrl)
  if (!id) return null
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
