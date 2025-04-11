import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/HeaderNavigationMenu";
import { ReactNode } from "react";

type HeaderMenuModel = {
  children: ReactNode;
};

const HeaderMenu: React.FC<HeaderMenuModel> = ({ children }) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>{children}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderMenu;
