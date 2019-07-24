import React from "react";

const IndexPage = () => {
  return (
    <main className="home">
      <div className="home-inner">
        <section className="about panel">
          <h1 className="about__fname">Motoki</h1>
          <h1 className="about__lname">Naito</h1>
          <h3 className="about__title">
            Web Developer <br />
            and Designer
          </h3>
        </section>
        <div className="line-container">
          <div className="line line--first"></div>
          <div className="line line--second"></div>
          <div className="line line--third"></div>
          <div className="line line--fourth"></div>
          <div className="line line--fifth"></div>
        </div>
      </div>
    </main>
  );
};
export default IndexPage;
