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
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 1200px;
  height: auto;
  min-height: 80vh;
  border-radius: 15px;
  margin: 120px auto 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95vw;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    margin-top: 80px;
  }
`;

export const Span = styled.div`
margin-right: 10vh;

  @media (max-width: 761px) {
  margin-right: 10vh;

  @media (max-width: 450px) {
    margin-left: 2.0vh;
  }
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
  font-family: 'Poetsen One', sans-serif;

  &:hover {
    color: #4c4848;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const NavLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 10vw;
`;

export const Button = styled.button`

`;