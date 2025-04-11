import boxIco from "@/assets/icons/boxIco.svg";

type FeatureCardModel = {
  title: string;
  details: string;
};

const FeatureCard: React.FC<FeatureCardModel> = ({ title, details }) => {
  return (
    <>
      <div className="w-[300px] h-[165px] flex flex-col gap-8">
        <div className="flex-[1] flex justify-center">
          <img className="w-[50px] h-[50px]" src={boxIco} alt="Box Icon" />
        </div>
        <div className="flex-[1]">
          <h1 className="text-[28px] font-medium text-center">{title}</h1>
          <p className="text-[20px] font-medium text-[#0000008F] text-center">
            {details}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
