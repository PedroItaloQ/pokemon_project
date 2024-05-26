import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background: rgb(235,25,43);
    background: linear-gradient(90deg, rgba(235,25,43,1) 0%, rgba(198,17,17,1) 46%, rgba(175,12,12,1) 100%);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 60px;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ChakraProvider>
      <GlobalStyle />
      <Navbar />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      </ChakraProvider>
    </>
  );
}