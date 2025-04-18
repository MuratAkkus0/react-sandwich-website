import Astronaut from "@/assets/icons/astronaut-63 1.svg";

type StepCardModel = {
  step: string;
  index: number;
  title: string;
  details: string;
};

const StepCard: React.FC<StepCardModel> = ({ step, index, title, details }) => {
  return (
    <>
      <div className="w-[434px] h-[512px] max-lg:w-full max-xl:w-[366px] max-xl:h-[462px] px-8 bg-[#F5F5F5] flex flex-col justify-around relative overflow-hidden rounded-lg ">
        <h5 className="text-xs font-medium">{step}</h5>
        <img
          className="absolute max-xl:w-[237px] max-xl:h-[237px] max-sm:w-[200px] max-sm:h-[200px] -top-4 -right-4 z-0"
          src={Astronaut}
          alt="Astronaut Image"
        />
        <div className="space-y-[38px] max-sm:space-y-[18px] z-1">
          <h2 className="text-[28px] max-sm:text-2xl font-medium">{title}</h2>
          <p className="text-base max-sm:text-sm text-[#0000008F]">{details}</p>
        </div>
      </div>
    </>
  );
};

export default StepCard;
