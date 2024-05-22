import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="pt_BR">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" />      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
