'use client'

import { useEffect, useState } from 'react'
import { ReflectionNav } from '@/components/reflection-nav'

export function Essay() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reading time estimation: ~200 words per minute
  const wordCount = 3200
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReflectionNav />
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-2xl text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="font-cormorant text-7xl font-bold tracking-tight">
              Backburner
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-muted-foreground">by Gabrielle Tatel</p>
            <p className="text-sm text-muted-foreground">
              {readingTime} min read
            </p>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-border animate-bounce-subtle" />
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Essay Content */}
      <article className="max-w-2xl mx-auto px-4 py-16 space-y-8">
        {/* Opening Paragraph */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            "And now you&apos;re sounding like a hurt puppy<br />
            You look ugly when you cry<br />
            But I&apos;m the one you think to call<br />
            How do you feel lucky and appalled at the same time...""
          </p>

          <p className="text-lg leading-relaxed">
            <span className="drop-cap">A</span>
            t first glance, heartbreak and Information Security and Assurance seem to have absolutely nothing to do with one another. One talks about emotions and relationships, while the other discusses cyberattacks, encryption, authentication, and security frameworks. Yet the more I reflected on our lessons, the more I realized that they are built upon the same fundamental idea.
          </p>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            Everything that holds value deserves protection.
          </p>

          <p className="text-lg leading-relaxed">
            Whether it is an organization&apos;s confidential database, a university&apos;s student records, a company&apos;s financial transactions, or even a person&apos;s emotions, the existence of value naturally creates the possibility of loss. Information security exists because information is valuable. Likewise, people learn to protect themselves because emotions, relationships, and trust are equally valuable. We only begin thinking about security after realizing that something important can be taken away from us.
          </p>
        </section>

        <div className="h-px bg-border" />

        {/* The McCumber Cube Section */}
        <section className="space-y-6">
          <h2 className="font-cormorant text-4xl font-bold">The McCumber Cube</h2>

          <p className="text-lg leading-relaxed">
            During our first few meetings in CIT.017, we were introduced to the foundations of Information Security and Assurance. One of the concepts that stood out to me was the McCumber Cube, a framework that explains how information security is much more than simply preventing hackers from breaking into systems. Instead, organizations must simultaneously consider the goals they want to protect, confidentiality, integrity, and availability, the different states in which information exists, and the safeguards needed to secure it. Rather than treating security as a single solution, the framework presents it as a balance of multiple interconnected dimensions that work together to protect valuable information.
          </p>

          <p className="text-lg leading-relaxed">
            Initially, I viewed these principles purely from the perspective of software engineering. Whenever we build information systems, we naturally think about protecting databases, securing sensitive information, and preventing unauthorized access. Organizations rely heavily on information as one of their most valuable assets, making security an essential part of software development rather than an optional feature.
          </p>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            However, after reflecting on these lessons, I realized that these principles extend far beyond technology.
          </p>
        </section>

        <div className="h-px bg-border" />

        {/* Personal Security Principles */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold">Confidentiality</h3>
            <p className="text-lg leading-relaxed">
              If confidentiality means limiting access to sensitive information, perhaps life also requires knowing who deserves access to our thoughts, emotions, and vulnerabilities. Not everyone should have unrestricted access to the parts of ourselves that matter most.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold">Integrity</h3>
            <p className="text-lg leading-relaxed">
              If integrity is about ensuring that information remains accurate and unaltered, then perhaps personal integrity is about preserving our values despite outside pressures. Just as corrupted data becomes unreliable, people who constantly compromise their principles eventually lose the authenticity that defines them.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold">Availability</h3>
            <p className="text-lg leading-relaxed">
              Availability also carries an interesting parallel. In information systems, data should remain accessible to authorized users whenever it is needed. In our personal lives, being emotionally available is equally important, but availability without boundaries can become dangerous. Making yourself available to everyone all the time eventually exhausts the very resources you&apos;re trying to protect.
            </p>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* Pull Quote */}
        <blockquote className="pull-quote py-8 px-6 border-l-4 border-primary italic text-center">
          <p className="font-playfair text-2xl text-foreground">
            Perhaps if I had understood these principles earlier—not as cybersecurity concepts, but as life principles, I could have protected my own heart a little better.
          </p>
        </blockquote>

        <div className="h-px bg-border" />

        {/* Security Foundation Paragraph */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            Security, after all, is not built after something has already been compromised. Good security is designed before the attack ever happens.
          </p>
        </section>

        <div className="h-px bg-border" />

        {/* AI Era Section */}
        <section className="space-y-6">
          <h2 className="font-cormorant text-4xl font-bold">The Age of Artificial Intelligence</h2>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            This realization becomes even more relevant in today&apos;s technological landscape.
          </p>

          <p className="text-lg leading-relaxed">
            Artificial intelligence has fundamentally changed the way software is developed and the way cyberattacks are executed. Tasks that previously required extensive technical expertise can now be generated within seconds through AI. Attackers are no longer limited to manually writing phishing emails, malware, or distributed denial-of-service (DDoS) scripts. AI has lowered the barrier to entry, making sophisticated attacks more accessible while simultaneously increasing their scale and speed.
          </p>

          <p className="text-lg leading-relaxed">
            Ironically, AI has also become one of our strongest defensive tools. Security analysts now use machine learning to detect anomalies, identify malicious network behavior, automate incident response, and discover vulnerabilities before attackers exploit them. We have entered an era where both attackers and defenders possess increasingly intelligent tools. The competition is no longer simply human versus human, it is becoming AI-assisted attackers versus AI-assisted defenders.
          </p>
        </section>

        <div className="h-px bg-border" />

        {/* Modern Security Principles */}
        <section className="space-y-6">
          <h2 className="font-cormorant text-4xl font-bold">Why Principles Matter Now</h2>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            This is why I believe the principles discussed in class are becoming more important than ever.
          </p>

          <p className="text-lg leading-relaxed">
            Technology evolves at an extraordinary pace, but the principles behind security remain remarkably consistent. The Principle of Least Privilege teaches us that users should only possess the permissions they truly need. In an age where countless applications request unnecessary access to our contacts, cameras, microphones, and personal data, this principle extends beyond software architecture. It becomes a philosophy for protecting privacy itself. Just because an application requests access does not mean it deserves it.
          </p>

          <p className="text-lg leading-relaxed">
            Defense in Depth is equally relevant outside cybersecurity. We often assume that a single password or one antivirus application is enough to keep us safe. In reality, effective security comes from layers. Strong passwords, multi-factor authentication, encrypted communications, regular backups, security awareness, and responsible online behavior all complement one another. Likewise, people build resilience through multiple layers: supportive relationships, healthy habits, critical thinking, and emotional boundaries. No single safeguard is ever sufficient on its own.
          </p>

          <p className="text-lg leading-relaxed">
            Perhaps the principle that resonated with me the most is Security by Design. We were taught that security should never be added as an afterthought after the system has already been built. Instead, it should be incorporated from the very beginning of development.
          </p>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            I think this applies equally to life.
          </p>

          <p className="text-lg leading-relaxed">
            People often attempt to repair damage only after trust has been broken, privacy has been violated, or mistakes have already been made. But prevention will almost always be less costly than recovery. Whether we&apos;re building software, protecting organizations, or navigating relationships, it is wiser to establish healthy boundaries and sound practices from the beginning than to repair what could have been prevented.
          </p>
        </section>

        <div className="h-px bg-border" />

        {/* Final Reflection */}
        <section className="space-y-6">
          <h2 className="font-cormorant text-4xl font-bold">What It All Means</h2>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            Perhaps that is what Information Security and Assurance is truly about.
          </p>

          <p className="text-lg leading-relaxed">
            It is not merely the study of firewalls, encryption algorithms, authentication protocols, or security frameworks. It is the discipline of understanding what we value and intentionally designing systems that preserve those values despite uncertainty, failure, or malicious intent.
          </p>

          <p className="text-lg leading-relaxed font-semibold italic text-primary text-center py-6">
            Maybe that&apos;s why the lyrics from Backburner remind me of this course.
          </p>

          <p className="text-lg leading-relaxed">
            The song is ultimately about someone who failed to protect what mattered until it was already slipping away.
          </p>

          <p className="text-lg leading-relaxed">
            Information Security teaches us to do the opposite.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-primary text-center py-6">
            Protect first. Recover later—if you have to.
          </p>

          <p className="text-lg leading-relaxed">
            Because whether we are safeguarding databases, organizations, or even our own hearts, the cost of prevention will almost always be smaller than the cost of rebuilding what has already been lost.
          </p>
        </section>

        {/* Closing Metadata */}
        <div className="pt-16 text-center space-y-4 border-t border-border mt-16">
          <div className="handwritten text-lg text-primary opacity-80 pt-8">
            Thank you to NIKI for &quot;Backburner.&quot;
          </div>
          <p className="text-sm text-muted-foreground">
            Gabrielle Tatel<br />
            BS Computer Science<br />
            Information Security &amp; Assurance
          </p>
        </div>
      </article>

      {/* Spacer */}
      <div className="h-32" />
    </div>
  )
}
