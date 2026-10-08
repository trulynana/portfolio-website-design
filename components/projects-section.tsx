import { ArrowUpRight, Code2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/site'

function ProjectLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {icon}
      {label}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="size-2 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
      <p className="flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 border-t border-border pt-4">
        {project.liveUrl && (
          <ProjectLink
            href={project.liveUrl}
            label="Live demo"
            icon={<ArrowUpRight className="size-4" aria-hidden="true" />}
          />
        )}
        {project.repoUrl && (
          <ProjectLink
            href={project.repoUrl}
            label="Source code"
            icon={<Code2 className="size-4" aria-hidden="true" />}
          />
        )}
      </div>
    </li>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-20"
    >
      <SectionHeading id="projects-heading" index="03" title="Selected Projects" />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </ul>
    </section>
  )
}
