import { ReactNode } from "react";

type SectionUnderTitleModel = {
  children: ReactNode;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  textPosition?: string;
  textColor?: string;
};

const SectionUnderTitle: React.FC<SectionUnderTitleModel> = ({
  children,
  className,
  fontSize = "text-2xl",
  fontWeight = "font-medium",
  textPosition = "text-center",
  textColor = "text-[#0000008F]",
}) => {
  return (
    <>
      <p
        className={`${textColor} ${textPosition} ${fontSize} ${fontWeight} ${className} `}
      >
        {children}
      </p>
    </>
  );
};

export default SectionUnderTitle;
