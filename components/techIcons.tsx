import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

export function ReactIcon({ title = 'React', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<circle cx="12" cy="12" r="1.65" fill="currentColor" />
<ellipse
cx="12"
cy="12"
rx="9.75"
ry="4.1"
stroke="currentColor"
strokeWidth="1.5"
/>
<ellipse
cx="12"
cy="12"
rx="9.75"
ry="4.1"
stroke="currentColor"
strokeWidth="1.5"
transform="rotate(60 12 12)"
/>
<ellipse
cx="12"
cy="12"
rx="9.75"
ry="4.1"
stroke="currentColor"
strokeWidth="1.5"
transform="rotate(120 12 12)"
/>
</svg>
)
}

export function NextIcon({ title = 'Next.js', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
strokeLinejoin="round"
d="M7 17V7l10 10V7"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
/>
</svg>
)
}

export function TailwindIcon({ title = 'Tailwind CSS', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
d="M6.5 10.2c1.2-2.8 3-4.2 5.4-4.2 3.6 0 4.5 3 6.9 3 1.4 0 2.6-.7 3.7-2.2-1.2 2.8-3 4.2-5.4 4.2-3.6 0-4.5-3-6.9-3-1.4 0-2.6.7-3.7 2.2Z"
/>
<path
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
d="M1.5 16.2c1.2-2.8 3-4.2 5.4-4.2 3.6 0 4.5 3 6.9 3 1.4 0 2.6-.7 3.7-2.2-1.2 2.8-3 4.2-5.4 4.2-3.6 0-4.5-3-6.9-3-1.4 0-2.6.7-3.7 2.2Z"
/>
</svg>
)
}

export function TypeScriptIcon({ title = 'TypeScript', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
fill="currentColor"
d="M6.4 5.6h11.2a1.8 1.8 0 0 1 1.8 1.8v9.2a1.8 1.8 0 0 1-1.8 1.8H6.4a1.8 1.8 0 0 1-1.8-1.8V7.4a1.8 1.8 0 0 1 1.8-1.8Z"
opacity="0.12"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
d="M6.4 5.6h11.2a1.8 1.8 0 0 1 1.8 1.8v9.2a1.8 1.8 0 0 1-1.8 1.8H6.4a1.8 1.8 0 0 1-1.8-1.8V7.4a1.8 1.8 0 0 1 1.8-1.8Z"
/>
<path
fill="currentColor"
d="M9.1 10h5v1.6h-1.7V16H10.8v-4.4H9.1V10Zm5.7 6.1c.5.4 1.1.6 1.7.6 1.3 0 2.2-.8 2.2-1.9 0-1-.6-1.5-1.6-1.9l-.4-.1c-.5-.2-.7-.3-.7-.6 0-.3.2-.5.6-.5.4 0 .7.2 1 .5l.8-1.1c-.5-.5-1.2-.8-1.9-.8-1.3 0-2.1.8-2.1 1.9 0 1.1.7 1.5 1.6 1.9l.4.2c.4.2.7.3.7.6 0 .3-.3.5-.7.5-.5 0-1.1-.3-1.4-.7l-.8 1.1Z"
/>
</svg>
)
}

export function NodeIcon({ title = 'Node.js', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M12 2.7 20 7.3v9.4L12 21.3 4 16.7V7.3L12 2.7Z"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
strokeLinejoin="round"
d="M9.2 14.8V9.2l5.6 5.6V9.2"
/>
</svg>
)
}

export function PostgresIcon({ title = 'PostgreSQL', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M6.5 7.8c0-2.1 2.5-3.8 5.5-3.8s5.5 1.7 5.5 3.8-2.5 3.8-5.5 3.8-5.5-1.7-5.5-3.8Z"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M6.5 7.9v8.3c0 2.1 2.5 3.8 5.5 3.8s5.5-1.7 5.5-3.8V7.9"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M6.5 12.1c0 2.1 2.5 3.8 5.5 3.8s5.5-1.7 5.5-3.8"
/>
</svg>
)
}

export function DockerIcon({ title = 'Docker', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M6.3 12.7h11.4c.8 0 1.5.7 1.5 1.5 0 3-2.4 5.3-6.8 5.3S5 17.2 5 14.2c0-.8.6-1.5 1.3-1.5Z"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M7.4 10.5h2.2v2.2H7.4v-2.2Zm2.8 0h2.2v2.2H10.2v-2.2Zm2.8 0h2.2v2.2H13v-2.2ZM10.2 8.3h2.2v2.2h-2.2V8.3ZM7.4 8.3h2.2v2.2H7.4V8.3Z"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
d="M19.2 11.6c.8-.1 1.4-.5 1.8-1.2.5 1.1.3 2.4-.5 3.2"
/>
</svg>
)
}

export function KubernetesIcon({ title = 'Kubernetes', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinejoin="round"
d="M12 2.8 19.4 7v10L12 21.2 4.6 17V7L12 2.8Z"
/>
<path
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
strokeLinejoin="round"
d="M12 7.2v9.6M7.8 9.6l4.2 2.4 4.2-2.4M7.8 14.4l4.2-2.4 4.2 2.4"
/>
</svg>
)
}

export function SolanaIcon({ title = 'Solana', ...props }: IconProps) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<title>{title}</title>
<path
fill="currentColor"
d="M6.8 7.2a1 1 0 0 1 .7-.3h13.7l-3.1 2.8H4.4l2.4-2.5Zm-.7 9.6a1 1 0 0 0 .7.3h13.7l-3.1-2.8H3.7l2.4 2.5Zm.7-4.8a1 1 0 0 1 .7-.3h13.7l-3.1 2.8H4.4l2.4-2.5Z"
opacity="0.9"
/>
</svg>
)
}

