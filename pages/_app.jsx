// Dependencies
import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";

// Styles
import "../styles/main.scss";

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Fragment>
          <PageTransition timeout={300} classNames="transition-">
            <Component {...pageProps} />
          </PageTransition>
        </Fragment>
      </Container>
    );
  }
}
