"use client"

import PricingCard from "./pricing-card"

export function PricingSection() {
  return (
    <main className="font-sans">
      <header className="mx-auto max-w-3xl space-y-2 px-4 py-8 text-center md:py-12">
        <h2 className="text-balance text-2xl font-semibold md:text-4xl">No Contract, No Surprises</h2>
        <p className="text-pretty text-sm leading-6 text-black/70 dark:text-white/70 md:text-base">
          Consistent pricing and value each month, with the flexibility to cancel anytime.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-12 md:grid-cols-2 md:gap-8">
        {/* This card remains mostly the same, just adapting to new props */}
        <PricingCard
          tone="dark"
          icon="sparkles"
          title="Retainer"
          highlight="Boost"
          blurb="Best suited for growing companies or agencies that require ongoing and fast design support."
          basePrice={5699}
          fastPrice={7699} // Same price for this example, as it starts in the 'fast' state
          cadence="/ per month"
          footnote="Free Website Development with Framer"
          features={[
            { label: "2 Active requests at a time" },
            { label: "3X Senior designer" },
            { label: "Weekly progress meetings" },
            { label: "Lightning fast turnaround" },
            { label: "Unlimited design requests" },
            { label: "Up to 100 hours of design work each month" },
            { label: "Expert project management" },
            { label: "Communication through Async, Slack, Loom & Meetings" },
          ]}
        />

        {/* MODIFICATION: This card now uses basePrice and fastPrice for dynamic pricing */}
        <PricingCard
          tone="light"
          icon="globe"
          title="Landing Page Design"
          highlight="+ Dev"
          blurb="Bring your dream website to life in just days, not months."
          basePrice={3999}   // Price when the switch is OFF
          fastPrice={4999}   // Price when the switch is ON
          cadence="one time"
          footnote="Website development (Framer) +2k"
          features={[
            { label: "Wireframes" },
            { label: "Custom Layout" },
            { label: "Desktop, Tablet, Mobile Responsive Design" },
            { label: "Brand Consistency" },
            { label: "Figma File" },
            { label: "Updates every 48 hours" },
            { label: "2X Revision" },
            { label: "+$800 For Each Extra Page" },
          ]}
        />
      </div>
    </main>
  )
}

export default PricingSection