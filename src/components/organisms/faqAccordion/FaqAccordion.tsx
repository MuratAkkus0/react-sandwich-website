import AccordionItem from "./AccordionItem";
import SectionTitle from "@/components/atoms/SectionTitle";
import IntermediateLine from "@/components/atoms/IntermediateLine";

const FaqAccordion = () => {
  return (
    <>
      <div className="my-28">
        <IntermediateLine />
        <SectionTitle
          firstText="Some things"
          secondText="we figured you’d ask"
          className="my-6"
        />
        <div className="w-full flex ">
          <div className="flex-[6] border border-[#00000007] border-r-0">
            <AccordionItem isActive={true}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor?
            </AccordionItem>
            <AccordionItem>Donec sodales sagittis magna?</AccordionItem>
            <AccordionItem>Vivamus elementum semper nisi?</AccordionItem>
            <AccordionItem>Curabitur ullamcorper ultricies nis?</AccordionItem>
            <AccordionItem>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper?
            </AccordionItem>
          </div>
          <div className="flex-[6] font-normal text-lg p-16 bg-[#F5F5F5]">
            <p className="w-[80%] leading-[26px]">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
