import Astronaut from "@/assets/icons/astronaut-63 1.svg";

// export type StepCardModel

const StepCard = ({ step, title, details }) => {
  return (
    <>
      <div className="w-[434px] h-[512px] px-8 bg-[#F5F5F5] flex flex-col justify-around relative overflow-hidden rounded-lg">
        <h5 className="text-xs">Step One</h5>
        <img
          className="absolute top-0 -right-4"
          src={Astronaut}
          alt="Astronaut Image"
        />
        <div className="space-y-[38px]">
          <h2 className="text-[28px] font-medium">{title}</h2>
          <p className="text-base text-[#0000008F]">{details}</p>
        </div>
      </div>
    </>
  );
};

export default StepCard;
