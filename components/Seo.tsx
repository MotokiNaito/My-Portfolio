import React from "react";
import Head from "next/head";

const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default SEO;
