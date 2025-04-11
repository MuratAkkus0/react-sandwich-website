import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/HeaderNavigationMenu";
import { HeaderMenuModel } from "@/types/models/header/HeaderMenuModel";

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
