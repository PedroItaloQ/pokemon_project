import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(255, 140, 0);
  padding: 10px 0;
  z-index: 1000;
`;

export const Container = styled.div`

`;

export const Span = styled.div`

`;

export const Image = styled.img`
  width: 30vh;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rgb(255, 0, 0);
  margin: 0 3rem;
  font-weight: bold;
  margin-top: 3vh;
  font-family: 'Poetsen One', sans-serif; // Adiciona a fonte

  &:hover {
    color: rgb(175, 0, 0);
  }
`;

export const NavLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 10vw;
`;