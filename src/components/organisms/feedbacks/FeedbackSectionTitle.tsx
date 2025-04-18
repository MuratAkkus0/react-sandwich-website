import { ReactNode } from "react";

type FeedbackSectionTitleProps = {
  children: ReactNode;
};
const FeedbackSectionTitle: React.FC<FeedbackSectionTitleProps> = ({
  children,
}) => {
  return (
    <>
      <h3 className="font-medium text-[40px] max-sm:text-4xl leading-[48px] max-sm:leading-11">
        {children}
      </h3>
    </>
  );
};

export default FeedbackSectionTitle;
