import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/HeaderNavigationMenu";
import { ReactNode } from "react";

type HeaderMenuItemModel = {
  tabName: string;
  children?: ReactNode;
};

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
            <NavigationMenuContent className="w-[500px]">
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
