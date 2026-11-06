import Link from 'next/link'

const reflections = [
  { number: '01', title: 'Backburner', href: '/reflection-1' },
  { number: '02', title: 'Robbers', href: '/reflection-2' },
  { number: '03', title: 'Delicate', href: '/reflection-3' },
  { number: '04', title: 'Thick And Thin', href: '/reflection-4' },
]

export function ReflectionNav({ dark = false, current }: { dark?: boolean; current?: string }) {
  return (
    <header className={`reflection-nav ${dark ? 'reflection-nav-dark' : ''}`}>
      <Link href="/" className="reflection-nav-mark">Gabrielle Tatel</Link>
      <span className="reflection-nav-course">CIT.017 <span aria-hidden="true">·</span> Information Security &amp; Assurance</span>
      <nav aria-label="Reflections" className="reflection-nav-links">
        {reflections.map(reflection => (
          <Link
            key={reflection.href}
            href={reflection.href}
            className="reflection-nav-link"
            title={reflection.title}
            aria-label={`Reflection ${reflection.number}: ${reflection.title}`}
            aria-current={reflection.number === current ? 'page' : undefined}
          >
            <span className="reflection-nav-word">Reflection </span>{reflection.number}
          </Link>
        ))}
      </nav>
    </header>
  )
}
