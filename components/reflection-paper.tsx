import Link from 'next/link'
import type { ReactNode } from 'react'
import { ReadingProgress } from '@/components/reading-progress'
import { ReflectionNav } from '@/components/reflection-nav'
import { SongPlayer } from '@/components/song-player'
import type { PaperBlock, Reflection } from '@/lib/reflections'

export function ReflectionPaper({ reflection }: { reflection: Reflection }) {
  return reflection.theme === 'robbers' ? <RobbersPaper reflection={reflection} /> : <ThemedPaper reflection={reflection} />
}

const blockText = (block?: PaperBlock) => (block && 'text' in block ? block.text : '')

function Blocks({ blocks }: { blocks: PaperBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === 'subheading') return <h3 key={index}>{block.text}</h3>
    if (block.type === 'statement') return <p key={index} className="paper-statement">{block.text}</p>
    if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>
    if (block.type === 'list') return <ol key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ol>
    return <p key={index}>{block.text}</p>
  })
}

type Segment = { kind: 'blocks'; blocks: PaperBlock[] } | { kind: 'trio'; items: { title: string; blocks: PaperBlock[] }[] }

// Groups runs of "### heading + paragraphs" so Backburner can set the CIA triad as one band.
function segment(blocks: PaperBlock[]): Segment[] {
  const segments: Segment[] = []
  for (const block of blocks) {
    const last = segments[segments.length - 1]
    if (block.type === 'subheading') {
      const item = { title: block.text, blocks: [] }
      if (last?.kind === 'trio') last.items.push(item)
      else segments.push({ kind: 'trio', items: [item] })
    } else if (last?.kind === 'trio' && block.type === 'paragraph' && last.items[last.items.length - 1].blocks.length === 0) {
      last.items[last.items.length - 1].blocks.push(block)
    } else if (last?.kind === 'blocks') {
      last.blocks.push(block)
    } else {
      segments.push({ kind: 'blocks', blocks: [block] })
    }
  }
  return segments
}

function Flame() {
  return (
    <svg className="bb-flame" viewBox="0 0 120 180" aria-hidden="true">
      <defs>
        <linearGradient id="bb-flame-outer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c48a" stopOpacity=".1" />
          <stop offset=".35" stopColor="#e9a35d" />
          <stop offset="1" stopColor="#c4612f" />
        </linearGradient>
        <linearGradient id="bb-flame-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1cf" stopOpacity=".3" />
          <stop offset=".5" stopColor="#ffd99a" />
          <stop offset="1" stopColor="#f3b26a" />
        </linearGradient>
        <linearGradient id="bb-flame-core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd6ff" stopOpacity=".6" />
          <stop offset="1" stopColor="#3d6fb0" />
        </linearGradient>
      </defs>
      <path className="bb-flame-outer" fill="url(#bb-flame-outer)" d="M60 2C66 34 104 62 104 112C104 150 84 176 60 176C36 176 16 150 16 112C16 80 38 60 44 34C50 52 56 58 60 2Z" />
      <path className="bb-flame-inner" fill="url(#bb-flame-inner)" d="M62 50C68 76 90 96 90 126C90 152 76 168 60 168C44 168 30 152 30 128C30 106 46 92 50 74C54 86 58 90 62 50Z" />
      <path className="bb-flame-core" fill="url(#bb-flame-core)" d="M60 112C70 124 76 136 76 148C76 160 69 168 60 168C51 168 44 160 44 148C44 136 50 124 60 112Z" />
    </svg>
  )
}

function closingFor(reflection: Reflection) {
  const last = reflection.sections[reflection.sections.length - 1]
  if (reflection.theme === 'backburner') {
    // "Protect first. Recover later—if you have to." then the final paragraph.
    const [line, note] = last.blocks.slice(-2)
    return { trim: 2, lines: blockText(line).split(/(?<=\.)\s+/), note: blockText(note) }
  }
  const text = blockText(last.blocks[last.blocks.length - 1])
  if (reflection.theme === 'delicate') {
    const [first, ...rest] = text.split(/(?<=\.)\s+/)
    return { trim: 1, lines: [first], note: rest.join(' ') }
  }
  return { trim: 1, lines: [text], note: '' }
}

function ThemedPaper({ reflection }: { reflection: Reflection }) {
  const theme = reflection.theme
  const closing = closingFor(reflection)
  const sections = reflection.sections.map((section, index, all) =>
    index === all.length - 1 ? { ...section, blocks: section.blocks.slice(0, -closing.trim) } : section,
  )
  // Backburner's opening lyric moves into the hero.
  const [firstBlock, ...restIntro] = reflection.introduction
  const lyric = theme === 'backburner' && firstBlock?.type === 'statement' ? firstBlock.text : ''
  const introduction = lyric ? restIntro : reflection.introduction

  let decoration: ReactNode = null
  let title: ReactNode = reflection.title
  if (theme === 'backburner') decoration = <div className="bb-glow" aria-hidden="true" />
  if (theme === 'delicate') {
    decoration = (
      <div className="dl-glass" aria-hidden="true">
        <svg viewBox="0 0 400 300" preserveAspectRatio="none"><polyline points="0,118 92,132 141,104 214,149 268,126 331,171 400,158" /><polyline points="214,149 236,214 229,300" /></svg>
      </div>
    )
  }
  if (theme === 'thick-and-thin') {
    title = <>Thick<br />And Thin</>
  }

  return (
    <main className={`paper paper--${theme}`}>
      <a className="skip-link" href="#reflection-content">Skip to reflection</a>
      <ReadingProgress />
      <ReflectionNav current={reflection.number} />

      <header className="paper-hero">
        {decoration}
        <div className="paper-hero-copy">
          <p className="paper-hero-meta"><span>Reflection {Number(reflection.number)} of 4</span><span>Inspired by {reflection.artist}</span></p>
          {lyric && <p className="paper-lyric">{lyric}</p>}
          <h1>{title}</h1>
          {theme === 'backburner' && <Flame />}
          <p className="paper-subtitle">{reflection.subtitle}</p>
          {theme === 'thick-and-thin' && <div className="tt-lines" aria-hidden="true"><span /><span /></div>}
          <p className="paper-byline">by Gabrielle Tatel<br />{reflection.topic}, {reflection.readingMinutes} min read</p>
        </div>
        <a className="paper-scroll" href="#reflection-content">Start reading</a>
      </header>

      <article id="reflection-content" tabIndex={-1} className="paper-article" aria-label={`${reflection.title}: ${reflection.subtitle}`}>
        <div className="paper-intro"><Blocks blocks={introduction} /></div>

        {theme === 'delicate' && (
          <nav className="dl-thread" aria-label="In this reflection">
            <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
          </nav>
        )}

        {sections.map(section => (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className={`paper-section ${theme === 'thick-and-thin' && section.title === 'Dependability Has to Survive Change' ? 'tt-band' : ''}`}
          >
            {theme === 'thick-and-thin' && <div className="tt-rule" aria-hidden="true"><span /><span /></div>}
            <h2 id={section.id}>{section.title}</h2>
            {theme === 'backburner'
              ? segment(section.blocks).map((part, index) => part.kind === 'trio' ? (
                  <div className="bb-trio" key={index}>
                    {part.items.map(item => (
                      <div key={item.title}>
                        <span className="bb-trio-flame" aria-hidden="true" />
                        <h3>{item.title}</h3>
                        <Blocks blocks={item.blocks} />
                      </div>
                    ))}
                  </div>
                ) : <Blocks key={index} blocks={part.blocks} />)
              : <Blocks blocks={section.blocks} />}
          </section>
        ))}

        <footer className="paper-notes">
          <p>{reflection.source}</p>
          <p><a href={reflection.songUrl} target="_blank" rel="noopener">Open {reflection.title} by {reflection.artist} on YouTube</a></p>
        </footer>
      </article>

      <section className="paper-ending" aria-label="Closing">
        {closing.lines.map(line => <p key={line} className="paper-ending-line">{line}</p>)}
        {closing.note && <p className="paper-ending-note">{closing.note}</p>}
        <p className="paper-thanks">Thank you to {reflection.artist} for &ldquo;{reflection.title}.&rdquo;</p>
        <p className="paper-signoff">Gabrielle Tatel<br />CIT.017 Information Security &amp; Assurance<br />Reflection {reflection.number}</p>
      </section>

      <nav className="paper-next" aria-label="Continue reading">
        <Link href={reflection.previous.href}>← Reflection {reflection.previous.number}: {reflection.previous.title}</Link>
        <Link href={reflection.next.href}>Reflection {reflection.next.number}: {reflection.next.title} →</Link>
      </nav>

      <SongPlayer key={reflection.videoId} title={reflection.title} artist={reflection.artist} videoId={reflection.videoId} />
    </main>
  )
}

function RobbersPaper({ reflection }: { reflection: Reflection }) {
  const [lede, ...intro] = reflection.introduction
  // The last three lines of the final section are the page's closing lines.
  const sections = reflection.sections.map((section, index, all) =>
    index === all.length - 1 ? { ...section, blocks: section.blocks.slice(0, -3) } : section,
  )
  const closing = reflection.sections[reflection.sections.length - 1].blocks.slice(-3)
  const [first, second, third] = closing.map(blockText)

  return (
    <main className="robbers-page">
      <a className="skip-link" href="#reflection-content">Skip to reflection</a>
      <ReadingProgress />
      <ReflectionNav dark current={reflection.number} />

      <header className="robbers-hero">
        <div className="robbers-hero-light" />
        <div className="robbers-hero-copy">
          <div className="robbers-bandline"><span>THE 1975</span><span>LIVE / CIT.017</span><span>TRACK 02</span></div>
          <p className="robbers-kicker">Reflection 02 · CIT.017</p>
          <h1>{reflection.title}</h1>
          <p className="robbers-subtitle">{reflection.subtitle}</p>
          <p className="robbers-lyric">
            &quot;We were never safe, just good at looking normal.<br />
            We held the quiet like a loaded warning.<br />
            Every shadow had a name we couldn&apos;t say.&quot;
          </p>
          <p className="robbers-meta">{reflection.artist}<br />Information Security &amp; Assurance · {reflection.readingMinutes} min read</p>
        </div>
        <a className="robbers-scroll" href="#reflection-content">Read slowly ↓</a>
      </header>

      <article id="reflection-content" tabIndex={-1} className="robbers-article outline-none" aria-label={`${reflection.title}: ${reflection.subtitle}`}>
        {lede.type === 'paragraph' && <p className="robbers-lede">{lede.text}</p>}
        {intro.map((block, index) => block.type === 'quote'
          ? <blockquote key={index}>{block.text}</blockquote>
          : block.type === 'paragraph' ? <p key={index}>{block.text}</p> : null)}

        {sections.map(section => {
          const list = section.blocks.find(block => block.type === 'list')
          if (list?.type === 'list') {
            const text = section.blocks.find(block => block.type === 'paragraph')
            return (
              <section className="robbers-threats" key={section.id} aria-labelledby={section.id}>
                <p className="robbers-kicker">A field guide to uncertainty</p>
                <h2 id={section.id}>{section.title}</h2>
                {text?.type === 'paragraph' && <p className="robbers-threat-intro">{text.text}</p>}
                <ol>{list.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol>
              </section>
            )
          }
          return (
            <section className="robbers-section" key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.blocks.map((block, index) => block.type === 'paragraph' ? <p key={index}>{block.text}</p> : null)}
            </section>
          )
        })}
      </article>

      <section className="robbers-ending">
        <p>{first}</p>
        <p>{second}</p>
        <span>{third}</span>
        <div className="robbers-signoff">Gabrielle Tatel<br />CIT.017 — Information Security &amp; Assurance<br />Reflection 02</div>
      </section>
      <nav className="robbers-next" aria-label="Continue reading">
        <Link href={reflection.previous.href}>← Reflection {reflection.previous.number}: {reflection.previous.title}</Link>
        <Link href={reflection.next.href}>Reflection {reflection.next.number}: {reflection.next.title} →</Link>
      </nav>

      <SongPlayer key={reflection.videoId} title={reflection.title} artist={reflection.artist} videoId={reflection.videoId} />
    </main>
  )
}
