import React, { useEffect } from "react";

import SmoothScroll from "../lib/smoothScroll";
import LandingAnimation from "../lib/landingAnimation";

import SEO from "../components/Seo";
import Header from "../components/Header";
import LoadingAnimation from "../components/LoadingAnimation";
import BackgroundLines from "../components/BackgroundLines";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const IndexPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new SmoothScroll();
    // eslint-disable-next-line no-new
    new LandingAnimation();
  }, []);

  return (
    <>
      <SEO
        title="Motoki Naito | Front End Developer based in Vancouver"
        description="I am Motoki Naito. Front end developer and Designer based in Vancouver"
      />
      <LoadingAnimation />
      <BackgroundLines />
      <Header />
      <main className="home scroll-container" data-section="about">
        <div className="home-inner">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
