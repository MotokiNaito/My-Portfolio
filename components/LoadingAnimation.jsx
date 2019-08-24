import React from "react";

const LoadingAnimation = () => (
  <div className="landing-animation">
    <div className="landing-animation__name-container">
      <h1 className="landing-animation__name landing-animation__name--fname">
        <span>Motoki</span>
      </h1>
      <h1 className="landing-animation__name landing-animation__name--lname">
        <span>Naito</span>
      </h1>
    </div>
    <div className="landing-animation__tiles">
      <div className="landing-animation__tile" />
      <div className="landing-animation__tile" />
      <div className="landing-animation__tile" />
      <div className="landing-animation__tile" />
      <div className="landing-animation__tile" />
      <div className="landing-animation__tile" />
    </div>
  </div>
);

export default LoadingAnimation;
