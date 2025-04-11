import { SectionTitleModel } from "@/types/models/atoms/SectionTitleModel";

const SectionTitle: React.FC<SectionTitleModel> = ({
  firstText,
  secondText,
  reverseColorSequence = false,
}) => {
  return (
    <>
      <h1 className="text-[40px] font-normal text-center">
        {reverseColorSequence ? (
          <>
            {firstText} <span className="text-[#0000008F]">{secondText} </span>
          </>
        ) : (
          <>
            <span className="text-[#0000008F]">{firstText} </span>
            {secondText}
          </>
        )}
      </h1>
    </>
  );
};

export default SectionTitle;
