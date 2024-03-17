import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '很多开源项目都很有价值和意义，项目能让我在实践中能够快速提升开发能力，也能够让我短时间内一直专注一件事情。 个人并没有做过太多有一定难度的有价值的项目，但相信将来的我，会沉浸在其中。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的项目
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          很多开源项目都很有价值和意义，项目能让我在实践中能够快速提升开发能力，也能够让我短时间内一直专注一件事情。 个人并没有做过太多有一定难度的有价值的项目，但相信将来的我，会沉浸在其中。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
