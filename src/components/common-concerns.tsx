"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const cardData = [
  {
    id: 1,
    title: "1. Resource Constraints",
    problem: "Internal design teams may be understaffed or lack the specific skills needed for certain projects.",
    solution:
      "KREE8 provides access to a team of experienced designers with diverse skills, allowing clients to scale resources up or down as needed without hiring additional full-time staff.",
  },
  {
    id: 2,
    title: "2. High Costs",
    problem: "Maintaining an in-house design team can be expensive due to salaries, benefits, and training costs.",
    solution:
      "KREE8's subscription model offers high-quality design services at a fraction of the cost of hiring an in-house team, making it a cost-effective solution for clients.",
  },
  {
    id: 3,
    title: "3. Managing Workloads",
    problem:
      "Internal teams might struggle with managing workloads, especially during peak periods or when handling multiple projects simultaneously.",
    solution:
      "KREE8 can handle fluctuating workloads by providing additional support when needed, ensuring that deadlines are met without overburdening the internal team.",
  },
  {
    id: 4,
    title: "4. Design Consistency",
    problem:
      "Maintaining design consistency across various platforms and projects can be challenging with an internal team, especially if there are multiple designers involved.",
    solution:
      "KREE8 ensures a cohesive design approach and maintains brand consistency across all design work, reducing the risk of inconsistent messaging and visual identity.",
  },
  {
    id: 5,
    title: "5. Expertise and Specialization",
    problem:
      "Internal teams might lack specialized knowledge or experience in certain areas of design (e.g., advanced UX/UI, motion graphics).",
    solution:
      "KREE8 offers specialized design expertise and the latest design trends, providing high-quality work that might be beyond the capabilities of an internal team.",
  },
  {
    id: 6,
    title: "6 Communication and Coordination",
    problem: "Coordinating between internal teams and external designers can lead to miscommunications and delays.",
    solution:
      "KREE8's subscription service provides a streamlined process with clear communication channels, ensuring that projects are executed smoothly and efficiently.",
  },
]

function FlipCard({ card }: { card: (typeof cardData)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side - Problem */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-white border border-dashed border-black/30 rounded-[36px] p-6 flex flex-col shadow-sm">
            <h3 className="font-bold text-lg md:text-xl leading-tight mb-4 font-sans">{card.title}</h3>

            <div className="bg-black/5 rounded-[22px] px-4 py-2 mb-4 inline-block">
              <span className="text-sm font-medium text-black/80 font-serif">Problem</span>
            </div>

            <p className="text-sm leading-relaxed text-black/90 flex-1">{card.problem}</p>
          </div>
        </div>

        {/* Back Side - Solution */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[#161616] rounded-[36px] p-6 flex flex-col shadow-lg">
            <div className="bg-white/12 rounded-[22px] px-4 py-2 mb-4 text-center">
              <span className="text-sm font-medium text-white">Solution</span>
            </div>

            <p className="text-sm leading-relaxed text-white/90 flex-1">{card.solution}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FlipCardsSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-100 pb-10 shadow-xl border-1  border-dashed border-gray-400  overflow-hidden">
        <section className="py-30 px-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center border-1 border-dashed border-gray-400  py-8 px-6 mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold leading-tight max-w-5xl mx-auto font-sans">
          What's holding you back from 
          <br />choosing us, considering we've 
          <br />already addressed these issues?
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </section>
      </div>
      
    </div>
  )
}
