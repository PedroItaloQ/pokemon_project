import { Nav, Image, NavLink } from "@/styles/styledComponent/styled";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Image src="/POKEDEX.png" alt="Pokedex" />
            <Link href="/" passHref>
                <NavLink>Home</NavLink>
            </Link>
            <Link href="/PokemonsPage" passHref>
                <NavLink>Pokémons</NavLink>
            </Link>
        </Nav>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });