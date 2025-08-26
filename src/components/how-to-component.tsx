'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check } from 'lucide-react';

const steps = [
  {
    title: 'Step 1',
    heading: 'Choose Your Plan',
    description: 'Select the best plan that suits your requirement',
  },
  {
    title: 'Step 2',
    heading: 'Submit Your Request',
    description: 'Use our private design portal to submit your design needs.',
  },
  {
    title: 'Step 3',
    heading: 'We Deliver :)',
    description: 'Our talented team delivers in 2-3 days',
  },
];

const CustomCursor = ({
  isVisible,
  position,
  onClick,
  containerRef,
}: {
  isVisible: boolean;
  position: { x: number; y: number };
  onClick: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <AnimatePresence>
      {isVisible && containerRef.current && (
        <motion.div
          className="absolute pointer-events-none z-50"
          style={{
            left: position.x - 20,
            top: position.y - 20,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">V</span>
            </div>
            {onClick && (
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectsDoneSection = () => {
  const [currentState, setCurrentState] = useState(0);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);

  const backlogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % 5);
      setCheckedItems([]);
      setVisibleMessages(0);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentState === 0) {
      setShowCursor(true);
      const checkItems = async () => {
        const calculateRelativePositions = () => {
          if (!backlogRef.current) return [];

          const containerRect = backlogRef.current.getBoundingClientRect();
          const containerStyle = window.getComputedStyle(backlogRef.current);
          const paddingLeft = Number.parseInt(containerStyle.paddingLeft);
          const paddingTop = Number.parseInt(containerStyle.paddingTop);

          const baseY = paddingTop + 60;
          const itemHeight = 65;

          return [
            { x: containerRect.width - 80, y: baseY + itemHeight * 0 }, // Pitch deck for Client
            { x: containerRect.width - 80, y: baseY + itemHeight * 1 }, // New infographics for Instagram
            { x: containerRect.width - 80, y: baseY + itemHeight * 2 }, // Add a contact page
            { x: containerRect.width - 80, y: baseY + itemHeight * 3 }, // New Logo
          ];
        };

        const positions = calculateRelativePositions();

        for (let i = 0; i < 4; i++) {
          await new Promise((resolve) => setTimeout(resolve, 800));
          if (positions[i]) {
            setCursorPosition(positions[i]);
            setCursorClick(true);
            setTimeout(() => setCursorClick(false), 200);
            setCheckedItems((prev) => [...prev, i]);
          }
        }
        setTimeout(() => setShowCursor(false), 500);
      };

      setTimeout(checkItems, 100);
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState === 4) {
      const showMessages = async () => {
        for (let i = 0; i < 2; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setVisibleMessages((prev) => prev + 1);
        }
      };
      showMessages();
    }
  }, [currentState]);

  const renderLeftContent = () => {
    switch (currentState) {
      case 0:
        return (
          <motion.div
            key="backlog"
            ref={backlogRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto relative"
          >
            <CustomCursor
              isVisible={showCursor}
              position={cursorPosition}
              onClick={cursorClick}
              // @ts-ignore
              containerRef={backlogRef}
            />

            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Your Design Backlogs
            </h3>
            <div className="space-y-5">
              {[
                { text: 'Pitch deck for Client', urgent: false },
                { text: 'New infographics for Instagram', urgent: false },
                { text: 'Add a contact page', urgent: true },
                { text: 'New Logo', urgent: false },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <AnimatePresence>
                        {checkedItems.includes(index) && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.4, type: 'spring' }}
                            className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-2 h-2 text-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="text-base text-gray-800 font-medium">
                      {item.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.urgent && (
                      <button className="px-3 py-1.5 bg-red-100 text-red-600 text-sm rounded-lg font-medium">
                        Urgent
                      </button>
                    )}
                    <button className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-lg font-medium hover:bg-gray-300 transition-colors">
                      Request
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="completion"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-md border">
                <Star className="w-4 h-4 fill-gray-800 text-gray-800" />
                <span className="font-medium">Most popular</span>
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-10 text-center shadow-xl">
              <div className="mb-8">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14 8L12 14L10 8L12 2Z" fill="white" />
                    <path d="M22 12L16 14L10 12L16 10L22 12Z" fill="white" />
                    <path d="M12 22L10 16L12 10L14 16L12 22Z" fill="white" />
                    <path d="M2 12L8 10L14 12L8 14L2 12Z" fill="white" />
                    <path
                      d="M18.36 5.64L14.83 9.17L11.3 5.64L14.83 2.11L18.36 5.64Z"
                      fill="white"
                    />
                    <path
                      d="M18.36 18.36L14.83 14.83L18.36 11.3L21.89 14.83L18.36 18.36Z"
                      fill="white"
                    />
                    <path
                      d="M5.64 18.36L9.17 14.83L12.7 18.36L9.17 21.89L5.64 18.36Z"
                      fill="white"
                    />
                    <path
                      d="M5.64 5.64L9.17 9.17L5.64 12.7L2.11 9.17L5.64 5.64Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">
                You have done
                <br />
                your part
              </h3>
              <div className="mt-8">
                <button className="w-full py-4 bg-gray-700 text-white rounded-2xl text-lg font-medium">
                  It's our turn now
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="completed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Your Design Backlogs
            </h3>
            <div className="space-y-4">
              {[
                { text: 'Pitch deck for Client', avatar: null },
                { text: 'New infographics for Instagram', avatar: null },
                { text: 'Add a contact page', avatar: 'J' },
                { text: 'New Logo', avatar: null },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-base text-gray-800">{item.text}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.avatar ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {item.avatar}
                        </span>
                      </div>
                    ) : (
                      <button className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-md">
                        Request
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-md border">
                  <Star className="w-4 h-4 fill-gray-800 text-gray-800" />
                  <span className="font-medium">Most popular</span>
                </div>
              </div>
              <div className="flex">
                <div className="bg-white rounded-l-2xl p-6 shadow-lg flex-1">
                  <h3 className="text-lg font-semibold mb-4">Essential</h3>
                  <div className="space-y-3 text-sm">
                    <div>1 Active Request</div>
                    <div>Unlimited Requests</div>
                    <div>Branding</div>
                    <div>Website Design</div>
                    <div className="pt-2">
                      <button className="w-full py-2 bg-gray-100 rounded text-center">
                        Book your Slot
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 text-white rounded-r-2xl p-6 shadow-lg flex-1 transform rotate-3">
                  <h3 className="text-lg font-semibold mb-4">Deluxe</h3>
                  <div className="space-y-3 text-sm">
                    <div>2 Active Request</div>
                    <div>Unlimited Requests</div>
                    <div>Branding</div>
                    <div>Website Design</div>
                    <div className="pt-2">
                      <button className="w-full py-2 bg-white text-black rounded text-center">
                        Book your Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="communication"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="text-center text-sm text-gray-600 mb-4">
              2 days later
            </div>

            <AnimatePresence>
              {visibleMessages >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="bg-blue-500 text-white rounded-2xl rounded-br-md p-4 max-w-xs">
                    <p className="text-sm mb-2">
                      Hey John just finished with the new landing page design
                      can we move to the development stage
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-100">Trag</span>
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-xs text-white">K</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {visibleMessages >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-lg max-w-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">G</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 mb-1">
                          Sure Ved, the landing page looks really good our team
                          loved the design, everything looks fine and yes we can
                          move to the development stage as quick as possible :)
                        </p>
                        <span className="text-xs text-gray-500">Gabriel</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="absolute -z-10 inset-0 h-full w-full 


bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 


bg-[size:20px_20px] min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8 py-16 px-4 bg-gray-50 min-h-screen flex items-center relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How simple it can be to get
            <br />
            your Projects Done
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Just step away from those traditional old methods of
            <br />
            hiring plus managing and see for yourself
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">{renderLeftContent()}</AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="space-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800">
                  {step.heading}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentState(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentState === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDoneSection;
