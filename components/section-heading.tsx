export function SectionHeading({
  id,
  index,
  title,
}: {
  id: string
  index: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary" aria-hidden="true">
        {index}
      </span>
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
