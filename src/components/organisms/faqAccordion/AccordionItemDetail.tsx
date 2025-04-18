import { ReactNode } from "react";

type AccordionItemDetailModel = {
  children: ReactNode;
};
const AccordionItemDetail: React.FC<AccordionItemDetailModel> = ({
  children,
}) => {
  return (
    <>
      <p className="w-[80%] max-sm:w-full leading-[26px]">{children}</p>
    </>
  );
};

export default AccordionItemDetail;
