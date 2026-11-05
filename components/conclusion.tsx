export default function Conclusion() {
  return (
    <section className="py-24 px-6 bg-card border-t border-muted">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          {/* Main closing */}
          <div className="space-y-8 text-center">
            <h2 className="display-font text-4xl md:text-5xl text-primary">
              Backburner
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                I&apos;m still on the backburner. Not deleted. Not fully lost. Just waiting.
              </p>

              <p className="italic text-muted-foreground">
                &quot;I&apos;m on the backburner, and you&apos;re cooking something new.&quot;
              </p>

              <p>
                There&apos;s a metaphor here about systems and entropy, about data degradation and the
                half-life of memories. But mostly there&apos;s just this: the honest observation that
                sometimes we&apos;re not deleted from someone&apos;s life, we&apos;re just deprioritized.
                We exist in a queue of tasks that never get executed. We take up space but not bandwidth.
              </p>

              <p>
                And if information security has taught me anything, it&apos;s that systems left running
                but unattended eventually fail. Queued items eventually time out. Deprecated systems
                eventually get deprecated further. And at some point, you&apos;re not even on the
                backburner anymore. You&apos;ve been garbage collected entirely.
              </p>
            </div>
          </div>

          {/* Closing reflection */}
          <div className="pt-12 border-t border-muted">
            <div className="space-y-6">
              <p className="text-center text-muted-foreground text-sm uppercase tracking-widest">
                Final Protocol
              </p>

              <p className="text-center text-foreground leading-relaxed">
                So here&apos;s what I&apos;ve learned: Love requires the same care that cybersecurity demands.
                Consistent verification. Regular audits. Honest assessments of trust levels. But unlike
                security systems, it also requires a willingness to be broken. To share privileges. To
                run services that aren&apos;t completely firewalled.
              </p>

              <p className="text-center text-foreground leading-relaxed">
                The heartbreak comes not from being exploited by a malicious actor, but from realizing
                that someone you trusted with administrative access has simply stopped maintaining the
                system. They&apos;ve let it degrade. They&apos;ve left you running but forgotten about you.
              </p>

              <p className="text-center text-foreground leading-relaxed">
                And that&apos;s a kind of breach too.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 text-center border-t border-muted">
            <p className="handwritten text-2xl text-accent mb-4">With gratitude to NIKI</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              For the lyrics that made me think about heartbreak differently
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
