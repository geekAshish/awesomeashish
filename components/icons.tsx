'use client'

import type { ComponentProps } from 'react'

type IconProps = ComponentProps<'svg'> & { title?: string }

function IconBase({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <IconBase title="Search" {...props}>
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      <path d="M16.5 16.5 21 21" />
    </IconBase>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase title="Email" {...props}>
      <path d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 17 19H7a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
      <path d="m6 8 6 5 6-5" />
    </IconBase>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <IconBase title="Light theme" {...props}>
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93 6.34 6.34" />
      <path d="M17.66 17.66 19.07 19.07" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07 6.34 17.66" />
      <path d="M17.66 6.34 19.07 4.93" />
    </IconBase>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <IconBase title="Dark theme" {...props}>
      <path d="M21 13.2A7.8 7.8 0 0 1 10.8 3a7.8 7.8 0 1 0 10.2 10.2Z" />
    </IconBase>
  )
}

export function LaptopIcon(props: IconProps) {
  return (
    <IconBase title="System theme" {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5V15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5.5Z" />
      <path d="M2 19h20" />
    </IconBase>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <IconBase title="GitHub" {...props}>
      <path d="M9 19c-4 1.5-4-2-5-2" />
      <path d="M15 22v-3.5c0-1 .05-2.2-.6-3 2-.2 4.1-1 4.1-4.6 0-1-.4-2-1.1-2.7.1-.3.5-1.6-.1-3.3 0 0-.9-.3-3.2 1.1-.9-.3-1.9-.4-2.9-.4s-2 .1-2.9.4C6 1.6 5.1 1.9 5.1 1.9c-.6 1.7-.2 3-.1 3.3C4.3 5.9 4 6.9 4 7.9c0 3.6 2.1 4.4 4.1 4.6-.5.4-.6 1.1-.6 2.1V22" />
    </IconBase>
  )
}

export function XIcon(props: IconProps) {
  return (
    <IconBase title="X" {...props}>
      <path d="M4 4l16 16" />
      <path d="M20 4 4 20" />
    </IconBase>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <IconBase title="LinkedIn" {...props}>
      <path d="M6 9v12" />
      <path d="M6 6.5v.2" />
      <path d="M10 21v-7.5c0-2 1.2-3.5 3.2-3.5 2.1 0 3.3 1.5 3.3 3.5V21" />
      <path d="M10 12.5V9" />
      <path d="M18.5 9H10" />
    </IconBase>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <IconBase title="Website" {...props}>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M2 12h20" />
      <path d="M12 2c2.7 2.7 4.3 6.2 4.3 10S14.7 19.3 12 22c-2.7-2.7-4.3-6.2-4.3-10S9.3 4.7 12 2Z" />
    </IconBase>
  )
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <IconBase title="Role" {...props}>
      <path d="M9 6.5V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M5.5 7.5h13A2.5 2.5 0 0 1 21 10v8.5A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5V10a2.5 2.5 0 0 1 2.5-2.5Z" />
      <path d="M3 13.5c2.5 1.6 5.7 2.5 9 2.5s6.5-.9 9-2.5" />
    </IconBase>
  )
}

export function CodeIcon(props: IconProps) {
  return (
    <IconBase title="Code" {...props}>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
    </IconBase>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase title="Location" {...props}>
      <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </IconBase>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase title="Phone" {...props}>
      <path d="M7.5 4.5h-1A2.5 2.5 0 0 0 4 7c0 7.7 6.3 14 14 14a2.5 2.5 0 0 0 2.5-2.5v-1" />
      <path d="M7.3 4.8 10 7.5c.6.6.6 1.5 0 2.1l-1.3 1.3c1.2 2.2 2.9 4 5.1 5.1l1.3-1.3c.6-.6 1.5-.6 2.1 0l2.7 2.7" />
    </IconBase>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase title="Time" {...props}>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M12 6v6l4 2" />
    </IconBase>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconBase title="Open" {...props}>
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
    </IconBase>
  )
}

export function VerifiedIcon(props: IconProps) {
  return (
    <IconBase title="Verified" {...props}>
      <path d="M12 2 14.4 4.3 17.7 4.4 18.1 7.7 20.4 10.1 18.1 12.5 17.7 15.8 14.4 15.9 12 18.2 9.6 15.9 6.3 15.8 5.9 12.5 3.6 10.1 5.9 7.7 6.3 4.4 9.6 4.3 12 2Z" />
      <path d="m9.5 10.5 1.8 1.8L14.8 8.8" />
    </IconBase>
  )
}
