import { ReactNode } from "react";

type FooterLinkModel = {
  children: ReactNode;
  href?: string;
};
const FooterLink: React.FC<FooterLinkModel> = ({ children, href = "#" }) => {
  return (
    <>
      <a className="block" href={href}>
        {children}
      </a>
    </>
  );
};

export default FooterLink;
