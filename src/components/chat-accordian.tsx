'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ChatAccordionItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: ChatAccordionItem[] = [
  {
    id: '1',
    question: "Who's behind Trag?",
    answer:
      "Trag is led by a passionate team Pranshu, a brand strategist and creative mind, and Dinesh, a talented designer and developer. Together, we built Trag to deliver innovative design solutions tailored to each client's unique needs. Our vision is to help brands unlock their full potential through strategic, impactful, and visually stunning designs, while fostering long-lasting relationships built on trust and creativity.",
  },
  {
    id: '2',
    question: 'How does the delivery process work?',
    answer:
      'Our delivery process is streamlined and efficient. Once you submit a request, we review it within 24 hours and provide an initial timeline. We work in iterative cycles, providing regular updates and incorporating your feedback throughout the process.',
  },
  {
    id: '3',
    question: 'Is there a limit to how many design requests I can have?',
    answer:
      "No, there's no limit! With our unlimited subscription, you can submit as many design requests as you need. We work through them one by one, ensuring each receives the attention and quality it deserves.",
  },
  {
    id: '4',
    question: 'How fast will I receive my designs?',
    answer:
      "Most design requests are completed within 48-72 hours. Complex projects may take longer, but we'll always communicate realistic timelines upfront and keep you updated throughout the process.",
  },
  {
    id: '5',
    question: "What if I don't like the design?",
    answer:
      "No worries! We offer unlimited revisions until you're completely satisfied. Your feedback is valuable to us, and we'll work together to ensure the final design exceeds your expectations.",
  },
  {
    id: '6',
    question: 'Do you make Shopify websites?',
    answer:
      "Yes! We specialize in creating beautiful, conversion-optimized Shopify stores. From custom themes to complete e-commerce solutions, we'll help you build an online store that drives sales.",
  },
  {
    id: '7',
    question: 'What does it mean to pause a subscription?',
    answer:
      'Pausing your subscription allows you to temporarily stop billing while retaining access to your account and previous work. You can resume anytime without losing your place in the queue or any of your design assets.',
  },
  {
    id: '8',
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      'Hiring a full-time designer comes with significant costs - salary, benefits, equipment, and management overhead. With kree8, you get senior-level design expertise on-demand, without the commitment or overhead costs.',
  },
  {
    id: '9',
    question: 'Can I get refund?',
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied with our service within the first two weeks, we'll provide a full refund, no questions asked.",
  },
];

export function ChatAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['1']));

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className=" max-w-5xl mx-auto space-y-4 p-6 p-4 rounded-2xl">
      {faqData.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="space-y-2 ">
            {/* Question Row */}
            <div className="flex items-center justify-end gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleItem(item.id)}
                className={`p-2 h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 hover:cursor-pointer ${
                  isOpen
                    ? 'bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black'
                    : 'bg-white text-black border border-gray-300 hover:bg-black hover:text-white'
                }`}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>

              <div
                className={`flex ${
                  isOpen
                    ? 'bg-black text-white hover:border hover:border-black'
                    : 'bg-gray-100 text-gray-900 hover:bg-black  hover:bg-gray-200'
                }  rounded-l-lg px-4 py-3  transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
                onClick={() => toggleItem(item.id)}
              >
                <p className={`text-sm text-right  font-medium `}>
                  {item.question}
                </p>
              </div>
            </div>

            {isOpen && (
              <div className="flex items-end space-x-2">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src="https://tdc.org/wp-content/uploads/2012/10/Paul-Rand.jpg" />
                  <AvatarFallback className="bg-black text-white text-xs">
                    K8
                  </AvatarFallback>
                </Avatar>

                <div className="flex max-w-[500px] items-start gap-3 bg-blue-100 rounded-tl-lg  rounded-tr-lg rounded-br-lg p-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
