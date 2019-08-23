import Document, { Head, Main, NextScript } from "next/document";
import React, { Fragment } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === "production";
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  render() {
    const { isProduction } = this.props;
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
          <meta property="og:image" content="/static/img/home/story.jpg" />
          <meta name="twitter:image" content="/static/img/home/story.jpg" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/img/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {isProduction && (
            <Fragment>
              {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-137071611-1"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '');`
                }}
              /> */}
            </Fragment>
          )}
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
