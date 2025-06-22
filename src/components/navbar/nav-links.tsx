import Link from "next/link";
import { NavigationMenuLink } from "../ui/navigation-menu";


export function NavLinks() {
    return(
        <>
            <NavigationMenuLink asChild>
                <Link href="/">Inicio</Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
                <Link href="/about">Sobre mí</Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
                <Link href="/skill">Habilidades</Link>
            </NavigationMenuLink>
            
            <NavigationMenuLink asChild>
                <Link href="/project">Proyectos</Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
                <Link href="/more">Extra</Link>
            </NavigationMenuLink>    

            <NavigationMenuLink asChild>
                <Link href="/contact">Contacto</Link>
            </NavigationMenuLink>    
        </>
    );
}