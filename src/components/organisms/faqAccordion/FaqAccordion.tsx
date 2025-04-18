import AccordionItem from "./AccordionItem";
import SectionTitle from "@/components/atoms/SectionTitle";
import IntermediateLine from "@/components/atoms/IntermediateLine";
import AccordionItemDetail from "./AccordionItemDetail";
import FaqData from "@/assets/static_datas/faq.json";
import { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqArr = FaqData.faqs;
  return (
    <>
      <div className="my-28">
        <IntermediateLine />
        <SectionTitle
          firstText="Some things"
          secondText="we figured you’d ask"
          className="my-6"
        />
        <div className="w-full flex max-md:flex-col ">
          <div className="flex-[6] border border-[#00000007] border-r-0">
            {faqArr.map((item, key) => (
              <div key={key}>
                <AccordionItem
                  onClick={() => setActiveIndex(key)}
                  isActive={activeIndex == key ? true : false}
                >
                  {item.question}
                </AccordionItem>
                {activeIndex == key && (
                  <div className="md:hidden border-t-1 font-normal text-lg p-8 bg-[#F5F5F5]">
                    <AccordionItemDetail>
                      {faqArr[activeIndex].answer}
                    </AccordionItemDetail>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-[6] max-md:hidden font-normal text-lg p-16 bg-[#F5F5F5]">
            <AccordionItemDetail>
              {faqArr[activeIndex].answer}
            </AccordionItemDetail>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
