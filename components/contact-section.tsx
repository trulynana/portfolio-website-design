import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading id="contact-heading" index="04" title="Contact" />
      <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
        <p className="max-w-xl text-2xl font-semibold tracking-tight text-balance md:text-3xl">
          {"Let's build something great together."}
        </p>
        <p className="mt-3 max-w-xl leading-relaxed opacity-90">
          {"Whether you have a role, a project, or just want to connect — my inbox is open."}
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 outline-none transition-colors hover:bg-primary-foreground/20 focus-visible:ring-3 focus-visible:ring-primary-foreground/60"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span className="flex min-w-0 flex-col">
                <span className="text-sm opacity-80">Email</span>
                <span className="truncate font-medium">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 outline-none transition-colors hover:bg-primary-foreground/20 focus-visible:ring-3 focus-visible:ring-primary-foreground/60"
            >
              <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
              <span className="flex min-w-0 flex-col">
                <span className="text-sm opacity-80">LinkedIn</span>
                <span className="truncate font-medium">in/nana-sarpong</span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 outline-none transition-colors hover:bg-primary-foreground/20 focus-visible:ring-3 focus-visible:ring-primary-foreground/60"
            >
              <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
              <span className="flex min-w-0 flex-col">
                <span className="text-sm opacity-80">GitHub</span>
                <span className="truncate font-medium">github.com/trulynana</span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
