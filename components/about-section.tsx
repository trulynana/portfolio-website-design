import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/site'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading id="about-heading" index="01" title="About" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {"I'm a Full Stack Engineer who enjoys turning complex problems into clean, usable products. I care about the whole stack — crafting accessible front ends, designing well-structured APIs, and building systems that are easy to maintain and scale."}
          </p>
          <p>
            {"Alongside my work, I'm deepening my foundations in software architecture, distributed systems, and engineering practices through graduate study."}
          </p>
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-4 font-mono text-sm text-foreground">Tools I work with</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-card-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
