import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/HeaderNavigationMenu";
import { HeaderMenuItemModel } from "@/types/models/header/HeaderMenuItemModel";
import { Link } from "react-router-dom";

const HeaderMenuItem: React.FC<HeaderMenuItemModel> = ({
  tabName,
  children,
}) => {
  return (
    <>
      <NavigationMenuItem>
        {children ? (
          <>
            <NavigationMenuTrigger>{tabName}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>{children}</NavigationMenuLink>
            </NavigationMenuContent>
          </>
        ) : (
          // <Link to="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {tabName}
          </NavigationMenuLink>
          // </Link>
        )}
      </NavigationMenuItem>
    </>
  );
};

export default HeaderMenuItem;
