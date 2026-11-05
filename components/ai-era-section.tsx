export default function AiEraSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="display-font text-4xl md:text-5xl text-primary">
              Security in the Age of AI
            </h2>
            <div className="h-1 w-16 bg-accent" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-foreground leading-relaxed text-lg">
            <p>
              As AI systems proliferate, we&apos;ve learned that even the most sophisticated models
              can be tricked. Adversarial inputs, prompt injection, training data poisoning—these are
              the new vulnerabilities. The breach doesn&apos;t always look like a breach. Sometimes it
              looks like a subtle shift in behavior, a change in priorities, a reinterpretation of
              what was once sacred.
            </p>

            <p>
              In human relationships, the same is true. Sometimes heartbreak isn&apos;t a sudden crash;
              it&apos;s a slow drift. A calibration of emotions. Someone gradually treating your data
              less carefully, your secrets becoming less sacred. The model of trust you built together
              begins to produce unexpected outputs.
            </p>

            <div className="bg-card rounded-lg border border-muted p-8 my-8 space-y-4">
              <p className="italic text-muted-foreground">
                &quot;How do you secure what&apos;s increasingly relational, increasingly learned,
                increasingly dependent on context?&quot;
              </p>
              <p className="text-sm text-muted-foreground">
                The answer, perhaps, is that you can&apos;t fully. All you can do is authenticate
                consistently, verify repeatedly, and know when to stop trusting.
              </p>
            </div>

            <p>
              But here&apos;s where love differs from security protocols: systems can be reset,
              reimaged, restored from backup. Hearts can too, in a way. But the damage persists in
              different layers. You become more cautious. You build better firewalls. You learn
              to segment your trust into compartments, hoping that if one is compromised, the others
              survive.
            </p>

            <p>
              Yet vulnerability remains necessary. To feel anything at all, you must leave some port
              open. You must run at least one service that isn&apos;t firewalled off. This is the paradox
              of the human heart: the same openness that allows for connection makes you exploitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
