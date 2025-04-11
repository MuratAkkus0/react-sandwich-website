type SectionTitleModel = {
  firstText: string;
  secondText: string;
  className?: string;
  reverseColorSequence?: boolean;
};

const SectionTitle: React.FC<SectionTitleModel> = ({
  firstText,
  secondText,
  className = "",
  reverseColorSequence = false,
}) => {
  return (
    <div className={className}>
      <h1 className="text-[40px] font-medium text-center">
        {reverseColorSequence ? (
          <>
            {firstText}{" "}
            <span className="text-[#0000008F] font-normal">{secondText} </span>
          </>
        ) : (
          <>
            <span className="text-[#0000008F] font-normal">{firstText} </span>
            {secondText}
          </>
        )}
      </h1>
    </div>
  );
};

export default SectionTitle;
