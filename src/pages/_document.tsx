import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark scroll-smooth scrollbar scrollbar-thumb-green-50 scrollbar-track-green-400">
      <Head>
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v6.1.1/css/pro.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="bg-light-background text-light-primary dark:bg-dark-background dark:text-dark-primary transition-colors min-h-screen selection:bg-purple-300 selection:text-light-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
