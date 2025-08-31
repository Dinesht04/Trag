import { ChatAccordion } from '@/components/chat-accordian';
import FlipCardsSection from '@/components/common-concerns';
import { ComparisonTable } from '@/components/comparison-table';
import SiteFooter from '@/components/footer';
import HomePage from '@/components/hero-component';
import ProjectsDoneSection from '@/components/how-to-component';
import { MotivationalQuote } from '@/components/motivational-quote';
import Navbar from '@/components/navbar';
import { OurWorkSection } from '@/components/our-work/our-work-section';
import PricingSection from '@/components/pricing/pricing-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" ">
        <HomePage />

        <div id='work' className='py-10'>
          <OurWorkSection/>
        </div>

        <div id='issues&addressingThem' className="py-20 ">
          <FlipCardsSection />
        </div>

        <div id='comparison' className="py-20">
          <ComparisonTable />
        </div>

        <div id='faqs' className="py-10 ">
          <ChatAccordion />
        </div>

        <div className="py-10">
          <MotivationalQuote />
        </div>

        <div id='pricing'>
          <PricingSection />
        </div>

        <div id='footer'>
          <SiteFooter/>
        </div>
      </div>
    </>
  );
}