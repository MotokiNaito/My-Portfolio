import React from "react";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default SEO;
