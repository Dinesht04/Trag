'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const cardData =[
  {
    "id": 1,
    "title": "1. Limited In-House Skillsets",
    "problem": "Your team might be strong in one area but lack the comprehensive skills to take a digital product from concept to a fully deployed reality.",
    "solution": "We act as your dedicated product team, providing a unified skillset that covers everything from UI/UX design to front-end and back-end development. You get the expertise you need without having to hire for multiple roles."
  },
  {
    "id": 2,
    "title": "2. Prohibitive Costs & Hiring Delays",
    "problem": "Hiring a full-time senior designer and a developer is a significant financial commitment involving high salaries, benefits, and a lengthy recruitment process.",
    "solution": "Our flexible model gives you access to a complete design and development duo at a fraction of the cost. Get started immediately and scale with a predictable, cost-effective subscription."
  },
  {
    "id": 3,
    "title": "3. Overwhelmed Teams & Stalled Progress",
    "problem": "Internal teams are often stretched thin, causing feature backlogs to grow and key projects to be delayed.",
    "solution": "As a nimble two-person team, we provide the focused firepower to clear your backlog, build out a new feature, or launch your MVP. You get our undivided attention to ensure your project moves forward, fast."
  },
  {
    "id": 4,
    "title": "4. The Design-to-Development Gap",
    "problem": "Great designs often get lost in translation during the handoff to development, resulting in a final product that doesn't match the original vision.",
    "solution": "With us, there is no handoff. The designer and developer work in lockstep from day one. This guarantees a pixel-perfect implementation and a cohesive user experience, ensuring what you see in the design is exactly what gets built."
  },
  {
    "id": 5,
    "title": "5. Lack of a Unified Vision",
    "problem": "When design and development are separate, it's easy to lose sight of the core user problem, leading to a disconnected and ineffective final product.",
    "solution": "We operate as a single, cohesive unit obsessed with your success. This personal, unified approach ensures every design decision and line of code is purposefully aligned with your business goals and user needs."
  },
  {
    "id": 6,
    "title": "6. Communication Silos & Overhead",
    "problem": "Coordinating between project managers, external agencies, and internal teams creates communication overhead, delays, and costly misunderstandings.",
    "solution": "You get a single point of contact and direct access to the two people actually building your project. This radically simplifies communication—no layers of bureaucracy, just a direct, personal partnership focused on efficiency."
  }
]

function FlipCard({ card }: { card: (typeof cardData)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front Side - Problem */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-white  rounded-[36px] p-6 flex flex-col shadow-sm">
            <h3 className="font-bold text-lg md:text-xl leading-tight mb-4 font-sans">
              {card.title}
            </h3>

            <div className="bg-black/5 rounded-[22px] px-4 py-2 mb-4 inline-block">
              <span className="text-sm font-medium text-black/80 font-serif">
                Problem
              </span>
            </div>

            <p className="text-sm leading-relaxed text-black/90 flex-1">
              {card.problem}
            </p>
          </div>
        </div>

        {/* Back Side - Solution */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[#161616] rounded-[36px] p-6 flex flex-col shadow-lg">
            <div className="bg-white/12 rounded-[22px] px-4 py-2 mb-4 text-center">
              <span className="text-sm font-medium text-white">Solution</span>
            </div>

            <p className="text-sm leading-relaxed text-white/90 flex-1">
              {card.solution}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlipCardsSection() {
  return (
    <div className="max-w-6xl  mx-auto">
      <div className=" pb-10 shadow-xl rounded-[36px]  overflow-hidden">
        <section className="py-2 px-10 max-w-4xl mx-auto ">
          {/* Header */}
          <div className="text-center   py-8 px-6 mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold  leading-tight max-w-5xl mx-auto font-sans">
              What's holding you back from
              <br />
              choosing us, considering we've
              <br />
              already addressed these issues?
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
  );
}
