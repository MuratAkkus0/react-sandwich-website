import Logo from "@/components/atoms/Logo";
import HeaderMenu from "@/components/organisms/header/HeaderMenu";
import HeaderMenuItem from "@/components/organisms/header/HeaderMenuItem";
import { Button } from "@/components/ui/Button";
import HeaderMenuTabList from "@/assets/static_datas/header_menu_tabs.json";
import { HeaderMenuTabModel } from "@/types/models/header/HeaderMenuTabModel";
const Header = () => {
  const tabList = HeaderMenuTabList.tabs as HeaderMenuTabModel[];

  return (
    <div className="w-full h-[132px] flex justify-between items-center px-[35px]">
      <Logo />
      <HeaderMenu>
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
      <div className="flex gap-2">
        <Button variant={"outline"}>Log in</Button>
        <Button variant={"secondary"}>Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
