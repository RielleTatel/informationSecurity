import Link from 'next/link'
import { ReflectionNav } from '@/components/reflection-nav'

export function ComingSoon({ number }: { number: string }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ReflectionNav />
      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Reflection {number}</p>
        <h1 className="mt-6 font-cormorant text-6xl font-semibold">Coming soon.</h1>
        <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">Another world is taking shape. Return to the journal when it is ready.</p>
        <Link href="/reflection-1" className="mt-10 border-b border-primary pb-1 text-sm text-primary">Read Reflection 01</Link>
      </section>
    </main>
  )
}
