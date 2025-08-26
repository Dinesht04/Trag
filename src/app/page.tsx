import { ChatAccordion } from "@/components/chat-accordian"
import { ComparisonTable } from "@/components/comparison-table"
import HomePage from "@/components/hero-component"
import { MotivationalQuote } from "@/components/motivational-quote"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
    <Navbar />
    <div className=" "
   >
    


      <HomePage />

      <MotivationalQuote/>
      

      <div className="py-20">
        <ChatAccordion />
      </div>

      <div className="py-20">
        <ComparisonTable/>
      </div>

      
     
    </div></>
  )
}
