import React from "react";

const About = () => (
  <>
    <section className="about panel">
      <h1 className="about__name about__name--first">
        <span>Motoki</span>
      </h1>
      <h1 className="about__name about__name--last">
        <span>Naito</span>
      </h1>
      <h3 className="about__title">
        <div>
          <span>UX Developer</span>
        </div>
        <div>
          <span>based in Japan</span>
        </div>
      </h3>
    </section>
    <section className="about-img panel">
      <div className="about-img__bottom">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${"/static/images/about-bottom.jpg"})`
          }}
        />
      </div>
      <div className="about-img__top">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${"/static/images/about.jpg"})`
          }}
        />
      </div>
    </section>
    <section className="about-detail panel">
      <div className="about-detail__inner" data-reveal="container">
        <h2 className="about-detail__intro" data-reveal="fade-in">
          I bridge the gap between <br />
          design and development.
        </h2>
        <h4 className="about-detail__skills" data-reveal="fade-in">
          Skills <br />
          Figma, Sketch, Photoshop, Illustorator
          <br />
          HTML, CSS, SCSS, React.js, Redux, Next.js, Typescript, Express.js,
          Node.js, PHP, Wordpress
        </h4>
      </div>
    </section>
  </>
);

export default About;
