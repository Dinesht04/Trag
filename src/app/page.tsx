import { ChatAccordion } from '@/components/chat-accordian';
import FlipCardsSection from '@/components/common-concerns';
import { ComparisonTable } from '@/components/comparison-table';
import HomePage from '@/components/hero-component';
import ProjectsDoneSection from '@/components/how-to-component';
import { MotivationalQuote } from '@/components/motivational-quote';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" ">
        <HomePage />

        <div className="py-10">
          <MotivationalQuote />
        </div>

        <div className="py-20 ">
          <FlipCardsSection />
        </div>

        <div className="py-10 ">
          <ChatAccordion />
        </div>

        <div className="py-20">
          <ComparisonTable />
        </div>

        <ProjectsDoneSection />
      </div>
    </>
  );
}
