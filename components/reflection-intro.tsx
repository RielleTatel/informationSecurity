export default function ReflectionIntro() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="display-font text-4xl md:text-5xl text-primary">
              A Reflection on Heartbreak and Security
            </h2>
            <div className="h-1 w-16 bg-accent" />
          </div>

          {/* Opening passage */}
          <p className="text-lg leading-relaxed text-foreground">
            What happens when we apply the language of information security to the human heart?
          </p>

          {/* Main reflection */}
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              &quot;If a system can&apos;t be accessed without authorization, it can&apos;t be breached.&quot;
              So I built walls. Firewalls at first—the kind you can see coming. Passwords and encryption,
              authentication in layers. But heartbreak isn&apos;t a hacker with malicious intent; it&apos;s
              a vulnerability you didn&apos;t know existed.
            </p>

            <p>
              The heart operates on a different protocol than the mind. While logic demands segmentation
              and compartmentalization, the heart insists on integration. It wants to be whole, connected,
              vulnerable to the right person. But being vulnerable means being breakable. It means trusting
              someone with your data, your secrets, your system integrity.
            </p>

            <p>
              When that trust is violated, when someone exploits the access you gave them, the damage
              isn&apos;t just to your security perimeter. It&apos;s systemic. It&apos;s corrosive. It ripples
              through every authentication layer you&apos;ve ever built.
            </p>

            <p className="italic text-muted-foreground">
              &quot;I&apos;m on the backburner.&quot; Not deleted. Not fully terminated. Just sitting
              somewhere in the queue, waiting to be processed, wondering if you&apos;ll ever come back
              to retrieve this data.
            </p>
          </div>

          {/* Transition statement */}
          <div className="pt-8 border-t border-muted">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              Where security frameworks become poetry
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
