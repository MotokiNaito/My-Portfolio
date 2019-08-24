import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const metaTitle = "Motoki Naito | Front End Developer &amp; Designer";
    const metaDescription =
      "I am Motoki Naito. Front end developer and Designer based in Vancouver";

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width,  initial-scale=1"
          />
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta name="twitter:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://motoki-naito.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://motoki-naito.com/" />
          <meta property="og:image" content="/static/images/about-bottom.jpg" />
          <meta
            name="twitter:image"
            content="/static/images/about-bottom.jpg"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#fff" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-146415156-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-146415156-1');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
