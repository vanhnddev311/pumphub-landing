import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pumphub - One-stop hub for token creation on Aptos</title>
        <link rel="icon" href="/pumphub-logo.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/pumphub-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet" />
        <meta name="description" content="Pumphub - One-stop hub for token creation on Aptos" />
        <meta name="og:description" content="Pumphub - One-stop hub for token creation on Aptos"/>
        <meta property="og:title" content="Pumphub - One-stop hub for token creation on Aptos"/>
        <meta property="og:image" content="https://movegpt.io/pumphub-thumbnail.png" />
        <meta name="og:image:alt" content="Pumphub - One-stop hub for token creation on Aptos" />
        <meta name="og:url" content="https://pumphub.io/" />
        
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary" />
        
        <meta name="og:locale" content="en" />
        <meta name="og:type" content="article" />
        <meta name="og:site_name" content="Pumphub" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
);
}
