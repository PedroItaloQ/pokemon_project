import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  // background-color: rgb(251, 61, 61);
  padding: 4px 0;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: white; /* Adiciona a cor de fundo branca */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
  display: flex; /* Adiciona display flex */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  
  width: 90vw; /* Define a largura */
  height: 90vh; /* Define a altura */
  border-radius: 15px; /* Adiciona bordas arredondadas */
  margin: auto; /* Centraliza o Container horizontal e verticalmente */
`;

export const Span = styled.div`

`;

export const Image = styled.img`
  width: 30vh;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rgb(31, 30, 30);
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

export const Button = styled.button`

`;