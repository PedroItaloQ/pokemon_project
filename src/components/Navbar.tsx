import { Nav, Image, NavLink, NavLinksContainer } from "@/styles/styledComponent/styled";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Image src="/POKEDEX.png" alt="Pokedex" />
            <NavLinksContainer>
                <NavLink href="/" passHref>
                    Home
                </NavLink>
                <NavLink href="/PokemonPage" passHref>
                    Pokémons
                </NavLink>
            </NavLinksContainer>
        </Nav>
    )
}

export default Navbar;