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
      "Trag is a two-person product team: Pranshu, our UI/UX designer and brand strategist, and Dinesh, our full-stack developer. We combine our skills to design, build, and launch exceptional digital products. Our goal is to act as your dedicated team, fostering a close partnership to bring your vision to life from concept to code.",
  },
  {
    id: '2',
    question: 'How does the delivery process work?',
    answer:
      'Our process is collaborative and transparent. Once you submit a request, we begin working on it, providing regular updates in a shared Slack channel. We work in iterative cycles for both design and development, ensuring your feedback is incorporated at every stage to get the final result just right.',
  },
  {
    id: '3',
    question: 'Is there a limit to how many requests I can have?',
    answer:
      "No, there's no limit! You can add as many requests to your queue as you like—whether for design, development, or both. We process them one at a time to ensure each task gets our full, dedicated attention.",
  },
  {
    id: '4',
    question: 'How fast will I receive my deliverables?',
    answer:
      "Most design and front-end tasks are completed within 48-72 hours. More complex development requests may take longer, but we are committed to constant progress and will always provide clear timelines upfront.",
  },
  {
    id: '5',
    question: "What if I don't like the result?",
    answer:
      "No problem. We offer unlimited iterations. Whether it's a design tweak or a code revision, we'll keep refining the work until it perfectly matches your vision. Your satisfaction is our top priority.",
  },
  {
    id: '6',
    question: 'What kind of projects do you handle?',
    answer:
      "We handle the entire product lifecycle, from initial UI/UX wireframes to fully deployed web applications. This includes front-end (e.g., React, Next.js), back-end (e.g., Node.js), and database management. If you have a digital product idea, we can design and build it.",
  },
  {
    id: '7',
    question: 'How do we communicate and track progress?',
    answer:
      'Communication is direct and simple. You\'ll work with us via a shared Slack channel for real-time updates. We use Trello to manage your project backlog, so you always have full visibility into what’s being worked on and what’s up next.',
  },
  {
    id: '8',
    question: "Why wouldn't I just hire a full-time designer and developer?",
    answer:
      "Hiring for two senior roles is a major investment of time and money, including high salaries, benefits, and overhead. With Trag, you get the combined expertise of a senior-level product team immediately, at a fraction of the cost, without any long-term commitments.",
  },
  {
    id: '9',
    question: 'Can I get a refund?',
    answer:
      'Absolutely. We stand by the quality of our partnership and our work. If you are not satisfied with the service for any reason, we will provide a full refund.',
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

      <div className='flex flex-col space-y-4 items-center'>
        <span className='text-center text-4xl bold'>Frequently Asked Questions</span>
        <span className='text-center'>We Get It—Curiosity Leads to Success! <br/> Got questions? That&apos;s a great sign. Here<br/> are some</span>
      </div>

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
