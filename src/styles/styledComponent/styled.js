import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgb(255, 140, 0);
    padding: 10px 0;
    z-index: 1000;
`;

export const Image = styled.img`
    width: 30vh;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;