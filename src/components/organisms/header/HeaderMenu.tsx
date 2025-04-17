import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/HeaderNavigationMenu";
import { ReactNode } from "react";

type HeaderMenuModel = {
  children: ReactNode;
  className?: string;
};

const HeaderMenu: React.FC<HeaderMenuModel> = ({ children, className }) => {
  return (
    <div className={className}>
      <NavigationMenu>
        <NavigationMenuList>{children}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderMenu;
