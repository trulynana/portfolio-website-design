import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { education, type Degree } from '@/lib/site'

function DegreeCard({ item }: { item: Degree }) {
  const inProgress = item.status === 'In progress'
  return (
    <li className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start md:p-8">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
        <GraduationCap className="size-6" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-card-foreground text-balance">{item.degree}</h3>
          <span
            className={
              inProgress
                ? 'rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground'
                : 'rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground'
            }
          >
            {item.status}
          </span>
        </div>
        <p className="text-muted-foreground">
          <span className="font-medium text-card-foreground">{item.school}</span>
          {' · '}
          {item.location}
        </p>
        <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
        <p className="leading-relaxed text-muted-foreground">{item.description}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View program details
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </li>
  )
}

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-5xl px-6 py-20"
    >
      <SectionHeading id="education-heading" index="02" title="Education" />
      <ul className="flex flex-col gap-6">
        {education.map((item) => (
          <DegreeCard key={item.degree} item={item} />
        ))}
      </ul>
    </section>
  )
}
