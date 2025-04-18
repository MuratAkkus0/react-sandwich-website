import { ReactNode } from "react";

type FeedbackSectionUntertitleProps = {
  children: ReactNode;
};
const FeedbackSectionUndertitle: React.FC<FeedbackSectionUntertitleProps> = ({
  children,
}) => {
  return (
    <>
      <p className="text-[#0000008F] text-base font-medium">{children}</p>
    </>
  );
};

export default FeedbackSectionUndertitle;
