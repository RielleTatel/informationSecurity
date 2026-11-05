export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-card via-background to-background overflow-hidden">
      {/* Film grain effect */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12 animate-fade-in">
        {/* Main quote */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic font-light">
            &quot;I&apos;m on the backburner&quot;
          </p>
          <h1 className="display-font text-5xl md:text-7xl text-primary leading-tight">
            Backburner
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            Where Heartbreak Meets Security
          </p>
        </div>

        {/* Artist credit with handwritten style */}
        <div className="space-y-4 pt-8">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Inspired by NIKI
          </p>
          <p className="handwritten text-2xl md:text-3xl text-accent">
            A philosophical exploration
          </p>
        </div>

        {/* Subtle separator */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
          <div className="text-muted-foreground text-xs">•</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Scroll to explore</p>
          <div className="flex justify-center">
            <svg
              className="w-4 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
