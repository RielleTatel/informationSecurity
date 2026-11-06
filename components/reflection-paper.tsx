import Link from 'next/link'
import { ReflectionNav } from '@/components/reflection-nav'
import { SongPlayer } from '@/components/song-player'
import type { PaperBlock, Reflection } from '@/lib/reflections'
import styles from './reflection-paper.module.css'

function PaperBlocks({ blocks }: { blocks: PaperBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === 'list') return <ol className={styles.threats} key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ol>
    if (block.type === 'subheading') return <h3 key={index}>{block.text}</h3>
    if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>
    return <p key={index}>{block.text}</p>
  })
}

export function ReflectionPaper({ reflection }: { reflection: Reflection }) {
  return (
    <div className={`${styles.page} ${styles[reflection.theme]}`}>
      <a className={styles.skipLink} href="#reflection-content">Skip to reflection</a>
      <ReflectionNav current={reflection.number} />
      <main>
        <header className={styles.hero}>
          <div className={styles.sleeveMark} aria-hidden="true" />
          <div className={styles.heroContent}>
            <div className={styles.trackLine}>
              <span>Reflection {Number(reflection.number)} of 4</span>
              <span>Inspired by {reflection.artist}</span>
            </div>
            <h1>{reflection.title === 'Thick And Thin' ? <>Thick<span> And Thin</span></> : reflection.title}</h1>
            <div className={styles.heroBottom}>
              <div>
                <p className={styles.subtitle}>{reflection.subtitle}</p>
                <p className={styles.topic}>{reflection.topic}</p>
              </div>
              <a className={styles.readLink} href="#reflection-content">Start reading <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </header>

        <div className={styles.byline}>
          <span>Written by <strong>Gabrielle Tatel</strong></span>
          <span>{reflection.readingMinutes} minute read <span className={styles.wordCount}>/ {reflection.wordCount.toLocaleString('en-US')} words</span></span>
        </div>

        <div className={styles.readingLayout}>
          <aside className={styles.rail} aria-label="Listening and reading tools">
            <SongPlayer key={reflection.videoId} title={reflection.title} artist={reflection.artist} videoId={reflection.videoId} />
            <details className={styles.contents}>
              <summary>In this reflection</summary>
              <nav aria-label="In this reflection">
                <ul>{reflection.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
              </nav>
            </details>
          </aside>

          <article id="reflection-content" className={styles.article} aria-label={`${reflection.title}: ${reflection.subtitle}`} tabIndex={-1}>
            <div className={styles.introduction}><PaperBlocks blocks={reflection.introduction} /></div>
            {reflection.sections.map(section => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                <PaperBlocks blocks={section.blocks} />
              </section>
            ))}
            <footer className={styles.notes}>
              <h2>Reading &amp; listening notes</h2>
              <p>{reflection.source}</p>
              <p>Musical inspiration: <a href={reflection.songUrl} target="_blank" rel="noopener">{reflection.title} by {reflection.artist}</a>. The connection to information security is my own interpretation.</p>
            </footer>
          </article>
        </div>

        <footer className={styles.ending}>
          <p className={styles.closing}>{reflection.motif}</p>
          <p>Gabrielle Tatel</p>
          <span>CIT.017 — Information Security &amp; Assurance</span>
        </footer>
        <nav className={styles.pagination} aria-label="Continue reading">
          <Link href={reflection.previous.href}>
            <span>{reflection.number === '01' ? 'The final reflection' : 'Previous reflection'}</span>
            <strong>{reflection.previous.title}</strong>
          </Link>
          <Link href={reflection.next.href}>
            <span>{reflection.number === '04' ? 'Back to the beginning' : 'Next reflection'}</span>
            <strong>{reflection.next.title}</strong>
          </Link>
        </nav>
      </main>
    </div>
  )
}
