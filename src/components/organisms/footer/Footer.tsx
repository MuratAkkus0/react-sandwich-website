import Logo from "@/components/atoms/Logo";
import InstaIco from "@/assets/icons/insta-ico.svg";
import FaceIco from "@/assets/icons/facebook-ico.svg";
import FooterLinkContainer from "./FooterLinkContainer";
import FooterLinkTitle from "./FooterLinkTitle";
import FooterLink from "./FooterLink";
import FooterData from "@/assets/static_datas/footer.json";
const Footer = () => {
  const footerDataArr = FooterData.data;
  return (
    <>
      <div>
        <div className="flex max-md:flex-col max-md:items-start justify-between">
          <div className="flex-[2]">
            <Logo />
          </div>
          <div className="flex-[6] grid grid-rows-1 grid-cols-4 max-md:flex max-md:flex-wrap max-sm:justify-between max-md:my-10 gap-4 justify-items-start">
            {footerDataArr.map((item, key) => (
              <div key={key} className="space-y-3">
                <FooterLinkTitle>{item.title}</FooterLinkTitle>
                <FooterLinkContainer>
                  {item.links.map((link, i) => (
                    <FooterLink key={i} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ))}
                </FooterLinkContainer>
              </div>
            ))}
          </div>
          <div className="flex-[2] flex flex-col max-md:flex-row items-end gap-6">
            <img className="w-5 h-5" src={InstaIco} alt="instagram icon" />
            <img className="w-5 h-5" src={FaceIco} alt="facebook icon" />
            <img className="w-5 h-5" src={InstaIco} alt="instagram icon" />
            <img className="w-5 h-5" src={FaceIco} alt="facebook icon" />
          </div>
        </div>
        <div className="py-24 flex max-sm:flex-col max-sm:gap-5 justify-between">
          <p className="font-medium text-[14px] text-[#0000008F]">
            © 2025 Gemi, Inc. All rights reserved
          </p>
          <a
            href="https://github.com/muratakkus0"
            target="blank"
            className="text-[#215DF5] text-[14px]"
          >
            Coded by <span className="underline">Murat Akkus</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
