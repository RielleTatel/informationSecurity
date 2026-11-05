export default function SecurityConcepts() {
  const concepts = [
    {
      title: "The McCumber Cube",
      subtitle: "Information States",
      description:
        "In cybersecurity, the McCumber Cube maps information through three dimensions: transmission, storage, and processing. In love, we exist in all three states simultaneously. When someone has your heart, they hold you in transmission (the vulnerability of being known), in storage (the permanence of impact), and in processing (the constant recalibration of who you are after them).",
      accent: "c8956f",
    },
    {
      title: "The CIA Triad",
      subtitle: "Confidentiality, Integrity, Availability",
      description:
        "Confidentiality: What you share only with them. Integrity: That nothing about your feelings will be altered without consent. Availability: Being there when needed. When any of these is compromised, the entire system becomes unstable. A breach of confidentiality means your secrets are no longer yours. A breach of integrity means your emotions become suspect. A loss of availability means you can&apos;t access the person you trusted.",
      accent: "d4a574",
    },
    {
      title: "Principle of Least Privilege",
      subtitle: "Trust Minimally",
      description:
        "Users should have the minimum access necessary. In relationships, this means sharing information gradually, verifying trust incrementally, ensuring that access levels match commitment levels. When someone gains more privilege than they&apos;ve earned, the system becomes fragile. When they abuse that privilege, you learn too late that you granted them root access to your heart.",
      accent: "e8d5c4",
    },
    {
      title: "Zero Trust Architecture",
      subtitle: "Verify Everything, Trust Nothing",
      description:
        "In cybersecurity, zero trust means never automatically trusting anyone, even if they&apos;re inside the network. In love, this would be paranoia. But there&apos;s wisdom here: consistent verification, repeated affirmation, never assuming that yesterday&apos;s trust extends infinitely into tomorrow. Trust is a continuous action, not a past tense state.",
      accent: "d9ccc0",
    },
    {
      title: "Backburner State",
      subtitle: "Unresolved Data",
      description:
        "In systems, something on the backburner is queued, waiting for processing. Neither deleted nor permanently integrated. In heartbreak, you&apos;re the notification that never fires, the cache that never clears. You exist in the margins, taking up space but not being acted upon. Still indexed, still searchable, still somehow taking up memory.",
      accent: "c8956f",
    },
  ]

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="space-y-4 pb-12 border-b border-muted">
            <h2 className="display-font text-4xl md:text-5xl text-primary">
              Security Frameworks as Metaphor
            </h2>
            <p className="text-lg text-muted-foreground italic">
              What information security teaches us about the human heart
            </p>
          </div>

          {/* Concepts grid */}
          <div className="space-y-8">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="group rounded-lg border border-muted hover:border-accent transition-colors overflow-hidden"
              >
                {/* Header with accent */}
                <div
                  className="h-1 w-full transition-all group-hover:h-2"
                  style={{ backgroundColor: `#${concept.accent}` }}
                />

                <div className="p-8 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {concept.subtitle}
                    </p>
                    <h3 className="display-font text-3xl text-foreground">
                      {concept.title}
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed text-foreground">
                    {concept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
