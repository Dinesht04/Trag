import Link from "next/link"
import { cn } from "@/lib/utils"
import { LucideArrowUpRightFromSquare } from "lucide-react"

export type OurWorkCardProps = {
  title: string
  href: string
  imageSrc: string
  imageAlt?: string
  className?: string
}

/**
 * OurWorkCard
 * - Rounded image tile
 * - Image starts slightly zoomed-in, then "zooms out" on hover/focus
 * - Glassy bottom bar slides up on hover/focus with title (left) and a "View Project ↗" pill (right)
 * - Entire tile is a single accessible link (no nested interactive elements)
 */
export function OurWorkCard({ title, href, imageSrc, imageAlt = "Project thumbnail", className }: OurWorkCardProps) {
  return (
    <Link
      href={href}
      aria-label={`View project: ${title}`}
      className={cn(
        "group relative block overflow-hidden rounded-3xl",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Image: initially zoomed-in; hover/focus zooms it out */}
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={imageAlt}
        className={cn(
          "h-80 w-full object-cover",
          "will-change-transform transition-transform duration-700 ease-out",
          "scale-110 group-hover:scale-100 group-focus-visible:scale-100",
          "motion-reduce:transition-none motion-reduce:transform-none",
        )}
      />

      {/* Glassy bottom bar */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-3 bottom-3",
          "translate-y-4 opacity-0 transition-all duration-500 ease-out",
          "group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
          "motion-reduce:transition-none",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-full border px-3 py-2 backdrop-blur-md shadow-md",
            // Glass look with light/dark variants
            "bg-white/60 border-white/30",
            "dark:bg-neutral-900/50 dark:border-white/10",
          )}
        >
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
          {/* Styled as a pill; not a separate interactive element to avoid nested links */}
          <span
            className={cn(
              "ml-3 inline-flex items-center rounded-full px-3 py-3 text-xs font-medium shadow-sm",
              "bg-white text-gray-900",
              "dark:bg-neutral-800 dark:text-gray-100",
            )}
          >
            View Project{" "}
            <span aria-hidden className="ml-1">
              <LucideArrowUpRightFromSquare/>
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}
