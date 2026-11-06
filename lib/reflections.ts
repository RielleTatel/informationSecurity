import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export type ReflectionNumber = 1 | 2 | 3 | 4

export type PaperBlock =
  | { type: 'paragraph' | 'quote' | 'statement' | 'subheading'; text: string }
  | { type: 'list'; items: string[] }

const reflections = {
  1: {
    title: 'Backburner',
    subtitle: 'Where Heartbreak Meets Security',
    topic: 'Foundations of Information Security',
    artist: 'NIKI',
    songUrl: 'https://www.youtube.com/watch?v=BBpIV9A1PXc',
    videoId: 'BBpIV9A1PXc',
    description: 'A personal reflection connecting emotional boundaries, the McCumber Cube, and the foundations of information security.',
    theme: 'backburner',
    motif: 'Everything that holds value deserves protection.',
    source: 'CIT.017 lessons on the foundations of Information Security and Assurance, the McCumber Cube, and security principles.',
    previous: { href: '/reflection-4', title: 'Thick And Thin', number: '04' },
    next: { href: '/reflection-2', title: 'Robbers', number: '02' },
  },
  2: {
    title: 'Robbers',
    subtitle: 'Not Every Threat Looks Like a Robber',
    topic: 'Threats to Information Security',
    artist: 'The 1975',
    songUrl: 'https://www.youtube.com/watch?v=Iyy3YOpxL2k',
    videoId: 'wjHgiSx0RNQ',
    description: 'A reflection on the twelve categories of information security threats, human fallibility, and preparing for an imperfect world.',
    theme: 'robbers',
    motif: 'A robber may be obvious. A threat is not.',
    source: 'CIT.017 lessons on threats to information security and the twelve threat categories described in the course materials.',
    previous: { href: '/reflection-1', title: 'Backburner', number: '01' },
    next: { href: '/reflection-3', title: 'Delicate', number: '03' },
  },
  3: {
    title: 'Delicate',
    subtitle: 'Learning What Deserves Protection First',
    topic: 'Risk Assessment',
    artist: 'Taylor Swift',
    songUrl: 'https://www.youtube.com/watch?v=tCXGJQYZ9JA',
    videoId: 'tCXGJQYZ9JA',
    description: 'A reflection on risk assessment, choosing priorities, and caring for what matters when certainty is impossible.',
    theme: 'delicate',
    motif: 'What matters deserves care.',
    source: 'Principles of Information Security — Module 4 Risk Management Reviewer, based on Whitman and Mattord’s Principles of Information Security (7th edition).',
    previous: { href: '/reflection-2', title: 'Robbers', number: '02' },
    next: { href: '/reflection-4', title: 'Thick And Thin', number: '04' },
  },
  4: {
    title: 'Thick And Thin',
    subtitle: 'Learning What It Takes to Keep Systems Dependable',
    topic: 'Information Security Audit Project',
    artist: 'LANY',
    songUrl: 'https://www.youtube.com/watch?v=ZpUxgAXCK2E',
    videoId: 'ZpUxgAXCK2E',
    description: 'A personal reflection on the CITS audit project, the evidence behind its findings, and the work of sustaining dependable services.',
    theme: 'thick-and-thin',
    motif: 'Care is work we keep doing.',
    source: 'CITS InfoSec Audit Report Draft (38-page PDF; assessment period: 11 October–3 November 2026), together with my personal account of the project. Group members: Donald Lee Novo and Resham Qhaleed Kadiri. Background on PHP2Shell (CVE-2026-109618 and CVE-2026-109619) from the PHP Project’s October 2026 security releases and published vendor advisories.',
    previous: { href: '/reflection-3', title: 'Delicate', number: '03' },
    next: { href: '/reflection-1', title: 'Backburner', number: '01' },
  },
} as const

export function getReflection(number: ReflectionNumber) {
  const markdown = readFileSync(
    join(process.cwd(), 'content', 'reflections', `reflection-${number}.md`),
    'utf8',
  )
  // The papers use a title and byline followed by a small, trusted Markdown subset:
  // ## section, ### subheading, > quote, *centred statement*, numbered list, paragraph.
  const blocks = markdown.trim().split(/\n\s*\n/).slice(2)
  const introduction: PaperBlock[] = []
  const sections: { title: string; id: string; blocks: PaperBlock[] }[] = []

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      const title = block.slice(3)
      sections.push({
        title,
        id: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${sections.length + 1}`,
        blocks: [],
      })
    } else {
      const current = sections[sections.length - 1]
      const destination = current ? current.blocks : introduction
      if (block.startsWith('### ')) destination.push({ type: 'subheading', text: block.slice(4) })
      else if (block.startsWith('> ')) destination.push({ type: 'quote', text: block.slice(2) })
      else if (/^\*[^*][\s\S]*\*$/.test(block)) destination.push({ type: 'statement', text: block.slice(1, -1) })
      else if (/^\d+\. /.test(block)) destination.push({ type: 'list', items: block.split('\n').map(line => line.replace(/^\d+\. /, '')) })
      else destination.push({ type: 'paragraph', text: block })
    }
  }

  const wordCount = blocks.filter(block => !block.startsWith('## ')).join(' ').split(/\s+/).filter(Boolean).length

  return {
    ...reflections[number],
    number: String(number).padStart(2, '0'),
    introduction,
    sections,
    wordCount,
    readingMinutes: Math.ceil(wordCount / 200),
  }
}

export type Reflection = ReturnType<typeof getReflection>
