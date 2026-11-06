import Link from 'next/link'

const reflections = [
  { label: 'Reflection 01', href: '/reflection-1' },
  { label: 'Reflection 02', href: '/reflection-2' },
  { label: 'Reflection 03', href: '/reflection-3' },
  { label: 'Reflection 04', href: '/reflection-4' },
]

export function ReflectionNav({ dark = false, current }: { dark?: boolean; current?: string }) {
  return (
    <header className={`reflection-nav ${dark ? 'reflection-nav-dark' : ''}`}>
      <Link href="/" className="reflection-nav-mark">Gabrielle Tatel</Link>
      <span className="reflection-nav-course">CIT.017 <span aria-hidden="true">·</span> Information Security &amp; Assurance</span>
      <nav aria-label="Reflections" className="reflection-nav-links">
        {reflections.map((reflection) => (
          <Link key={reflection.href} href={reflection.href} className="reflection-nav-link" aria-current={reflection.label.endsWith(current ?? '--') ? 'page' : undefined}>
            {reflection.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
