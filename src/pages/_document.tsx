import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es-CO">
      <Head title="Portafolio | Ferley Silva">
        <meta name="description" content="Portafolio de Ferley Silva" />
        <meta name="author" content="Ferley Silva" />
        <meta name="keywords" content="Fer, Portafolio" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
