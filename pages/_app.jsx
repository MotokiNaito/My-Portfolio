// Dependencies
import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";

// Components
import SmoothScrollWrap from "../components/SmoothScrollWrap";

// Styles
import "../styles/main.scss";

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Fragment>
          <PageTransition timeout={300} classNames="transition-">
            <SmoothScrollWrap key={router.route}>
              <Component {...pageProps} />
            </SmoothScrollWrap>
          </PageTransition>
        </Fragment>
      </Container>
    );
  }
}
