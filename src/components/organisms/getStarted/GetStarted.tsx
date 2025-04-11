import SectionTitle from "@/components/atoms/SectionTitle";
import StepCard from "./StepCard";
import stepCardList from "@/assets/static_datas/step_cards.json";

const GetStarted = () => {
  const stepArray = stepCardList.steps;

  return (
    <>
      <div className="mb-30 w-full flex flex-col justify-center items-center gap-11">
        <SectionTitle
          firstText="Get started"
          secondText="in three steps"
          reverseColorSequence
        />
        <div className="flex flex-wrap justify-center items-center gap-11">
          {stepArray.map((Item, key) => (
            <StepCard
              key={key}
              step={Item.step}
              title={Item.title}
              details={Item.details}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GetStarted;
