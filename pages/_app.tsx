// Dependencies
import App, { Container } from "next/app";
import React, { Fragment } from "react";

import "../styles/main.scss";

// Component
export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      </Container>
    );
  }
}
