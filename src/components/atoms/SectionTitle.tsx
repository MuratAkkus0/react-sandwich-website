type SectionTitleModel = {
  firstText: string;
  secondText: string;
  className?: string;
  fontSize?: " text-[40px]" | " text-8xl";
  breakWords?: boolean;
  reverseColorSequence?: boolean;
  SameFontWeightForBoth?: "400" | "500" | "600" | "700";
};

const SectionTitle: React.FC<SectionTitleModel> = ({
  firstText,
  secondText,
  className = "",
  fontSize = " text-[40px]",
  breakWords = false,
  reverseColorSequence = false,
  SameFontWeightForBoth = "",
}) => {
  return (
    <div className={className + fontSize}>
      <h1
        className="font-medium text-center"
        style={
          SameFontWeightForBoth.length > 0
            ? { fontWeight: SameFontWeightForBoth }
            : {}
        }
      >
        {reverseColorSequence ? (
          <>
            {firstText}
            {breakWords ? <br /> : ""}
            <span
              className="text-[#0000008F] font-normal"
              style={
                SameFontWeightForBoth.length > 0
                  ? { fontWeight: SameFontWeightForBoth }
                  : {}
              }
            >
              {secondText}
            </span>
          </>
        ) : (
          <>
            <span
              className="text-[#0000008F] font-normal"
              style={
                SameFontWeightForBoth.length > 0
                  ? { fontWeight: SameFontWeightForBoth }
                  : {}
              }
            >
              {firstText}{" "}
            </span>
            {breakWords ? <br /> : ""}
            {secondText}
          </>
        )}
      </h1>
    </div>
  );
};

export default SectionTitle;
