import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  background-color: rgb(45, 41, 41);

margin: 0;
padding: 0;
box-sizing: border-box;
}
;`

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />; 
    </>
  )
}
