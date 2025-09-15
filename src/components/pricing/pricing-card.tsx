"use client"

import { Check, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"
import { ContactModal } from "../contact-modal"

type Feature = { label: string }

export type PricingCardProps = {
  tone: "dark" | "light"
  title: string
  highlight?: string
  icon?: "globe" | "sparkles"
  blurb: string
  basePrice: number
  fastPrice: number
  cadence: string
  footnote?: string
  features: Feature[]
  hideSwitch?: boolean
}

function CardIcon({ icon }: { icon?: "globe" | "sparkles" }) {
  if (icon === "globe") return <Globe className="h-5 w-5" aria-hidden="true" />
  if (icon === "sparkles") return <Sparkles className="h-5 w-5" aria-hidden="true" />
  return null
}

export function PricingCard({
  tone,
  title,
  highlight,
  icon,
  blurb,
  basePrice,
  fastPrice,
  cadence,
  footnote,
  features,
  hideSwitch
}: PricingCardProps) {
  const [fast, setFast] = useState(tone === "dark")
  const isDark = tone === "dark"
  const currentPrice = fast ? fastPrice : basePrice
  const [isBookHovered, setIsBookHovered] = useState(false)
  const [isTelegramHovered, setIsTelegramHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <>
    <section
      className={cn(
        "flex flex-col justify-between rounded-3xl p-4 sm:p-6",
        "ring-1 ring-black/10 transition-shadow",
        isDark
          ? "bg-black text-white shadow-[0_16px_60px_-12px_rgba(0,0,0,0.6)]"
          : "bg-white text-black shadow-[0_16px_60px_-18px_rgba(0,0,0,0.25)]",
      )}
      aria-label={`${title} pricing card`}
    >
      {/* Header */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-full",
                isDark ? "bg-white/10" : "bg-black/5",
              )}
              aria-hidden="true"
            >
              <CardIcon icon={icon} />
            </span>
            <h3 className="text-pretty text-2xl font-semibold md:text-3xl">
              {title}{" "}
              {/* MODIFICATION: Added '&& fast' to only show highlight when the toggle is on */}
              {highlight && fast ? <span className="text-emerald-500">{highlight}</span> : null}
            </h3>
          </div>
          
          {hideSwitch ? null : (
            <div className="flex items-center gap-2">
            <span className={cn("text-sm", isDark ? "text-white/70" : "text-black/60")}>Make it Faster</span>
            <Switch
              checked={fast}
              onCheckedChange={setFast}
              aria-label="Make it faster"
              className="data-[state=checked]:bg-violet-600"
            />
          </div>
          ) }
          
        </div>

        {/* Blurb pill */}
        <p
          className={cn(
            "rounded-full px-4 py-2 text-sm leading-6",
            isDark ? "bg-white/10 text-white/80" : "bg-gray-100 text-black/70",
          )}
        >
          {blurb}
        </p>

        {/* Feature list */}
        <ul
          role="list"
          className={cn(
            "rounded-2xl border",
            isDark ? "border-white/10" : "border-black/10",
            "divide-y",
            isDark ? "divide-white/10" : "divide-black/10",
          )}
        >
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 px-4 py-4 text-sm md:text-base">
              <Check
                className={cn("h-4 w-4 shrink-0", isDark ? "text-emerald-400" : "text-emerald-600")}
                aria-hidden="true"
              />
              <span className={cn(isDark ? "text-white/85" : "text-black/85")}>{f.label}</span>
            </li>
          ))}
        </ul>

        
      </div>

      {/* Price + CTAs */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold md:text-4xl">{`₹${currentPrice}`}</span>
          <span className={cn("text-sm", isDark ? "text-white/70 text-2xl" : "text-black/60 text-2xl")}>{cadence}</span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            className={cn(
              "rounded-full hover:cursor-pointer font-medium",
              isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90",
            )}
            onClick={() => setIsModalOpen(true)}
            // onMouseEnter={() => setIsBookHovered(true)}
            // onMouseLeave={() => setIsBookHovered(false)}
          >
            {isBookHovered ? "We will be there" : "Book a Call"}
          </Button>
          <Link
           href={"https://t.me/TalkToTrag"}
           target="_blank"
          >
          <Button
            variant="outline"
            className={cn(
              "rounded-full hover:cursor-pointer font-medium",
              isDark ? "border-white/20 text-black hover:bg-white/90" : "border-black/20  text-black hover:bg-black/5",
            )}
            // onMouseEnter={() => setIsTelegramHovered(true)}
            // onMouseLeave={() => setIsTelegramHovered(false)}
          >
            {isTelegramHovered ? "this will be quick" : "Connect on Telegram"}
          </Button>
          </Link>
        </div>
      </div>
    </section>
          <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
</>
  )
}

export default PricingCard