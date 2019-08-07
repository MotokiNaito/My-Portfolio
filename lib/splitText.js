import { TweenMax } from "gsap";

const splitText = text => {
  const introTitleArray = text.textContent
    .split("")
    .map(char => `<span>${char}</span>`);
  // eslint-disable-next-line no-param-reassign
  text.innerHTML = introTitleArray.join("");
  TweenMax.staggerFromTo(
    text.querySelectorAll("span"),
    0.3,
    { autoAlpha: 0, x: "60px" },
    { autoAlpha: 1, x: "0px" },
    0.05
  );
};

export default splitText;
