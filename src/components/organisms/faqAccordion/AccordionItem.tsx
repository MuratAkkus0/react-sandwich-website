import rightArrow from "@/assets/icons/rightArrow.svg";
import rightArrowGray from "@/assets/icons/rightArrowGray.svg";
import { MouseEventHandler, ReactNode } from "react";

type AccordionItemModel = {
  isActive?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const AccordionItem: React.FC<AccordionItemModel> = ({
  isActive = false,
  children,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-5 px-5 py-7 justify-between items-center] border-b border-b-[#00000007]`}
      style={isActive ? { backgroundColor: "#F5F5F5" } : {}}
    >
      <p
        className="text-[17.91px] font-normal"
        style={isActive ? { fontWeight: "500" } : {}}
      >
        {children}
      </p>
      <div className="flex items-center shrink-0">
        {isActive ? (
          <img
            className="w-8 h-8 max-lg:rotate-90 transition-all"
            src={rightArrow}
            alt="right arrow icon"
          />
        ) : (
          <img
            className="w-8 h-8"
            src={rightArrowGray}
            alt="right arrow icon"
          />
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
