import { ReactNode } from "react";

type FooterLinkContainerModel = {
  children: ReactNode;
};
const FooterLinkContainer: React.FC<FooterLinkContainerModel> = ({
  children,
}) => {
  return (
    <>
      <div className="font-normal">{children}</div>
    </>
  );
};

export default FooterLinkContainer;
