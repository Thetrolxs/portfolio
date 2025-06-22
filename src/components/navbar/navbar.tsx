"use client";

import ThemeToggle from "../theme-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import { NavLinks } from "./nav-links";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur border-b shadow-sm">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-4">
                    <NavigationMenuItem className="flex gap-4">
                        <NavLinks />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="flex items-center gap-4">
                        <ThemeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}