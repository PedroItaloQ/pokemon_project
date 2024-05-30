import { Nav, Image, NavLink, NavLinksContainer } from "@/styles/styledComponent/pokemonPageStyled";

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