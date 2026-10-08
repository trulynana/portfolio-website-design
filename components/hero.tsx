import Image from 'next/image'
import { ArrowUpRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-3xl rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col-reverse gap-12 px-6 pt-24 pb-20 md:flex-row md:items-center md:pt-32 md:pb-28">
      <div className="flex flex-1 flex-col gap-8">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          Open to opportunities
        </p>
        <div className="flex flex-col gap-4">
          <h1
            id="hero-heading"
            className="text-5xl font-semibold tracking-tight text-balance md:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="text-2xl font-medium text-primary md:text-3xl">{profile.role}</p>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I build reliable, end-to-end web applications — from thoughtful interfaces to
          scalable APIs and data layers. Currently pursuing a Master of Science in Software
          Engineering Systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
          >
            <Mail aria-hidden="true" />
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5 text-base')}
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
        <div className="shrink-0">
          <div className="relative size-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg ring-1 ring-border md:size-64">
            <Image
              src="/images/nana-sarpong.jpg"
              alt="Portrait of Nana Sarpong"
              fill
              priority
              sizes="(min-width: 768px) 256px, 160px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
