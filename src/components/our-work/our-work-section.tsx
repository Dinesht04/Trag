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
      title: "QuizVerse",
      href: "https://quizverse-sigma.vercel.app/",
      imageSrc: "/quizverse.png",
      imageAlt: "Quizverse hero",
    },
    {
      title: "Portfolio",
      href: "https://pranshuraj.info",
      imageSrc: "/portfolio.png",
      imageAlt: "Portfolio hero",
    },
    {
      title: "Store Page",
      href: "https://www.krinuh.com/",
      imageSrc: "/p1.png",
      imageAlt: "Krinuh Hero",
    }
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
            className={index === 2 ? "sm:col-span-2" : ""}
            />
        ))}
      </div>
    </section>
  )
}
