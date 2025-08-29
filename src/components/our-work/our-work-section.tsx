import { OurWorkCard, type OurWorkCardProps } from "./our-work-card"

type OurWorkSectionProps = {
  title?: string
  subtitle?: string
  items?: OurWorkCardProps[]
  className?: string
}

/**
 * OurWorkSection
 * - Responsive grid of OurWorkCard tiles
 * - Pass custom items or rely on sample defaults
 */
export function OurWorkSection({
  title = "See our Work",
  subtitle = "Confused about us?",
  items,
  className,
}: OurWorkSectionProps) {
  const samples: OurWorkCardProps[] = items ?? [
    {
      title: "sprint",
      href: "/projects/sprint",
      imageSrc: "/project.png",
      imageAlt: "Sprint project with green gradient",
    },
    {
      title: "Showcase Grid",
      href: "/projects/showcase-grid",
      imageSrc: "/project.png",
      imageAlt: "Grid of showcased projects",
    },
    {
      title: "Architecture",
      href: "/projects/architecture",
      imageSrc: "/project.png",
      imageAlt: "Abstract red architectural blocks",
    },
    {
    title: "sdsadsa",
    href: "/projects/sprint",
    imageSrc: "/project.png",
    imageAlt: "Sprint project with green gradient",
  },
  {
    title: "idks",
    href: "/projects/showcase-grid",
    imageSrc: "/project.png",
    imageAlt: "Grid of showcased projects",
  },
  ]

  return (
    <section
      aria-labelledby="our-work-heading"
      className={["mx-auto max-w-6xl px-4 py-12", className].filter(Boolean).join(" ")}
    >
      <header className="mb-8 text-center">
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <h2 id="our-work-heading" className="mt-1 text-3xl font-semibold text-balance">
          {title}
        </h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {samples.map((item, index) => (
            <OurWorkCard
            key={item.title}
            {...item}
            className={index === 4 ? "sm:col-span-2" : ""}
            />
        ))}
      </div>
    </section>
  )
}
