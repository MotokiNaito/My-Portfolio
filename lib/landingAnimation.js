import { TimelineLite, Power4 } from "gsap";

class LandingAnimation {
  constructor() {
    this.name = document.querySelectorAll(".about__name span");
    this.title = document.querySelectorAll(".about__title span");
    this.landingContainer = document.querySelector(".landing-animation");
    this.landingNameContainer = document.querySelector(
      ".landing-animation__name-container"
    );
    this.landingTiles = document.querySelectorAll(".landing-animation__tile");
    this.landingName = document.querySelectorAll(
      ".landing-animation__name span"
    );

    this.animationStart();
  }

  animationStart = () => {
    const tl = new TimelineLite();
    tl.set(this.landingNameContainer, { display: "block" })
      .staggerFromTo(this.landingName, 0.6, { y: 100 }, { y: 0 }, 0.3, "=+0.5")
      .to(this.landingName, 0.6, { y: -100, autoAlpha: 0 }, "+=0.5")
      .to(this.landingTiles, 1.8, { scaleY: 0, ease: Power4.easeOut })
      .staggerFromTo(
        this.name,
        2,
        { y: 200 },
        { y: 0, ease: Power4.easeOut },
        0.3,
        "-=1.4"
      )
      .fromTo(this.title, 2, { y: 100 }, { y: 0, ease: Power4.easeOut }, "-=2")
      .set(this.landingContainer, {
        display: "none"
      });
  };

  splitText = () => {};
}

export default LandingAnimation;
