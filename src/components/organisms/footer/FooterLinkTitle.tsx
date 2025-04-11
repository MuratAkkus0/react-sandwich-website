import { ReactNode } from "react";

type FooterLinkTitleModel = {
  children: ReactNode;
};

const FooterLinkTitle: React.FC<FooterLinkTitleModel> = ({ children }) => {
  return (
    <>
      <h5 className="font-semibold text-base">{children}</h5>
    </>
  );
};

export default FooterLinkTitle;
