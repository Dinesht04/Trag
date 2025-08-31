'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const targetAudiences = ['FOR STARTUPS', 'FOR FOUNDERS', 'FOR ENTERPRISES'];

const AnimatedText = ({
  text,
  delay = 0,
  isStatic = false,
}: {
  text: string;
  delay?: number;
  isStatic?: boolean;
}) => {
  const letters = text.split('');

  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={`${text}-${index}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForAnimation, setShowForAnimation] = useState(true);

  const prefersReducedMotion = useReducedMotion()

  // Pulse animation for the core dot (disabled if user prefers reduced motion)
  const dotPulse = prefersReducedMotion
    ? {}
    : {
        scale: [1, 1.15, 1],
        transition: {
          duration: 1.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }

  // Helper to render a ripple ring with a delay
  const Ripple = ({ delay = 0 }: { delay?: number }) => (
    <motion.span
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-green-500"
      style={{ width: 8, height: 8 }}
      initial={{ opacity: 0.5, scale: 1 }}
      animate={{ opacity: 0, scale: 3 }}
      transition={{
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
        ease: [0, 0.71, 0.2, 1.01],
        delay,
      }}
    />
  );

  useEffect(() => {
    const forTimer = setTimeout(() => {
      setShowForAnimation(false);
    }, 3000); // Show FOR animation for 1.5 seconds

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % targetAudiences.length);
    }, 3000); // Change every 3 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(forTimer);
    };
  }, []);

  return (
    <main className="  flex flex-col items-center justify-center px-4 py-8">
      {/* Available Status */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={"flex items-center gap-2 mb-12"}
    >
      <div className="relative h-3 w-3" aria-hidden="true">
        {/* Core green dot */}
        <motion.span className="absolute inset-0 rounded-full bg-green-500" 
         />

        {/* Radiating waves (respect reduced motion) */}
        {!prefersReducedMotion && (
          <>
            <Ripple delay={0} />
          </>
        )}
      </div>

      <span className="text-gray-700 py-12 font-medium">Available for New Projects</span>
    </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto mb-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
          A DEDICATED DEV TEAM
          <br />
          {showForAnimation ? (
            <AnimatedText text="FOR" delay={0.8} />
          ) : (
            <span className="text-black">FOR </span>
          )}
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-blue-500 relative inline-block"
              >
                <AnimatedText
                  text={targetAudiences[currentIndex].replace('FOR ', '')}
                  delay={0.2}
                />

                {/* Selection Box Corners */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Top Left */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400"></div>
                  {/* Top Right */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400"></div>
                  {/* Bottom Left */}
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400"></div>
                  {/* Bottom Right */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400"></div>
                </motion.div>
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-700 text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        We don't just develop, we transform your ideas into reality
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button
          size="lg"
          className="bg-black hover:cursor-pointer hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
        >
          Book a Call
        </Button>
      </motion.div>

      {/* Progress Indicators */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex gap-2 mt-12"
      >
        {targetAudiences.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </motion.div> */}
    </main>
  );
}
