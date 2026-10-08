import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-5xl px-6 py-20"
    >
      <SectionHeading id="education-heading" index="02" title="Education" />
      <article className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start md:p-8">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
          <GraduationCap className="size-6" aria-hidden="true" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-semibold text-card-foreground">
              Master of Science in Software Engineering Systems
            </h3>
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              In progress
            </span>
          </div>
          <p className="text-muted-foreground">Northeastern University</p>
          <p className="leading-relaxed text-muted-foreground">
            Graduate coursework focused on software architecture, scalable systems design, and
            modern engineering practices.
          </p>
        </div>
      </article>
    </section>
  )
}
