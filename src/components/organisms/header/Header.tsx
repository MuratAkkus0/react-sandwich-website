import Logo from "@/components/atoms/Logo";
import HeaderMenu from "@/components/organisms/header/HeaderMenu";
import HeaderMenuItem from "@/components/organisms/header/HeaderMenuItem";
import { Button } from "@/components/ui/Button";
import HeaderMenuTabList from "@/assets/static_datas/header_menu_tabs.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

type HeaderMenuTabModel = {
  tabName: string;
  dropdownContent: HeaderMenuTabModel[];
};

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const tabList = HeaderMenuTabList.tabs as HeaderMenuTabModel[];

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  return (
    <div className="w-full h-[132px] grid grid-rows-1 grid-cols-[auto_1fr] items-center max-lg:grid-cols-[auto_1fr] max-lg:px-0 px-[35px] overflow-hidden ">
      <Logo />

      {isMenuActive && (
        <div
          onClick={() => setIsMenuActive(!isMenuActive)}
          className="max-h-dvh absolute top-0 left-0 right-0 bottom-0 bg-[#00000065] transition-all"
        ></div>
      )}
      <GiHamburgerMenu
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="lg:hidden col-start-3"
        size={32}
      />
      <div
        className="flex max-lg:max-h-dvh max-lg:absolute max-lg:top-0 max-lg:bottom-0 max-lg:px-6 max-lg:py-8 max-lg:bg-white max-lg:flex max-lg:flex-col max-lg:justify-between transition-all duration-300"
        style={isMenuActive ? { right: "0" } : { right: "-150%" }}
      >
        <HeaderMenu className="flex-1 lg:flex lg:justify-center">
          {tabList.map((tab, index) => {
            return (
              <HeaderMenuItem tabName={tab.tabName} key={index}>
                {tab.dropdownContent.length
                  ? tab.dropdownContent.map((item, i) => (
                      <HeaderMenuItem key={i} tabName={item.tabName} />
                    ))
                  : ""}
              </HeaderMenuItem>
            );
          })}
        </HeaderMenu>
        <div className="flex  gap-2 d">
          <Button variant={"outline"}>Log in</Button>
          <Button variant={"secondary"}>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
