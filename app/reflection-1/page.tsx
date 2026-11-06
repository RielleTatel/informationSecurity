import type { Metadata } from 'next'
import { ReflectionPaper } from '@/components/reflection-paper'
import { getReflection } from '@/lib/reflections'

const reflection = getReflection(1)

export const metadata: Metadata = {
  title: `${reflection.title}: ${reflection.subtitle} | Gabrielle Tatel`,
  description: reflection.description,
}

export default function ReflectionOnePage() {
  return <ReflectionPaper reflection={reflection} />
}
